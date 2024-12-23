import React from 'react'
// import bannerImage from "../../assets/bannerImage.avif"
import bannerImage from "../../assets/bannerImage2.jpg"

function ImageBanner() {
    return (
        <div className='w-full'>
            <div className='relative'>
                <div className='w-full h-[calc(100vh-80px)]'>
                    <img className='w-full h-full object-cover brightness-50' src={bannerImage} alt='banner image' />
                </div>
                <div className='w-[70%] absolute text-center left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] px-7 py-10'>
                {/* <div className='absolute text-center left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] px-7 py-10 backdrop-blur-md backdrop-brightness-[90%]'> */}
                    <p className='text-4xl font-semibold text-white tracking-wide'>Innovative Membrane Technology for Superior Filtration</p>
                    <button className='font-semibold text-lg text-black rounded tracking-wide bg-primaryColor hover:bg-primaryColorHover transition px-16 py-2 mt-6'>Get Started</button>
                </div>
            </div>
        </div>
    )
}   

export default ImageBanner