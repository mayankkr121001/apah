
import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slideImg1 from '../../assets/bannerImage2.jpg';
import slideImg2 from '../../assets/bannerImage3.jpg';
import slideImg3 from '../../assets/bannerImage4.jpg';

const indicators = (index) => (<div className="indicator">{index + 1}</div>);

const slideImages = [
  {
    url: slideImg1,
  },
  {
    url: slideImg2,
  },
  {
    url: slideImg3,
  },
];

const ImageSlider2 = () => {

  const prevArrow = (
    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 text-white ml-5 sm:ml-7">
      <span className="text-3xl sm:text-5xl">&#10094;</span>
    </div>
  );

  const nextArrow = (
    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-white mr-5 sm:mr-10">
      <span className="text-3xl sm:text-5xl">&#10095;</span>
    </div>
  );

  return (
    <div className='relative'>
      <Zoom scale={1.2} indicators={true} duration={5000} transitionDuration={1500} autoplay pauseOnHover={false} prevArrow={prevArrow} nextArrow={nextArrow}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div className='h-[70vh] sm:h-[calc(100vh-80px)]'>
              <img className='w-screen h-[calc(100vh-80px)] object-cover brightness-75' src={slideImage.url} alt="slide" />
            </div>
            <div className=' w-[90%] lg:w-[70%] absolute text-center left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] px-7 py-10 z-[47]'>
              <p className='text-2xl md:text-4xl font-semibold text-white tracking-wide'>Innovative Membrane Technology for Superior Filtration</p>
              <button className='font-semibold text-md md:text-lg text-black rounded tracking-wide bg-primaryColor hover:bg-primaryColorHover transition px-10 md:px-16 py-2 mt-6'>Get Started</button>
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default ImageSlider2;