import React, { useState, useEffect } from "react";
import { SearchHeart } from "styled-icons/bootstrap";
import { Close } from "@styled-icons/ionicons-solid/Close";
import skincareStore from "../stores/skincareProductStore";

function AddProducts({ onSelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const {
    isPopupOpen, 
    setIsPopupOpen, 
    searchResults, 
    fetchSearchedProduct, 
    fetchInitialProducts
  } = skincareStore();

   useEffect(() => {
    if (isPopupOpen) {
      fetchInitialProducts(); 
    }
  }, [isPopupOpen]); 

  useEffect(() => {
    setSelectedIndex(-1);
  }, [searchResults]);

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

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault(); 
        setSelectedIndex(prev => 
          prev < searchResults.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : 0);
        break;
      case "Enter":
        if (selectedIndex >= 0 && selectedIndex < searchResults.length) {
          handleProductSelect(searchResults[selectedIndex]);
        }
        break;
      default:
        break;
    }
  }

  return (
    <>
      {isPopupOpen && (
        <div className="p-4 w-full flex flex-col bg-[#FFDFE9] border-8 rounded-xl border-[#E2A3B7] min-h-96 shadow-2xl">
          <button className="flex justify-end" onClick={() => setIsPopupOpen(false)}>
            <Close className="w-10 h-10 cursor-pointer" />
          </button>
          <div className="mx-auto w-11/12 md:w-3/4 relative"> 
            <SearchHeart className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              autoFocus
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder='Type to search'
              className="w-full pl-10 pr-4 py-2 rounded-lg border-2 focus:outline-none border-[#FFD6DC] focus:border-[#FFDFE9]"
            />
          </div>

          <div className="mt-4 max-h-60 overflow-y-auto">
            {searchResults.length > 0 ? (
              <>
                {searchResults.map((product, index) => (
                  <div 
                    key={product.id}
                    onClick={() => handleProductSelect(product)}
                    className={`p-2 hover:bg-[#E2A3B7] cursor-pointer hover:rounded-lg flex flex-row border-b-2 border-b-white w-4/5 mx-auto ${
                      index === selectedIndex ? 'bg-[#E2A3B7] rounded-lg' : ''
                    }`}
                  >
                    <img src={product.product_img} alt="" className="w-10 h-10 object-scale-down mr-10 bg-white rounded-lg p-1" />
                    <div>
                      <h3 className="font-semibold">{product.product_name}</h3>
                      <p className="text-sm">{product.company_name}</p>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="p-2 text-center mt-10">
                <p>No products found</p>
              </div>
            )}
          </div>
      </div>
      )}
    </>
  );
}

export default AddProducts;