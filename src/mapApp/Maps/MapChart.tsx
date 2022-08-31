import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import * as classes from './style.module.css';
import  mergedObject  from "./MergeMaps"

const geoUrlSou = "/southwark.json";
const geoUrlLam = "/lambeth.json";
const geoUrlLew = "/lewisham.json";
const geoUrlGre = "/greenwich.json";
const geoUrlTH = "/towerhamlets.json";
const geoUrlWand = "/wandsworth.json";

const geoUrlCam = "/camden.json";
const geoUrlCity = "/citylondon.json";
const geoUrlEal = "/ealing.json";
const geoUrlHack = "/hackney.json";
const geoUrlHam = "/hammerFulham.json";
const geoUrlIs = "/islington.json";
const geoUrlKen = "/kensingtonChelsea.json";
const geoUrlNew = "/newham.json";
const geoUrlWest = "/westminster.json";



const MapChart = () => {
      const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
    
      function handleZoomIn() {
        if (position.zoom >= 4) return;
        setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
      }
    
      function handleZoomOut() {
        if (position.zoom <= 1) return;
        setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
      }
    
      function handleMoveEnd(position) {
        setPosition(position);
      }

    return (
    <div className={classes.body}>

      <ComposableMap
      className={classes.map}
      // projectionConfig={{ scale: 155 }} 
      projectionConfig={{ center: [-0.111442726135935,51.38097591728218] , scale: 80000 }}
      center={[0,0]}
      width= {800}
      height= {600}

      >
        <ZoomableGroup
          className={classes.svg}
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >

        <Geographies
        className={classes.svg}
        geography={mergedObject}>         
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))}
        </Geographies>

        </ZoomableGroup>

      </ComposableMap>
      
      <div className={classes.controls}>
        <button onClick={handleZoomIn} className={classes.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <button onClick={handleZoomOut} className={classes.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>



    </div>
  );
}

export default MapChart;
