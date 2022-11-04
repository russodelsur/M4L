import React from "react";
import { Seo } from "../components/Seo/index";
import { App } from "../mapApp/Maps/maps";
import AppApi from '../mapApp/API/Ukpi';
import Ukpd from '../mapApp/API/Ukpd'

export default function MapsPage() {
  return (
    <>
      <Seo title="London Map" useTitleTemplate={true} noIndex={true} />
        <App>  
        </App>
        <AppApi/>  
        <Ukpd/>
    </>
  );
}
