import './index.css'
import MapComponent from './Components/mapComponent'
import Navbar from './Components/mapComponent'

function App() {

  return (
    <div style={{
      display: "flex",
      height: "100%",
      width: "100%",
      margin:"50px",
      

    }}>
      {/* <div>
        <Navbar/>
      </div> */}
      <div style={{
        alignItems: "center",
        justifyContent: "center"
      }}>
        <MapComponent />
      </div>

    </div>
  )
}

export default App