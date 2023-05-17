import React, { useState,useEffect } from 'react'
import "./Home.css"
import KohinoorHome from "../assets/kohinoor-hinjawadi-central-desktop-home.png"
import kohinoorLogo from "../assets/Kohinoor logo-01.png"

const Home = () => {
  const [isOpen, setIsOpen]= useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Turn off scrolling when popup is open
    } else {
      document.body.style.overflow = "auto"; // Turn on scrolling when popup is closed
    }

    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling when component unmounts
    };
  }, [isOpen]);

  return (
    // <div className='home-cont' id="home">
    //     <div className='home-header'>
    //         <h1>Kohinoor Hinjewadi Central</h1>
    //         <h2>Luxurious 2 & 3 BHK Homes Starts at 68 Lacs*</h2>
    //     </div>
    //     <div className='enquiryform-cont'> 
    //         <h2>Schedual a site visit.</h2>
    //         <form action="">
    //             <div><input type="text" name="" id="" placeholder='Full Name'/></div>
    //             <div><input type="text" name="" id="" placeholder='Email'/></div>
    //             <div><input type="text" name="" id="" placeholder='Mobile Number'/></div>
    //             <div className='submit-btn-cont'><button type='submit'>Submit</button></div>
    //         </form>
    //     </div>
    // </div>
    <>
    <div className='home-cont' id="home">
      <div className='kohinoor-home-img-cont'>
        <img src={KohinoorHome} alt="" />
      </div>
      <button className='home-btn' onClick={()=>setIsOpen(!isOpen)}>Know More</button>
    </div>
    {
      isOpen && (
        <div className="popupContainer">
          <div className="popup">
            <div className="popup-img-cont"><img src={kohinoorLogo} alt="" /></div>
            <div className="popup-inp-cont">
            <h2>Register now to know more!</h2>
            <form>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                type="tel"
                name="number"
                placeholder="Phone Number"
                required
              />
              <div className="popup-submit-btn-cont"><button className="submit-btn">Know more</button></div>
            </form>
            <button className="close-btn" onClick={()=>setIsOpen(false)}>X</button>
            </div>
          </div>
        </div>
      )
    }
    </>
  )
}

export default Home