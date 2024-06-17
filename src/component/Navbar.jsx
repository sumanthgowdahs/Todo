import React from 'react'
import DeleteAllItems from './NavbarComponent/DeleteAllItems'
// import Navlinks from './NavbarComponent/Navlinks'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='nav'>
    <div className='navBar'>
      <h1>Todo Lists</h1>
      <div className='links'>
        <Link to="/">All Items</Link>
        <br />
        <Link to="/recyclebin">recyclebin</Link>
      </div>
    </div>
    </div>
    
  )
}

export default Navbar