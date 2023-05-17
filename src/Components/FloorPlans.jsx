import React, { useContext } from 'react'
import "./FloorPlans.css"
import floorPlanA from "../assets/floorplan-a.jpg"
import floorPlanB from "../assets/floorplan-b.jpg"
import floorPlanC from "../assets/floorplan-c.jpg"
import floorPlanD from "../assets/floorplan-d.jpg"
import { FormPopupContext } from '../App'

const FloorPlans = () => {
    const {togglePopup}=useContext(FormPopupContext)

  return (
    <div className='floorplan-cont' id="floorplans">
        <h2><span>Kohinoor</span> Floor Plans</h2>
        <div className='floorplanimg-cont'>
            <div className='floorplan-img-btn-cont'>
                <img src={floorPlanA} alt="" />
                <button onClick={togglePopup}>View Plan</button>
            </div>
            <div className='floorplan-img-btn-cont'>
                <img src={floorPlanB} alt="" />
                <button onClick={togglePopup}>View Plan</button>
            </div>
            <div className='floorplan-img-btn-cont'>
                <img src={floorPlanC} alt="" />
                <button onClick={togglePopup}>View Plan</button>
            </div>
            <div className='floorplan-img-btn-cont'>
                <img src={floorPlanD} alt="" />
                <button onClick={togglePopup}>View Plan</button>
            </div>
        </div>
    </div>
  )
}

export default FloorPlans