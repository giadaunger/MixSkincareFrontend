import React, { useState } from 'react'
import { SearchHeart } from "styled-icons/bootstrap";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => { 
    const term = e.target.value;
    setSearchTerm(term);
    fetchSearchedProduct(term);
  }
  
  return (
    <div className="w-11/12 mx-auto mt-12 mb-20">
      <div className="mx-auto w-11/12 md:w-3/4 relative"> 
        <SearchHeart className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input 
          autoFocus
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder='Type to search'
          className="w-full pl-10 pr-4 py-2 rounded-lg border-2 focus:outline-none border-[#FFD6DC] focus:border-[#FFDFE9]"
        />
      </div>
    </div>
  )
}

export default Products