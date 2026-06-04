import './index.css'
import MapComponent from './Components/mapComponent'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div style={{
    }}>
      <div style={{position:"sticky",
        top:0
      }}>
        <Navbar/>
      </div>
      <div>
        <MapComponent />
      </div>
    </div>
  )
}

export default App