import React from 'react'
import section4Image from "../../assets/section4Image.avif"

function Proprietery() {
  return (
    <div className='w-full h-[80vh] my-10 relative'>
        <div className='w-full h-full'>
            <img className='w-full h-full brightness-[30%]' src={section4Image} alt="image" />
        </div>
        <div className='absolute top-[50%] translate-y-[-50%] text-center px-[5%] md:px-[10%]'>
            <h2 className='text-primaryColor text-3xl lg:text-4xl font-bold mb-10 font-fredoka'>Innovative Filtration Excellence</h2>
            <p className='text-white text-2xl sm:text-3xl font-semibold tracking-wide font-quicksand'>
            Our Proprietary Innovative  manufacturing technology helps to manufacture membranes with high mechanical strength and excellent filtration performance to set new standards for robustness and economics of filtration process.
            </p>
        </div>
    </div>
  )
}

export default Proprietery