 import React from 'react'
 import Navbar from '../components/homePage/Navbar.jsx'
 import ImageBanner from '../components/homePage/ImageBanner.jsx'
 import ImageSlider from '../components/homePage/ImageSlider.jsx'
 import ImageSlider2 from '../components/homePage/ImageSlider2.jsx'
 import WaterTreatment from '../components/homePage/WaterTreatment.jsx'
 import UsUnique from '../components/homePage/UsUnique.jsx'
 import Proprietery from '../components/homePage/Proprietery.jsx'
 import Applications from '../components/homePage/Applications.jsx'
 import Products from '../components/homePage/Products.jsx'
 
 function HomePage() {
   return (
     <div className='w-screen overflow-x-hidden font-quicksand'>
        <Navbar/>
        {/* <ImageBanner/> */}
        {/* <ImageSlider/> */}
        <ImageSlider2/>
        <WaterTreatment/>
        <UsUnique/>
        <Proprietery/>
        <Applications/>
        
     </div>
   )
 }
 
 export default HomePage