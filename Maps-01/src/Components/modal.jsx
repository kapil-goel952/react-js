import React from 'react'

const Modal = ({ setShowModal }) => {

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
          width: "300px"
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
  )
}

export default Modal