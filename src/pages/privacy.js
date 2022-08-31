import React from "react";
import { Page } from "../components/Page/index";
import { Seo } from "../components/Seo/index";
import { LegalSection } from "../sections/Legal/index";

export default function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy Policy" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="privacy" heading="Privacy Policy" />
      </Page>
    </>
  );
}
