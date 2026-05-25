import React, { useState } from 'react'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'

/* MAP CLICK EVENT COMPONENT */
const MapEvents = ({ setShowModal }) => {

  useMapEvents({

    click() {
      console.log("Map Clicked")

      // Modal open
      setShowModal(true)
    }

  })

  return null
}

const MapComponent = () => {

  // MODAL STATE
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

        {/* CLICK EVENTS */}
        <MapEvents setShowModal={setShowModal} />

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

      {/* MODAL */}
      {
        showModal &&

        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0,0,0,0.5)",

            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >

          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "10px",
              minWidth: "300px"
            }}
          >

            <h1>Modal Opened</h1>

            <button
              onClick={() => setShowModal(false)}
            >
              Close
            </button>

          </div>

        </div>
      }

    </div>
  )
}

export default MapComponent