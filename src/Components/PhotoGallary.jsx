import React, { useState, useEffect } from 'react'
import "./PhotoGallary.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import gym from "../assets/gym.jpg"
import Living from "../assets/Living.jpeg"
import tennis from "../assets/tennis.jpeg"
import gallary2 from "../assets/gallary2.jpg"
import {Autoplay, Navigation, Pagination} from 'swiper';

const PhotoGallary = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
        <div className='gallary-cont-parent'>
        <h2>Photo Gallery</h2>
         <Swiper
         modules={[Autoplay, Navigation, Pagination]}
         spaceBetween={20}
         slidesPerView={windowWidth<900?1:3}
        //  navigation
         pagination={{ clickable: true }}
         autoplay={{
          delay:2500,
          // disableOnInteraction:false
         }}
         className='gallary-cont'
    >
      <SwiperSlide><img src={gym} alt="" className='gallaryimg'/></SwiperSlide>
      <SwiperSlide><img src={gallary2} alt="" className='gallaryimg'/></SwiperSlide>
      <SwiperSlide><img src={Living} alt="" className='gallaryimg'/></SwiperSlide>
      <SwiperSlide><img src={tennis} alt="" className='gallaryimg'/></SwiperSlide>

    </Swiper>
    </div>
  )
}

export default PhotoGallary