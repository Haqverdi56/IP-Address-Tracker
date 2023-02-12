
import React, { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";
import L from "leaflet";
import location from "../assets/loca.svg"

const myIcon = new L.Icon({
  iconUrl: location,
  iconRetinaUrl: location,
  popupAnchor: [-0, -0],
  iconSize: [25, 35],
});

function MarkerLocation({ location }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(location, 11, {
      animate: true,
    });
  }, [map, location]);

  return (
    <Marker icon={myIcon} position={location}>
    </Marker>
  );
}

export default MarkerLocation;