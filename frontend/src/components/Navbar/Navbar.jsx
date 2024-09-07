import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [menu,setMenu]=useState('home')
    



  return (
    <div className='navbar'>
    <h2 className='logo'>SolarSpark.</h2>
    <ul className='navbar-menu'>
        <li className={menu==='home'?"active":""} ><Link to="/" onClick={() => setMenu('home')}>Home</Link></li>
        <li className={menu==='Areas'?"active":"" }  ><Link to="/area" onClick={() => setMenu('areas')}>Areas</Link></li>
        <li className={menu==='installations'?"active":"" }  ><Link to="/installations" onClick={() => setMenu('installations')}>Installations</Link></li>
        <li className={menu==='services'?"active":""}  ><Link to="/services" onClick={()=>setMenu('services')}>Services</Link> </li>
        <li className={menu==='about'?"active":""}  ><Link to="/about" onClick={()=>setMenu('about')}>About</Link> </li>
        <li className={menu==='adminlogin'?"active":""}> <div className='navbar-right' >
    <Link  to="/login" onClick={()=>setMenu('adminlogin')}>Admin Login</Link>

    </div></li>
    </ul>
   
      
    </div>
  )
}

export default Navbar
