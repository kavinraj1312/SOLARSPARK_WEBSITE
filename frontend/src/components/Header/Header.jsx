import React from 'react'
import './Header.css'


const Header = () => {
  console.log("rendering home")
  return (
    <div className='header'>
    <div className='header-content'>
     <h2>Illuminate your life with sustainable solar solutions.</h2>
     <p>Empowering your space with SolarSpark's top-tier solar technology. Experience clean, efficient energy for a sustainable tomorrow.</p>
     </div>
    </div>
  )
}

export default React.memo(Header)
