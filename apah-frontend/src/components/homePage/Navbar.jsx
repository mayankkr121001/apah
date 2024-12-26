import React, { useEffect, useState } from 'react';
import mainLogo from "../../assets/mainLogo.avif"
import { Link } from 'react-router-dom'

function Navbar() {
    const [smallScreenFlag, setSmallScrrenFlag] = useState(false);
    const [menuIconFlag, setMenuIconFlag] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 1024) {
            setSmallScrrenFlag(true);
        }
    }, [])

    const navLinksArary = ['ABOUT US', 'PRODUCTS', 'TECHNOLOGY', 'APPLICATIONS', 'CONTACT'];

    return (
            <div className='w-full z-50'>
                <div className=' h-[80px] flex items-center justify-between bg-white px-[5%] py-5 relative z-[49]'>
                    <div>
                        <img className='h-10 md:h-14' src={mainLogo} alt="main-logo" />
                    </div>
                    {(smallScreenFlag == false) && <div className={`flex flex-row gap-8 lg:gap-12`}>
                        {navLinksArary.map((value, index) => (
                            <Link to="/" key={index} className='text:md font-semibold text-primaryColor hover:text-black transition'>{value}</Link>
                        ))}
                    </div>}
                    {(smallScreenFlag == true && menuIconFlag == false) && <div onClick={() => setMenuIconFlag(true)} className='flex flex-col gap-2'>
                        <div className="topLine w-8 md:w-10 h-1 bg-primaryColor rounded"></div>
                        <div className="middleLine w-8 md:w-10 h-1 bg-primaryColor rounded" ></div>
                        <div className="bottomLine w-8 md:w-10 h-1 bg-primaryColor rounded" ></div>
                    </div>}
                    {menuIconFlag && <div onClick={() => setMenuIconFlag(false)} className='text-primaryColor text-4xl cursor-default'>X</div>}
                </div>
                {(smallScreenFlag) && <div className={`flex ${menuIconFlag ? 'mobileNavbarMenuActive' : 'mobileNavbarMenu'} flex-col absolute z-[48] w-screen top-[80px] left-0 bg-primaryColor text-white`}>
                    {navLinksArary.map((value, index) => (
                        <span key={index} className='inline mx-10 md:mx-20 my-4'><Link to="/" className='text:md font-semibold hover:text-black transition'>{value}</Link></span>
                    ))}
                </div>}
            </div>
    )
}

export default Navbar