import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./styles";

const BaseMap = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoidGljcm9tMSIsImEiOiJja3h1MGtlcWI5M2FuMzFxMzV4YXI1NXh0In0.RMxpXnUmdmLInGEQesC0iw';

  useEffect(() => {
    new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });
  }, []);

  return <div id="mapContainer" className="map"></div>;
};

export default BaseMap;