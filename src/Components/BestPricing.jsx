import React,{useState, useEffect} from 'react'
import "./BestPricing.css"
import kohinoorLogo from "../assets/Kohinoor logo-01.png"

const BestPricing = () => {
  const [openPopup, setOpenPopup]= useState(false)

  useEffect(() => {
    if (openPopup) {
      document.body.style.overflow = "hidden"; // Turn off scrolling when popup is open
    } else {
      document.body.style.overflow = "auto"; // Turn on scrolling when popup is closed
    }

    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling when component unmounts
    };
  }, [openPopup]);

  return (
    <div className='pricingtable-cont' id="bestpricing">
        <h2 className='bestpricing'>Best Pricing</h2>
        <div className='pricing-table-cont'>
            <table className='pricing-table'>
                <thead>
                   <tr>
                    <th>Sr. No</th>
                    <th>Type</th>
                    <th>Carpet (Sq. ft.)</th>
                    <th>Max Price</th>
                   </tr>
                </thead>
                <tbody>
                   <tr>
                    <td>1</td>
                    <td>2 BHK - Premium</td>
                    <td>702</td>
                    <td><button onClick={()=>setOpenPopup(!openPopup)}>View Cost</button></td>
                   </tr>

                   <tr>
                    <td>2</td>
                    <td>2 BHK - Luxurious</td>
                    <td>792</td>
                    <td><button onClick={()=>setOpenPopup(!openPopup)}>View Cost</button></td>
                   </tr>

                   <tr>
                    <td>3</td>
                    <td>3 BHK - Premium</td>
                    <td>927</td>
                    <td><button onClick={()=>setOpenPopup(!openPopup)}>View Cost</button></td>
                   </tr>

                   <tr>
                    <td>4</td>
                    <td>3 BHK - Luxurious</td>
                    <td>1071</td>
                    <td><button onClick={()=>setOpenPopup(!openPopup)}>View Cost</button></td>
                   </tr>

                </tbody>

            </table>
        </div>
        {
          // best pricing form
          openPopup && (
            <div className="popupContainer">
              <div className="popup">
                <div className="popup-img-cont"><img src={kohinoorLogo} alt="" /></div>
                <div className="popup-inp-cont">
                <h2 className='view-cost'>Register now to view cost!</h2>
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
                  <div className="popup-submit-btn-cont"><button className="submit-btn">View Cost</button></div>
                </form>
                <button className="close-btn" onClick={()=>setOpenPopup(false)}>X</button>
                </div>
              </div>
            </div>
          )
        }
    </div>
  )
}

export default BestPricing