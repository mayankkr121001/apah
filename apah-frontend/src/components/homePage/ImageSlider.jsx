import React, { useEffect, useRef, useState } from 'react'
import bannerImage1 from "../../assets/bannerImage2.jpg"
import bannerImage2 from "../../assets/bannerImage3.jpg"
import bannerImage3 from "../../assets/bannerImage4.jpg"


const imageArray = [bannerImage1, bannerImage2, bannerImage3];
function ImageSlider() {
    const imageRef = useRef([]);
    const dotRef = useRef([]);

    let counter;
    useEffect(() => {
        dotRef.current[0]?.classList.add('dotActive');
        startSlider();
        counter = 0;
    }, [])

    function updateDots(counter) {
        dotRef.current?.forEach((dot, index) => {
            dot?.classList.remove('dotActive');
        });
        dotRef.current[counter]?.classList.add('dotActive');
    }

    function onDotsClick(index) {
        console.log("dot clicked", index, counter);

        if (index === counter) return;
        stopSlider();
        if (index > counter) {
            imageRef.current[counter].style.animation = "next1 2s ease-in forwards";
            counter = index;
            imageRef.current[counter].style.animation = "next2 2s ease-in forwards";
        } else {
            imageRef.current[counter].style.animation = "prev1 2s ease-in forwards";
            counter = index;
            imageRef.current[counter].style.animation = "prev2 2s ease-in forwards";
        }

        updateDots(counter);
        startSlider();
    }

    function nextSlide() {
        imageRef.current[counter].style.animation = 'next1 2s ease-in forwards';
        if (counter >= imageRef.current.length - 1) {
            counter = 0;

        }
        else {
            counter++;
        }
        imageRef.current[counter].style.animation = 'next2 2s ease-in forwards';
        updateDots(counter);
    }
    function prevSlide() {
        imageRef.current[counter].style.animation = 'prev1 2s ease-in forwards';
        if (counter <= 0) {
            counter = imageRef.current.length - 1;
        }
        else {
            counter--;
        }
        imageRef.current[counter].style.animation = 'prev2 2s ease-in forwards';
        updateDots(counter);
    }

    let sliderInterval;
    function startSlider() {
        sliderInterval = setInterval(nextSlide, 6000);
    }

    function stopSlider() {
        clearInterval(sliderInterval);
    }




    return (
        <div className='w-full h-[calc(100vh-80px)] relative'>
            <div className="slidesDiv w-full h-full">
                {imageArray.map((image, index) => (
                    <img key={index} ref={(el) => (imageRef.current[index] = el)} className="slideImage absolute w-full h-full brightness-[80%]" src={image} />
                ))}
            </div>
            {/* <div className="navigationDiv w-full px-8 absolute top-[50%] translate-y-[-50%] left-0 z-[46] flex justify-between">
                <p onClick={() => { stopSlider(); nextSlide(); startSlider(); }} className="leftArrow text-white text-4xl cursor-default">&#10094;</p>
                <p onClick={() => { stopSlider(); prevSlide(); startSlider(); }} className="rightArrow text-white text-4xl cursor-default">&#10095;</p>
            </div> */}
            <div className="navigationDotsDiv absolute bottom-5 left-[50%] translate-x-[-50%] z-[46] flex gap-2">
                {imageArray.map((image, index) => (
                    <div key={index} onClick={() => onDotsClick(index)} ref={(el) => (dotRef.current[index] = el)} className="dot w-3 h-3 bg-white rounded-full"></div>
                ))}
            </div>
            <div className='w-[70%] absolute text-center left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] px-7 py-10 z-[47]'>
                <p className='text-4xl font-semibold text-white tracking-wide'>Innovative Membrane Technology for Superior Filtration</p>
                <button className='font-semibold text-lg text-black rounded tracking-wide bg-primaryColor hover:bg-primaryColorHover transition px-16 py-2 mt-6'>Get Started</button>
            </div>
        </div>
    )
}

export default ImageSlider