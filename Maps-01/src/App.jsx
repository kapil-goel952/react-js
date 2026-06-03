import './index.css'
import MapComponent from './Components/mapComponent'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div style={{
    }}>
      <div>
      <Navbar/>
      </div>
      <div>
        <MapComponent />
      </div>
    </div>
  )
}

export default App