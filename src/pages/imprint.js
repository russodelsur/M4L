import React from "react";
import { Page } from "../components/Page/index";
import { Seo } from "../components/Seo/index";
import { LegalSection } from "../sections/Legal/index";

export default function ImprintPage() {
  return (
    <>
      <Seo title="Imprint" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="imprint" heading="Imprint" />
      </Page>
    </>
  );
}
