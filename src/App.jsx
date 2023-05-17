import './App.css'
import Navbar from './Components/Navbar'
import AboutUs from './Components/AboutUs'
import Home from './Components/Home'
import PhotoGallary from './Components/PhotoGallary'
import BestPricing from './Components/BestPricing'
import LocationConnect from './Components/LocationConnect'
import Ammenities from './Components/Ammenities'
import FloorPlans from './Components/FloorPlans'
import Enquiry from './Components/Enquiry'
import FormPopup from './Components/FormPopup'
import { createContext, useState, useEffect } from 'react'
import Disclaimer from './Components/Disclaimer'

export const FormPopupContext= createContext()

function App({children}) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

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

  const closePopup = () => {
    setIsOpen(false);
  };

  const contextValue = {
    isOpen,
    togglePopup,
    closePopup,
  };

  return (
    <>
    <FormPopupContext.Provider value={contextValue}>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <PhotoGallary/>
      <BestPricing/>
      <LocationConnect/>
      <Ammenities/>
      <FloorPlans/>
      <Enquiry/>
      <FormPopup/>
      <Disclaimer/>
      </FormPopupContext.Provider>
    </>
  )
}

export default App
