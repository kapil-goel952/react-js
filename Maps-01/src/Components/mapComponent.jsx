import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

const MapComponent = () => {
  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
       
      }}
    >

      <MapContainer
        center={[30.7333, 76.7794]}
        zoom={17}
        maxZoom={19}
        scrollWheelZoom={true}

      
      >

        {/* Satellite Imagery */}
        <TileLayer
          url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          attribution='Tiles © Esri'
        />

        {/* Labels / Names Layer */}
        <TileLayer
          url='https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
          attribution='Labels © Esri'
        />

      </MapContainer>

    </div>
  )
}

export default MapComponent