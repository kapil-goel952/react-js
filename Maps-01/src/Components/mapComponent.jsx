import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const MapComponent = () => {
  return (
    <div>

      <MapContainer
        center={[30.7333, 76.7794]}
        zoom={13}
        scrollWheelZoom={true}
        style={{
          height: '80vh',
          width: '80vw',
          borderRadius: '8',
        }}
      >

        <TileLayer
          attribution='Tiles &copy; Esri'
          url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        />

      

      </MapContainer>

    </div>
  )
}

export default MapComponent