import React from 'react'
import { FaCopyright, FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className='flex flex-1  h-[250px] bg-[#190A28]'>

                <div className='mt-10 ml-10'>
                    <div className='flex gap-4'>
                        <div>
                            <img src="https://apna.co/favicon-32x32.png" alt="" />
                        </div>
                        <div className='flex flex-col gap-4' >
                            <div>
                                <h1 className='text-2xl font-bold'>Follow us on social media</h1>
                            </div>
                            <div className='flex gap-2 text-2xl'>
                                <FaFacebook />
                                <FaLinkedinIn />
                                <FaTwitter />
                                <FaInstagram />
                                <FaYoutube />

                            </div>
                        </div>
                    </div>
                    <div className=' divider'></div>
                    <div className='flex items-center gap-4 font-semibold'>
                        <p className='flex items-center'><FaCopyright /> 2025 | All rights reserved</p>
                        <p>Privacy policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>

            </div>
            <div className='flex'>
                <div className='w-full h-1 bg-[#2BB793]'></div>
                <div className='w-full h-1 bg-[#83BDE4]'></div>
                <div className='w-full h-1 bg-[#FFD166]'></div>
            </div>
        </>

    )
}

export default Footer