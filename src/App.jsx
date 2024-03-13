import './App.css'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Fabric from './components/Fabric/Fabric'
import Images from './images'

function App() {
  

  return (
    <>
      <Navbar/>
      <Slider images={Images} />
      <Fabric/>
    </>
  )
}

export default App
