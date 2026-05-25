import React, { useState } from 'react'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
import Modal from './Modal'


function MapEvents({ setShowModal, setClickedPosition }) {

  useMapEvents({

    click(e) {

      console.log(e.latlng)

      setClickedPosition(e.latlng)

      setShowModal(true)
    }

  })

  return null
}


const MapComponent = () => {

  const [showModal, setShowModal] = useState(false)

  const [clickedPosition, setClickedPosition] = useState(null)

  const [locations, setLocations] = useState([])

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
        <MapEvents
          setShowModal={setShowModal}
          setClickedPosition={setClickedPosition}
        />

        {/* SATELLITE LAYER */}
        <TileLayer
          url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          attribution='Tiles © Esri'
        />

        {/* LABELS LAYER */}
        <TileLayer
          url='https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
          attribution='Labels © Esri'
        />

      </MapContainer>


      {/* MODAL */}
      {
        showModal && (

          <Modal
            setShowModal={setShowModal}
            clickedPosition={clickedPosition}
            locations={locations}
            setLocations={setLocations}
          />

        )
      }

    </div>
  )
}

export default MapComponent