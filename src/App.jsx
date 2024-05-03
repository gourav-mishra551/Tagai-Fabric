import './App.css'
import Home from './Pages/Home/Home'
import {BrowserRouter ,Route , Routes } from 'react-router-dom';
import Products from './Pages/Products/Products';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Profile from './Pages/Profile/Profile';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/products' element = {<Products/>}></Route>
      <Route path='/contact' element = {<Contact/>}></Route>
      <Route path='/about' element = {<About/>}></Route>
      <Route path = '/profile' element = {<Profile/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
