import React from 'react'
import Location from "../assets/locationImg.png"
import "./LocationConnect.css"

const LocationConnect = () => {
  return (
    <div className='location-info' id="location">
        <h2 className='location-head'>Project Location</h2>
        <div className='location-cont'>
        <div className='location-leftside'>
            <img src={Location} alt="location" />
        </div>
        <div className='location-rightside'>
            <h2><span>Project </span>Highlights</h2>
                <p>1. Prominent Location in Hinjewadi</p>
                <p>2. Close to Metro Station</p>
                <p>3. Amenities for Entire Family</p>
                <p>4. High Quality Amenities</p>
                <p>5. 24x7 Security </p>
                <p>6. Co Working Area With library</p>
                <p>7. Mini Theatre</p>
        </div>
        </div>
    </div>
  )
}

export default LocationConnect