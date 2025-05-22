import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="pl-10 pr-10 shadow-sm navbar bg-base-100">
           
            <div className='sm:navbar-start sm:hidden'>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="md:hidden btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52">

                    <li className=''>
                        <details className=''>
                            <summary>Jobs</summary>
                            <ul className="p-2 rounded-t-none bg-base-100">
                                <div className=''>
                                    <li><a>Work from home Jobs</a></li>
                                    <li><a>Fresher Jobs</a></li>
                                    <li><a>PartTime Jobs</a></li>
                                </div>
                            </ul>
                        </details>
                    </li>
                    <li><a>Job Prep</a></li>
                    <li><a>Contests</a></li>
                    <li><a>Degree</a></li>

                </ul>
            </div>                
            </div>
            <div className="flex-1">
                <h2>JobPortal</h2>
            </div>
            <div className="flex-3 max-sm:hidden">
                <ul className="px-1 menu menu-horizontal">
                    <li className=''>
                        <details className=''>
                            <summary>Jobs</summary>
                            <ul className="p-2 rounded-t-none bg-base-100">
                                <div className=''>
                                    <li><a>Work from home Jobs</a></li>
                                    <li><a>Fresher Jobs</a></li>
                                    <li><a>PartTime Jobs</a></li>
                                </div>
                            </ul>
                        </details>
                    </li>
                    <li><a>Job Prep</a></li>
                    <li><a>Contests</a></li>
                    <li><a>Degree</a></li>

                </ul>
            </div>
            <div className='flex items-center gap-4 p-2'>
                <Link to='/signup' className=' font-semibold  text-[#1F8268]'>
                    Sign up
                </Link>
                <Link to='/login' className='btn max-sm:btn-sm bg-[#1F8268] hover:bg-white hover:border-[#1F8268] hover:text-[#1F8268]'>
                    Login
                </Link>
            </div>
        </div>
    )
}

export default NavBar