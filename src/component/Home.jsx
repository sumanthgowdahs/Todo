import React from 'react'
import Input from './Input'
import Items from './Items'
// import AllTasks from '../AllTasks'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recycle from './NavbarComponent/Recycle'
import DeleteAllItems from './NavbarComponent/DeleteAllItems'

function Home() {
  return (
    <div className='home'>
      <div className='homeBox'>
        
        <Input />
        <br />
        <br />
        <Items/>
    
      </div>
      <DeleteAllItems/>


    </div>
  )
}

export default Home