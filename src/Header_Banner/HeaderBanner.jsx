import React from "react";
import'../../AllStyles/HeaderBanner.css'
// import OfferPage from '../../OfferPage/OfferPage';


const HeaderBanner=()=> {
    return (
      <>
      <div className="Overlay_Container">
    <div className="Banner_container">
      {/* <img src={require('../../Images/we_care_banner.jpg')} alt="logo" /> */}
    </div>
      <div className="Overlay_content">
        <h1>WE CARE OF YOU</h1>
      </div>
      </div>
    {/* <OfferPage/> */}
    </>
    );
  }
  
  export default HeaderBanner;
  