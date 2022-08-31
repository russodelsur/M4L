import React from "react";
import { AboutSection } from "../sections/About/index";
// import { ArticlesSection } from "../sections/Articles/index";
import { ContactSection } from "../sections/Contact/index";
import { HeroSection } from "../sections/Hero/index";
import { InterestsSection } from "../sections/Interests/index";
import { Page } from "../components/Page/index";
import { ProjectsSection } from "../sections/Projects/index";
import { Seo } from "../components/Seo/index";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About us" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <InterestsSection sectionId="details" heading="Our services" />
        <ProjectsSection sectionId="ourservices" heading="Account types" />
        <ContactSection sectionId="contactus" heading="Issues?" />
      </Page>
    </>
  );
}
