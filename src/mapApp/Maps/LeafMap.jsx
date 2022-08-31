import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import  TopoJSON  from "./MergeMaps"
import * as classes from './style.module.css';

import geoUrlSou from "../../../static/southwark.json";
import geoUrlLam from "../../../static/lambeth.json";
import geoUrlLew from "../../../static/lewisham.json";
import geoUrlGre from "../../../static/greenwich.json";
import geoUrlTH from "../../../static/towerhamlets.json";
import geoUrlWand from "../../../static/wandsworth.json";

import geoUrlCam from "../../../static/camden.json";
import geoUrlCity from "../../../static/citylondon.json";
import geoUrlEal from "../../../static/ealing.json";
import geoUrlHack from "../../../static/hackney.json";
import geoUrlHammer from "../../../static/hammerFulham.json";
import geoUrlIs from "../../../static/islington.json";
import geoUrlKen from "../../../static/kensingtonChelsea.json";
import geoUrlNew from "../../../static/newham.json";
import geoUrlWest from "../../../static/westminster.json";



export default function Leaf() {


    
  return (
    <MapContainer
      center={[51.4579, -0.0877]}
      zoom={11}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/uk-openzoomstack-light/256/{z}/{x}/{y}.png?key=yJ8DMC9rhQCPbGyOdPeD"
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TopoJSON className={classes.svg} data={geoUrlSou} />
      <TopoJSON className={classes.svg} data={geoUrlLam} />
      <TopoJSON className={classes.svg} data={geoUrlLew} />
      <TopoJSON className={classes.svg} data={geoUrlGre} />
      <TopoJSON className={classes.svg} data={geoUrlCity} />
      <TopoJSON className={classes.svg} data={geoUrlCam} />
      <TopoJSON className={classes.svg} data={geoUrlTH} />
      <TopoJSON className={classes.svg} data={geoUrlWand} />
      <TopoJSON className={classes.svg} data={geoUrlEal} />
      <TopoJSON className={classes.svg} data={geoUrlHack} />
      <TopoJSON className={classes.svg} data={geoUrlHammer} />
      <TopoJSON className={classes.svg} data={geoUrlIs} />
      <TopoJSON className={classes.svg} data={geoUrlKen} />
      <TopoJSON className={classes.svg} data={geoUrlNew} />
      <TopoJSON className={classes.svg} data={geoUrlWest} />
    </MapContainer>
  );
}
