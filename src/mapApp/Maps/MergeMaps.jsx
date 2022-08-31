import React, { useRef, useEffect } from "react";
import { GeoJSON } from "react-leaflet";
import * as topojson from "topojson-client";

export default function TopoJSON(props) {
  const layerRef = useRef(null);
  const { data, ...otherProps } = props;

  function addData(layer, jsonData) {
    if (jsonData.type === "Topology") {
      for (let key in jsonData.objects) {
        let geojson = topojson.feature(jsonData, jsonData.objects[key]);
        layer.addData(geojson);
      }
    } else {
      layer.addData(jsonData);
    }
  }

  function onEachFeature(feature, layer) {
    if (feature.properties) {
      const { MSOA11CD, MSOA11NM } = feature.properties;
      layer.bindPopup(`${MSOA11CD}, ${MSOA11NM}`);
    }
  }

  useEffect(() => {
    const layer = layerRef.current;
    addData(layer, props.data);
  }, [props.data]);

  return (
    <GeoJSON ref={layerRef} {...otherProps} onEachFeature={onEachFeature} />
  );
}


// const geoUrlSou = "/southwark.json";
// const geoUrlLam = "/lambeth.json";
// const geoUrlLew = "/lewisham.json";
// const geoUrlGre = "/greenwich.json";
// const geoUrlTH = "/towerhamlets.json";
// const geoUrlWand = "/wandsworth.json";

// const geoUrlCam = "/camden.json";
// const geoUrlCity = "/citylondon.json";
// const geoUrlEal = "/ealing.json";
// const geoUrlHack = "/hackney.json";
// const geoUrlHam = "/hammerFulham.json";
// const geoUrlIs = "/islington.json";
// const geoUrlKen = "/kensingtonChelsea.json";
// const geoUrlNew = "/newham.json";
// const geoUrlWest = "/westminster.json";

// const mergedObject = {
//   geoUrlSou,
//   geoUrlLam, 
//   geoUrlLew, 
//   geoUrlGre, 
//   geoUrlGre, 
//   geoUrlTH, 
//   geoUrlWand, 
//   geoUrlCam, 
//   geoUrlCity, 
//   geoUrlEal, 
//   geoUrlHack, 
//   geoUrlHam, 
//   geoUrlIs, 
//   geoUrlKen, 
//   geoUrlNew, 
//   geoUrlWest
// };

// export default mergedObject


// console.log(mergedObject);

