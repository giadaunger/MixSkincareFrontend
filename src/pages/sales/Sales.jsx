import React from 'react'
import { ArrowRight } from 'styled-icons/bootstrap'
import { Link } from 'react-router-dom'
import { sale } from './sales'

function Sales() {

  const sortedSales = [...sale].sort((a, b) => {
    const percentA = parseInt(a.percentage);
    const percentB = parseInt(b.percentage);
    return percentB - percentA; 
  });

  return (
    <div className="w-11/12 sm:w-5/6 mx-auto mt-10 mb-10">
      <div className="text-center w-3/4 mx-auto">
        <h2 className="text-4xl min-[500px]:text-5xl md:text-6xl mb-4 min-[500px]:mb-10 text-[#E2A3B7] text-center mt-10">Sales</h2>
        <p className="w-3/4 mx-auto text-2xl mb-4">Discover the Best Beauty Deals All in One Place!</p>
        <p className="text-lg">
          Looking for discounts on your favorite skincare and beauty brands? We've gathered the latest 
          sales from trusted retailers so you don’t have to hunt for them. Whether you're restocking your 
          go-to products or trying something new, these deals make glowing up more affordable than ever. 
          Check back regularly — we update this list often!
        </p>
      </div>
      <div className="w-3/4 mx-auto flex flex-col gap-y-10 mt-10">
        {sortedSales.map((item, index) => {
          const displayText = item.text.replace('{percentage}', item.percentage);
          return (
            <Link 
              to={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              key={index}
            >
              <div className="border-2 border-[#e2a3b7] p-4 items-center rounded-md shadow-md flex flex-col sm:flex-row justify-between transform transition duration-300 hover:scale-105">
                <div className="items-center flex flex-col sm:flex-row">
                  <img 
                    src={item.logo} 
                    alt="logo" 
                    className="rounded-md h-24 w-24 sm:mr-4 shadow-md"
                  />
                  <p className="text-2xl mt-2 text-center sm:text-left text-[#e2a3b7]">{displayText}</p>
                </div>
                <div className="flex justify-end p-2">
                  <ArrowRight className="w-14 h-14 text-[#e2a3b7]"/>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Sales