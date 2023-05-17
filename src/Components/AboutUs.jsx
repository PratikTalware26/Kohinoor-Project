import React from 'react'
import "./AboutUs.css"
import aboutImg from "../assets/Home-main.jpeg"

const AboutUs = () => {
  return (
    <>
    <div className='about-parent-cont' id="about"><h2>About Project</h2></div>
    <div className='about-cont'>
        <div className='about-imgcont'>
            <img src={aboutImg} alt="" />
        </div>
        <div className='about-infocont'>
            <h2>Hinjewadi Central a Convenience you deserve in Hinjewadi.</h2>
            <p>
            From carefully planned living spaces to modern amenities for every family member, Kohinoor Central Hinjewadi is a paradigm of self-actualized living. Kohinoor offers <span>Premium & Luxurious 2 & 3 BHK Homes Starts From 68 Lacs* @ Central Hinjewadi, With 8.5 Acres of Land Parcel With 5 Towers 25+ Modern Amenities and 15+ Storey Tower</span> Emphasis on quality over quantity, in every perspective - geography, convenience, amenities and quality of life, is an epitome of an elevated lifestyle. What's more? With hills on one side and a growing suburb on the other, Tinsel Town not only keeps you close to work but also closer to nature. <span>A healthy lifestyle with leisure sports and recreational activity options and one of the greatest investment opportunities.</span>
            </p>
        </div>
    </div>
    </>
  )
}

export default AboutUs