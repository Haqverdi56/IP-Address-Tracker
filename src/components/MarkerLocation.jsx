
import React, { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";

function MarkerLocation({ location }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(location, 11, {
      animate: true,
    });
  }, [map, location]);

  return (
    <Marker position={location}>
    </Marker>
  );
}

export default MarkerLocation;