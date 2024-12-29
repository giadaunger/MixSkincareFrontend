import React, { useState } from "react";
import { SearchHeart } from "styled-icons/bootstrap";
import { Close } from "@styled-icons/ionicons-solid/Close";
import useStore from "../stores/store";

function AddProducts() {
  const [searchProduct, setSearchProduct] = useState("");
  const {isPopupOpen, setIsPopupOpen} = useStore();

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchProduct(searchTerm)
  }

  return (
    <>
      {isPopupOpen && (
        <div className="p-4 w-full flex flex-col bg-[#FFD6DC] border-8 rounded-xl border-[#fca8b5] min-h-80 shadow-2xl">
          <button className="flex justify-end" onClick={() => setIsPopupOpen(false)}>
            <Close className="w-10 h-10 cursor-pointer" />
          </button>
          <div className="mx-auto w-3/4 relative"> 
            <SearchHeart className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              value={searchProduct}
              onChange={handleInputChange}
              placeholder='Type to search'
              className="w-full pl-10 pr-4 py-2 rounded-lg border-2 focus:outline-none border-[#FFD6DC] focus:border-[#ffb6c1]"
            />
          </div>
      </div>
      )}
    </>
  );
}

export default AddProducts;