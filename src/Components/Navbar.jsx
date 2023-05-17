import React, { useState } from 'react'
import "./Navbar.css"
import mainLogo from "../assets/Kohinoor new logo for website-01 (1)-2.webp"
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
  const [navState, setNavState]= useState(false)

  return (
    <div className='nav-cont'>
        <div className='nav-logo-cont'>
            <img src={mainLogo} alt="logo" />
        </div>
        <div className='nav-optcont'>
            <ul className={navState?"mobile-nav show":"nav-opts"} onClick={()=>setNavState(false)}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#ammenities">Amenities</a></li>
                <li><a href="#floorplans">Floor Plans</a></li>
                <li><a href="#bestpricing">Best Pricing</a></li>
                <li><a href="#location">Location & Connectivity</a></li>
            </ul>
            {/* {menu opt btn} */}
            <div className='hammburger-menu' onClick={()=>setNavState(!navState)}>
              <GiHamburgerMenu/>
            </div>
        </div>
    </div>
  )
}

export default Navbar