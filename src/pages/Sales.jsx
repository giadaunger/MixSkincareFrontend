import React from 'react'
import { ArrowRight } from 'styled-icons/bootstrap'
import { Link } from 'react-router-dom'

function Sales() {
  return (
    <div className="w-11/12 sm:w-5/6 mx-auto mt-10 mb-10">
      <div className="text-center w-3/4 mx-auto">
        <h2 className="text-4xl md:text-6xl text-center mb-10 text-[#e2a3b7]">Sales</h2>
        <p className="w-3/4 mx-auto">
          Discover the Best Beauty Deals All in One Place
        </p>
        <p>
          Looking for discounts on your favorite skincare and beauty brands? We've gathered the latest 
          sales from trusted retailers so you don’t have to hunt for them. Whether you're restocking your 
          go-to products or trying something new, these deals make glowing up more affordable than ever. 
          Check back regularly — we update this list often!
        </p>
      </div>
      <div className="w-3/4 mx-auto flex flex-col gap-y-10 mt-10">
        <Link to={"https://www.kicks.se/makeup/ogonmakeup"} target="_blank" rel="noopener noreferrer">
          <div className="border-2 border-[#e2a3b7] p-4 items-center rounded-md shadow-md flex flex-col sm:flex-row justify-between transform transition duration-300 hover:scale-105">
            <div className="items-center flex flex-col sm:flex-row">
              <img 
                src="/logos/kicksLogo.png" 
                alt="kicks logo" 
                className="rounded-md h-24 w-24 sm:mr-4"
              />
              <p className="text-2xl mt-2 text-center sm:text-left text-[#e2a3b7]">20% on eye & brow makeup</p>
            </div>
            <div className="flex justify-end p-2">
              <ArrowRight className="w-14 h-14 text-[#e2a3b7]"/>
            </div>
          </div>
        </Link>

        <Link to={"https://www.kicks.se/makeup/lappar"} target="_blank" rel="noopener noreferrer">
          <div className="border-2 border-[#e2a3b7] p-4 items-center rounded-md shadow-md flex flex-col sm:flex-row justify-between transform transition duration-300 hover:scale-105">
            <div className="items-center flex flex-col sm:flex-row">
              <img 
                src="/logos/kicksLogo.png" 
                alt="kicks logo" 
                className="rounded-md h-24 w-24 sm:mr-4"
              />
              <p className="text-2xl mt-2 text-center sm:text-left text-[#e2a3b7]">25% on lip makeup</p>
            </div>
            <div className="flex justify-end p-2">
              <ArrowRight className="w-14 h-14 text-[#e2a3b7]"/>
            </div>
          </div>
        </Link>

        <Link to={"https://lyko.com/sv/gigantic-sale"} target="_blank" rel="noopener noreferrer">
          <div className="border-2 border-[#e2a3b7] p-4 items-center rounded-md shadow-md flex flex-col sm:flex-row justify-between transform transition duration-300 hover:scale-105">
            <div className="items-center flex flex-col sm:flex-row">
              <img 
                src="/logos/lykoLogo.jpeg" 
                alt="lyko logo" 
                className="rounded-md h-24 w-24 sm:mr-4"
              />
              <p className="text-2xl mt-2 text-center sm:text-left text-[#e2a3b7]">Up to 50% off sitewide</p>
            </div>
            <div className="flex justify-end p-2">
              <ArrowRight className="w-14 h-14 text-[#e2a3b7]"/>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sales