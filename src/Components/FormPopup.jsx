import React, { useState,useContext } from "react";
import "./FormPopup.css"
import { FormPopupContext } from "../App";
import kohinoorLogo from "../assets/Kohinoor logo-01.png"

function FormPopup() {
    const {isOpen, closePopup}= useContext(FormPopupContext)

  return (
    <div>
      {isOpen && (
        <div className="popupContainer">
          <div className="popup">
            <div className="popup-img-cont"><img src={kohinoorLogo} alt="" /></div>
            <div className="popup-inp-cont">
            <h2>Fill details to view plan</h2>
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
              <div className="popup-submit-btn-cont"><button className="submit-btn">View Plan</button></div>
            </form>
            <button className="close-btn" onClick={closePopup}>X</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormPopup;
