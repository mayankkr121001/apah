import React from 'react'
import usUnique1 from "../../assets/usUnique1.png"
import usUnique2 from "../../assets/usUnique2.png"
import usUnique3 from "../../assets/usUnique3.png"

function UsUnique() {
    return (
        <div className='w-full px-[8%] py-16'>
            <div className='w-full'>
                <h2 className='text-primaryColor text-2xl sm:text-3xl font-semibold text-center'>What Makes Us Unique ?</h2>
                <div className='flex flex-wrap gap-8 mt-14 w-full'>
                    <div className='flex  flex-col tracking-wide gap-6 md:w-[30%]'>
                        <div className='w-full'>
                            <img className='w-full h-[300px]' src={usUnique1} alt="image" />
                        </div>
                        <div className='w-[90%]'>
                            <h3 className='text-2xl font-semibold text-primaryColor mb-5'>Small Size
                                Big Performance</h3>
                            <p className='text-lg'>Our HyprFLUX UF modules are made of Innovative high surface area multi-channel capillary membranes characterized with high water flux. These modules reduce the plant size by 15-20% due to smaller size and high water flux.</p>
                        </div>
                    </div>

                    <div className='flex flex-col tracking-wide gap-6 md:w-[30%]'>
                        <div className='w-full'>
                            <img className='w-full h-[300px]' src={usUnique2} alt="image" />
                        </div>
                        <div className='w-[90%]'>
                            <h3 className='text-2xl font-semibold text-primaryColor mb-5'>Trust of Quality</h3>
                            <p className='text-lg'>Unlike the conventional membranes made from NIPS process, our membrane capillaries have high mechanical strength eliminating risk of frequent integrity failure and  extended lifespan of many years.</p>
                        </div>
                    </div>

                    <div className='flex  flex-col tracking-wide gap-6 md:w-[30%]'>
                        <div className='w-full'>
                            <img className='w-full h-[300px]' src={usUnique3} alt="image" />
                        </div>
                        <div className='w-[90%]'>
                            <h3 className='text-2xl font-semibold text-primaryColor mb-5'>Cost-Effective</h3>
                            <p className='text-lg'>Impurities do not stick strongly to the hydrophilic membrane surface and get washed away with backwash. This leads to consistent high productivity and lesser maintenance downtime, saving energy, manhours and chemical costs.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default UsUnique