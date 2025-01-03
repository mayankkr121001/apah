import React from 'react'
import application1 from "../../assets/application1.avif"
import application2 from "../../assets/application2.avif"
import application3 from "../../assets/application3.avif"
import application4 from "../../assets/application4.avif"
import application5 from "../../assets/application5.avif"

function Applications() {
  return (
    <div className='w-full px-[8%] py-16'>
                <div className='w-full'>
                    <h2 className='text-primaryColor text-2xl sm:text-3xl font-semibold text-center font-fredoka'>Applications</h2>
                    <div className='flex flex-wrap gap-9 lg:gap-y-14 lg:gap-[3%] mt-12 w-full'>
                        <div className='flex  flex-col tracking-wide gap-6 lg:w-[calc(94%/3)]'>
                            <div className='w-full'>
                                <img className='w-full h-[300px] rounded' src={application1} alt="image" />
                            </div>
                            <div className='w-[90%]'>
                                <h3 className='text-2xl font-semibold text-primaryColor mb-5'>Drinking Water</h3>
                                <p className='text-lg'>Offering enlarged surface coverage, our membranes boost productivity and decrease energy usage in filtering operations.</p>
                            </div>
                        </div>
                        <div className='flex  flex-col tracking-wide gap-6 lg:w-[calc(94%/3)]'>
                            <div className='w-full'>
                                <img className='w-full h-[300px] rounded' src={application2} alt="image" />
                            </div>
                            <div className='w-[90%]'>
                                <h3 className='text-2xl font-semibold text-primaryColor mb-5'>Municipal Wastewater Reuse</h3>
                                <p className='text-lg'>The recycling of processed city wastewater is on the rise, primarily for industrial uses.</p>
                            </div>
                        </div>
                        <div className='flex  flex-col tracking-wide gap-6 lg:w-[calc(94%/3)]'>
                            <div className='w-full'>
                                <img className='w-full h-[300px] rounded' src={application3} alt="image" />
                            </div>
                            <div className='w-[90%]'>
                                <h3 className='text-2xl font-semibold text-primaryColor mb-5'>Industrial Wastewater Reuse</h3>
                                <p className='text-lg'>Our range of membranes caters to numerous industrial functions like process water purification, repurposing of wastewater, and extracting valuable base materials.</p>
                            </div>
                        </div>
                        <div className='flex  flex-col tracking-wide gap-6 lg:w-[calc(94%/3)]'>
                            <div className='w-full'>
                                <img className='w-full h-[300px] rounded' src={application4} alt="image" />
                            </div>
                            <div className='w-[90%]'>
                                <h3 className='text-2xl font-semibold text-primaryColor mb-5'>Pharmaceuticals</h3>
                                <p className='text-lg'>Attain greater purity through membranes created for crucial separation procedures.</p>
                            </div>
                        </div>
                        <div className='flex  flex-col tracking-wide gap-6 lg:w-[calc(94%/3)]'>
                            <div className='w-full'>
                                <img className='w-full h-[300px] rounded' src={application5} alt="image" />
                            </div>
                            <div className='w-[90%]'>
                                <h3 className='text-2xl font-semibold text-primaryColor mb-5'>Food & Beverage</h3>
                                <p className='text-lg'>Ensure quality and safety with membranes designed for accurate filtration in food and beverage manufacturing.</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-10'>
                        <p className='text-xl font-semibold underline'>Learn More</p>
                    </div>
                </div>
            </div>
  )
}

export default Applications