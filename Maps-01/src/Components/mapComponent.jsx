import React, { useState } from 'react'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'

import Modal from './Modal'


function MapEvents({ setShowModal }) {

  useMapEvents({

    click() {

      console.log("Map Clicked")

      setShowModal(true)
    }

  })

  return null
}


const MapComponent = () => {

  const [showModal, setShowModal] = useState(false)

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

        style={{
          height: "80vh",
          width: "80vw",
        }}
      >

        {/* CLICK EVENT COMPONENT */}
        <MapEvents setShowModal={setShowModal} />

        {/* Satellite Layer */}
        <TileLayer
          url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          attribution='Tiles © Esri'
        />

        {/* Labels Layer */}
        <TileLayer
          url='https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
          attribution='Labels © Esri'
        />

      </MapContainer>

      {/* MODAL COMPONENT */}
      {
        showModal &&
        <Modal setShowModal={setShowModal} />
      }

    </div>
  )
}

export default MapComponent