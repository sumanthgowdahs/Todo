import React from 'react'
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import './App.css'
import Navbar from './component/Navbar'
import Recycle from './component/NavbarComponent/Recycle'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      {/* <button>remove</button> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recyclebin' element={<Recycle/>}/>
       </Routes>
      
     
      </BrowserRouter>
      
     
    </div>
  )
}

export default App
