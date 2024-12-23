 import React from 'react'
 import Navbar from '../components/homePage/Navbar.jsx'
 import ImageBanner from '../components/homePage/ImageBanner.jsx'
 import ImageSlider from '../components/homePage/ImageSlider.jsx'
 
 function HomePage() {
   return (
     <div className='w-screen overflow-x-hidden'>
        <Navbar/>
        {/* <ImageBanner/> */}
        <ImageSlider/>
     </div>
   )
 }
 
 export default HomePage