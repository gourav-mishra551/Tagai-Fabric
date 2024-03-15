import './App.css'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Fabric from './components/Fabric/Fabric'
import Images from './images'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <Slider images={Images} />
      <Fabric/>
      <Footer/>
    </>
  )
}

export default App
