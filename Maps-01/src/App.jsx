import './index.css'
import MapComponent from './Components/mapComponent'
import Navbar from './Components/mapComponent'

function App() {

  return (
    <div style={{

      height: "100%",
      width: "100%",



    }}>

      <div
        style={{
          backgroundColor: "red",
          height: "50px",
          paddingTop: "8px",
          paddingBottom: "4px",
          paddingLeft: "5px",
          paddingRight: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent:"space-between"
        }}>

        <div
          style={{
            display:"flex",
          alignItems: "center"

          }}>

          <img
            src="https://images.unsplash.com/photo-1603189617530-6d32306f57c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJNV3xlbnwwfHwwfHx8MA%3D%3D"
            alt="logo"
            style={
              {
                height: "35px",
                width: "35px",
                borderRadius: "50%",
                marginRight: "10px"
              }
            } />

          <p>MAP Work</p>
        </div>

      </div>
      {/* <div style={{
        alignItems: "center",
        justifyContent: "center"
      }}>
        <MapComponent />
      </div> */}

    </div>
  )
}

export default App