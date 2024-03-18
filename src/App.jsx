import './App.css'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Fabric from './components/Fabric/Fabric'
import Images from './images'
import Footer from './components/Footer/Footer'
import Payment from './components/Payment/Payment'
import Testimonial from './components/Testimonial/Testiomonial'
function App() {
  

  return (
    <>
      <Navbar/>
      <Slider images={Images} />
      <Fabric/>
      <Payment/>
      
     <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
