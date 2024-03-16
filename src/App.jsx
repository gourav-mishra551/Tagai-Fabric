import './App.css'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Fabric from './components/Fabric/Fabric'
import Images from './images'
import Footer from './components/Footer/Footer'
import Payment from './components/Payment/Payment'

function App() {
  

  return (
    <>
      <Navbar/>
      <Slider images={Images} />
      <Fabric/>
      <Payment/>
      <Footer/>
    </>
  )
}

export default App
