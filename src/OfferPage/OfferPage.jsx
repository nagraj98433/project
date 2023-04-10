import React from "react";
import'../AllStyles/Offerpage.css'


const OfferPage=()=> {
    return (
        <div className="flex_container">
        <div className="logoContainer">
            <img src={require('../Images/care24_logo.jpg')} alt="logo" />
        </div>
        <div className="Main_menu_Container">
            <div className="menus_container">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Caregivers</li>
                    <li>Blogs</li>
                    <li>services</li>
                    <li>Login/Signup</li>
                    <li><i class="fas fa-bars"></i></li>
                </ul>
            </div>
        </div>
     </div>
    );
  }
  
  export default OfferPage;
  