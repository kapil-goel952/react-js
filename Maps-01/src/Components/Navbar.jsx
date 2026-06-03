import React from 'react'

const Navbar = () => {
  return (
     <div
        style={{
          // backgroundColor: "red",
          padding:"20px",
          height: "50px",
          paddingTop: "15px",
          paddingBottom: "4px",
          paddingLeft: "5px",
          paddingRight: "5px",
          display: "flex",
          position:"sticky",
          top:"0px",
          alignItems: "center",
          justifyContent: "space-between"
        }}>

        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}>

          <img
            src="https://images.unsplash.com/photo-1603189617530-6d32306f57c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJNV3xlbnwwfHwwfHx8MA%3D%3D"
            alt="logo"
            style={
              {
                height: "36px",
                width: "36px",
                borderRadius: "50%",
                marginRight: "10px"
              }
            } />

          <p>MAP Work</p>
        </div>
        <div
        style={{
          display:"flex",
          alignItems: "center",
        }}>
             <button id='btn' onclick=''>Home</button>
          <button id='btn'>Search</button>
          <button id='btn'>Contact</button>
          <button id='btn'>About us</button>
          <button id='btn'>Services</button>
       
        </div>
      </div>
  )
}

export default Navbar
