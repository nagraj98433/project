import './App.css';
import Blogs from './Blogs/Blogs';
import CostomerReview from './CostomerReview/CostomerReview';
import AboutUS from './AboutUs/AboutUS';
import TopHeader from './TopHeader/TopHeader';
// import HeaderBanner from './Header_Banner/HeaderBanner';
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <TopHeader/>
    {/* <HeaderBanner/> */}
    <CostomerReview/>
    <AboutUS/>
    {/* <Blogs/> */}
    </>
  );
}

export default App;
