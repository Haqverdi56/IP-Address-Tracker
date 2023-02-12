import React from 'react'
import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import MarkerLocation from './MarkerLocation'

function Map({location, data}) {
    
  return (
    <MapContainer center={location} zoom={7} scrollWheelZoom={false} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerLocation data={data} location={location}/> 
    </MapContainer>
  )
}

export default Map;