import React, { useState } from 'react'
import "./Enquiry.css"
import kohinoorFooterlogo from "../assets/Kohinoor logo-01.png"
import mainImg from "../assets/main2.jpeg"

const Enquiry = () => {
  const [enquiryData, setEnquiryData]= useState({
    name:"",
    email:"",
    number:""
  })


  const handleChange=(e)=>{
    const name= e.target.name
    const value= e.target.value
    setEnquiryData({...enquiryData, [name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(enquiryData)
  }
  return (
    <div className='footer-parent-cont'>
    <div className='footer-logo-cont'><img src={kohinoorFooterlogo} alt="" /></div>
    <div className='enquiry-form-cont'>
        <div className='enquiry-leftside'>
            <img src={mainImg} alt="enquiry" />
        </div>
        <div className='enquiry-rightside'>
            <h1 className='drop-enquiry'>DROP AN ENQUIRY</h1>
            <form onSubmit={handleSubmit}>
                <div><input type="text" placeholder='Name' required onChange={handleChange}/></div>
                <div><input type="text" placeholder='Email' required/></div>
                <div><input type="text" placeholder='Mobile Number' required/></div>
                <div className='enquiry-submit-btn-cont'><button className='enquiry-submit-btn' type="submit">Schedule a site visit</button></div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Enquiry