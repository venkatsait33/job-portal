import React from 'react'

const NavBar = () => {
  return (
      <div className="pl-10 pr-10 shadow-sm navbar bg-base-100">
          <div className="flex-1">
              <a className="text-xl btn btn-ghost"><img src="https://apna.co/favicon-32x32.png" alt="" /></a>
          </div>
          <div className="flex-3">
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
          <div className='gap-4 p-2 menu menu-horizontal'>
              <button className=' font-semibold  text-[#1F8268]'>
                  Employer Login
              </button>
              <button className='btn max-sm:btn-sm bg-[#1F8268] hover:bg-white hover:border-[#1F8268] hover:text-[#1F8268]'>
                  Candidate Login
              </button>
          </div>
      </div>
  )
}

export default NavBar