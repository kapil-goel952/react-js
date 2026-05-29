import React, { useState } from 'react'

const Modal = ({
  setShowModal,
  clickedPosition,
  locations,
  setLocations
}) => {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    notes: ""
  })


  function handleSave() {

    const finalData = {

      lat: clickedPosition.lat,
      lng: clickedPosition.lng,

      ...formData
    }

    console.log(finalData)

    setLocations([...locations, finalData])

    setShowModal(false)
  }

  return (

    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",

        backgroundColor: "rgba(0,0,0,0.5)",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        zIndex: 9999
      }}
    >

      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >

        <h1>Add Location Details</h1>

        <p>
          Latitude : {clickedPosition?.lat}
        </p>

        <p>
          Longitude : {clickedPosition?.lng}
        </p>


        {/* TITLE */}
        <input
          type="text"
          placeholder="Enter Title"

          value={formData.title}

          onChange={(e) =>

            setFormData({
              ...formData,
              title: e.target.value
            })

          }

          style={{
            padding: "10px"
          }}
        />


        {/* DESCRIPTION */}
        <textarea
          placeholder="Enter Description"

          value={formData.description}

          onChange={(e) =>

            setFormData({
              ...formData,
              description: e.target.value
            })

          }

          style={{
            padding: "10px",
            height: "80px"
          }}
        />


        {/* NOTES */}
        <textarea
          placeholder="Enter Notes"

          value={formData.notes}

          onChange={(e) =>

            setFormData({
              ...formData,
              notes: e.target.value
            })

          }

          style={{
            padding: "10px",
            height: "80px"
          }}
        />


        <button
          onClick={handleSave}

          style={{
            padding: "12px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"   }}
        >
          Save
        </button>


        <button
          onClick={() => setShowModal(false)}

          style={{
            padding: "12px",
         
          }}
        >
          Close
        </button>

      </div>

    </div>
  )
}

export default Modal