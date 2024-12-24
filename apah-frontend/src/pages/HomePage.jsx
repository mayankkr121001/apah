 import React from 'react'
 import Navbar from '../components/homePage/Navbar.jsx'
 import ImageBanner from '../components/homePage/ImageBanner.jsx'
 import ImageSlider from '../components/homePage/ImageSlider.jsx'
 import WaterTreatment from '../components/homePage/WaterTreatment.jsx'
 
 function HomePage() {
   return (
     <div className='w-screen overflow-x-hidden'>
        <Navbar/>
        {/* <ImageBanner/> */}
        <ImageSlider/>
        <WaterTreatment/>
     </div>
   )
 }
 
 export default HomePage