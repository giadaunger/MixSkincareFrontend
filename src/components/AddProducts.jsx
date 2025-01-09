import React, { useState, useEffect } from "react";
import { SearchHeart } from "styled-icons/bootstrap";
import { Close } from "@styled-icons/ionicons-solid/Close";
import useStore from "../stores/store";

function AddProducts({ onSelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    isPopupOpen, 
    setIsPopupOpen, 
    searchResults, 
    fetchSearchedProduct, 
    fetchInitialProducts
  } = useStore();

   useEffect(() => {
    if (isPopupOpen) {
      fetchInitialProducts(); 
    }
  }, [isPopupOpen]); 

  const handleInputChange = (e) => { 
    const term = e.target.value;
    setSearchTerm(term);
    fetchSearchedProduct(term);
  }

  const handleProductSelect = (product) => {
    onSelect(product);
    setIsPopupOpen(false);
    setSearchTerm("");
  }

  return (
    <>
      {isPopupOpen && (
        <div className="p-4 w-full flex flex-col bg-[#FFD6DC] border-8 rounded-xl border-[#fca8b5] min-h-96 shadow-2xl">
          <button className="flex justify-end" onClick={() => setIsPopupOpen(false)}>
            <Close className="w-10 h-10 cursor-pointer" />
          </button>
          <div className="mx-auto w-11/12 md:w-3/4 relative"> 
            <SearchHeart className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder='Type to search'
              className="w-full pl-10 pr-4 py-2 rounded-lg border-2 focus:outline-none border-[#FFD6DC] focus:border-[#ffb6c1]"
            />
          </div>

          <div className="mt-4 max-h-60 overflow-y-auto">
            {searchResults.map((product) => (
              <div 
                key={product.id}
                onClick={() => handleProductSelect(product)}
                className="p-2 hover:bg-[#fca8b5] cursor-pointer rounded-lg mb-2"
              >
                <h3 className="font-semibold">{product.product_name}</h3>
                <p className="text-sm">{product.company_name}</p>
              </div>
            ))}
          </div>
      </div>
      )}
    </>
  );
}

export default AddProducts;