import React from 'react'
import "./Ammenities.css"
import forestImg from "../assets/forest.png"
import outdoorWorkpods from "../assets/working.png"
import creche from "../assets/kindergarten.png"
import library from "../assets/book.png"
import coworking from "../assets/coworkers.png"
import gym from "../assets/man-lifting-weight.png"
import theator from "../assets/theatre.png"
import hotfut from "../assets/field.png"

const Ammenities = () => {
  return (
    <div className='ammenities-parentcont' id="ammenities">
      <h2>Amenities</h2>
    <div className='ammenities-cont'>
        <div><img src={forestImg} alt="" />
        <p>Miyawaki Forest</p>
        </div>
        <div><img src={outdoorWorkpods} alt="" />
        <p>Outdoor workpods</p></div>
        <div><img src={coworking} alt="" />
        <p>Co-Working Lounge</p>
        </div>
        <div><img src={hotfut} alt="" />
        <p>Hotfut</p>
        </div>
        <div><img src={gym} alt="" />
        <p>Indoor Gym</p>
        </div>
        <div><img src={creche} alt="" />
        <p>Creche</p>
        </div>
        <div><img src={library} alt="" />
        <p>Library</p>
        </div>
        <div><img src={theator} alt="" />
        <p>Mini Theator</p>
        </div>
    </div>
    </div>
  )
}

export default Ammenities