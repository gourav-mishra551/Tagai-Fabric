import './App.css'
import Home from './Pages/Home/Home'
import {BrowserRouter ,Route , Routes } from 'react-router-dom';
import Products from './Pages/Products/Products';
import Contact from './Pages/Contact/Contact';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/products' element = {<Products/>}></Route>
      <Route path='/contact' element = {<Contact/>}></Route>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
