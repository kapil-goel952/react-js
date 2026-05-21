import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapComponent = () => {
  return (
    <div className='h-screen w-full bg-black p-4'>

      <div className='h-full w-full overflow-hidden rounded-4xl shadow-2xl border border-gray-800'>

        <MapContainer
          center={[30.7333, 76.7794]}
          zoom={13}
          scrollWheelZoom={true}
          className='h-full w-full z-0'
        >

          {/* Satellite / Aerial View */}
          <TileLayer
            attribution='Tiles &copy; Esri'
            url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          />

          {/* Marker */}
          <Marker position={[30.7333, 76.7794]}>

            <Popup>
              <div className='font-semibold text-lg'>
                Chandigarh 🚀
              </div>

              <p className='text-sm'>
                Satellite view using Leaflet
              </p>
            </Popup>

          </Marker>

        </MapContainer>

      </div>

    </div>
  )
}

export default MapComponent