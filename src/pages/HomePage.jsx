import React from 'react'
import NavBar from '../components/NavBar'
import HomeCoverSection from '../components/HomeCOverSection'
import PopularSearch from '../components/PopularSearch'
import JobOpeningsSection from '../components/JobOpeningsSection'
import Footer from '../components/Footer'
import { FaStar } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";

const HomePage = () => {
    return (
        <div className=''>
            <NavBar />
            <div className=''>
                <HomeCoverSection />
                <PopularSearch />
                <JobOpeningsSection />
                <div className='flex items-center justify-center w-full h-[300px] bg-white text-black '>
                    <div className='flex flex-col gap-10'>
                        <h1 className='text-2xl font-bold'>Trending job roles in Apna</h1>
                        <button className='btn hover:bg-[#1F8268] btn-outline border border-[#1F8268]'>View all</button>
                    </div>
                </div>
                <div className='p-8 bg-white '>

                    <div className='bg-[#F9F4FF] text-[#662194] flex items-center justify-center border rounded-l-2xl w-[80%] mx-auto md:h-[350px] gap-12  '>
                        <div>
                            <h1 className='text-3xl font-bold'>Download Apna app!</h1>
                            <div className='flex gap-2'>
                                <p>Unlimited job applications | </p>
                                <p>HRs contact you directly | </p>
                                <p>Track your Applications</p>
                            </div>
                        </div>
                        <div>
                            <img src="https://storage.googleapis.com/mumbai_apnatime_prod/apna-home/apna-app.png"
                                loading='lazy' className='h-[200px]' alt="" />
                        </div>
                        <div>
                            <div>
                                <p className='flex items-center gap-1 text-2xl font-semibold'> <span className=' text-[#FFD166]'>
                                    <FaStar />
                                </span>4.4</p>
                                <p>5L reviews</p>
                            </div>
                            <div>
                                <p className='flex items-center gap-1 text-2xl font-semibold'><span>
                                    <MdFileDownload />
                                </span>1 cr+</p>
                                <p>App downloads</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>

                <Footer />
            </div>
        </div>
    )
}

export default HomePage