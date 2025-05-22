import React from 'react'
import { CompanyLogos } from './CompanyLogos'
import { InfiniteMovingCards } from '../utils/Infinite-Moving-Cards'

const CardScroller = () => {
  return (
      <div className="max-[560px]:max-w-sm mx-auto  max-md:max-w-screen-md max-lg:w-full  rounded-md flex flex-col antialiased bg-grid-white/[0.05]  justify-center relative overflow-hidden">
          <h1 className="mb-2 text-xl tracking-widest max-sm:text-sm">Trusted by 1000+ enterprises and 7 lakh+ MSMEs for hiring</h1>
          <InfiniteMovingCards
              items={CompanyLogos}
              direction="left"
              speed="slow"
          />
      </div>
  )
}

export default CardScroller