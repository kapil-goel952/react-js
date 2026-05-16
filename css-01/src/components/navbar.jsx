import React from 'react'
import '../styles/Navbar.css'

const navbar = () => {
  return (
    <div className='navbar'>
      <img src="https://www.citypng.com/public/uploads/preview/hd-red-bull-energy-logo-png-701751694778707w00dbzhxd1.png" alt="" />
      <div className="head"><h1 id="red">Red </h1 ><h1 id="bull">Bull</h1></div>
      <div className="button">
        <button>Sign in </button>
        <button>Sign UP </button>
      </div>
    </div>
  )
}

export default navbar

