import React, { useState, useEffect, useRef } from "react";
import { Plus } from "@styled-icons/evaicons-solid/Plus";
import AddProducts from "../components/AddProducts";
import DupesResult from "../components/DupesResult";
import skincareStore from "../stores/skincareProductStore";
import Loader from "../components/Loader";
import { Trash3Fill } from "styled-icons/bootstrap";
import { Warning } from "@styled-icons/ionicons-solid/Warning";

function SkincareDupes() {
  const {
    setIsPopupOpen, 
    selectedDupeProduct, 
    errorMsg, 
    isLoading, 
    setIsLoading,
    fetchDupes,
    dupesResult,
    setDupesResult,
    setSelectedDupeProduct
  } = skincareStore();
  const [chosenProduct, setChosenProduct] = useState("");
  const dupesResultRef = useRef(null);

  useEffect(() => {
    if(selectedDupeProduct && !chosenProduct) {
      setChosenProduct(selectedDupeProduct);
    }
  }, [selectedDupeProduct]);

  const handleDeleteProduct = (productNumber) => {
    if(productNumber === 1) {
      setChosenProduct(null);
      setDupesResult(null);
    }
  }

  const handleAnalyzeCompatibility = async () => {
    if (!chosenProduct) return;
  
    try {
      setIsLoading(true);
      await fetchDupes(chosenProduct.id);
      
      setTimeout(() => {
        if (dupesResultRef.current) {
          dupesResultRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <div className="z-10 w-11/12 lg:w-3/4 xl:w-1/2 mx-auto flex items-center justify-center absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <AddProducts onSelect={setSelectedDupeProduct} />
      </div>
      <div className="z-0">
        <div className="w-5/6 mx-auto">
          <div className="w-full md:w-2/3 mx-auto text-center mt-12">
              <h2 className="text-4xl min-[500px]:text-5xl md:text-6xl mb-4 min-[500px]:mb-10 text-[#E2A3B7] text-center mt-10">Find Your Perfect Match! Skin</h2>
              <p className="text-xl min-[500px]:text-2xl mb-10 min-[500px]:mb-20">Discover budget-friendly alternatives to your favorite skincare products. Compare ingredients, prices, and find similar products that work just as well.</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="border border-gray-300 rounded-xl w-full md:w-1/3 min-h-52 flex items-center justify-center shadow-sm">
              {chosenProduct ? (
                <div className="relative w-full h-full p-4"> 
                  <div className="absolute right-4"> 
                    <div onClick={() => handleDeleteProduct(1)} className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition duration-300 hover:scale-110">
                      <Trash3Fill className="w-6 h-6 text-[#E2A3B7]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center p-4">
                    <div className="bg-white p-1 rounded-lg">
                      <img src={chosenProduct.product_img} alt="product img" className="w-32 h-32 object-scale-down rounded-lg mb-4" />
                    </div>
                    <div className="flex flex-col items-center ml-4">
                      <h2 className="text-lg font-semibold w-full">{chosenProduct.product_name}</h2>
                      <h2 className="text-sm w-full">{chosenProduct.company_name}</h2>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1">
                    {chosenProduct?.ingredients?.map((item) => (
                      <span 
                        key={item.id}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm shadow-sm"
                      >
                        {item.ingredient.ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <button onClick={() => setIsPopupOpen(true)} className="mx-auto items-center rounded-full w-20 h-20 bg-[#E2A3B7] transition duration-300 hover:scale-110">
                  <Plus className="w-12 h-12 flex mx-auto items-center text-white" />
                </button>
              )}
            </div>
          </div>
          {errorMsg &&
            <div className="flex justify-center">
              <div className="flex w-1/3 items-center gap-3 bg-[#fffcc8] text-[#e3ba5f] font-bold rounded-full mt-10 px-6 py-3 max-w-2xl mx-auto">
                <Warning className="w-8 h-8 flex-shrink-0" />
                <span className="text-center">{errorMsg}</span>
              </div>
            </div>
          }
          <div className="flex justify-center">
            <button 
            onClick={handleAnalyzeCompatibility}
            disabled={!chosenProduct}
            className={`w-full sm:w-1/3 lg:w-1/6 mt-14 mb-28 rounded-xl shadow-lg text-center text-xl p-2 border
              ${(!chosenProduct || errorMsg) ? 'bg-gray-300 border-gray-300 cursor-not-allowed opacity-50 text-black' : 'border-[#E2A3B7] bg-white text-[#E2A3B7] transform transition duration-300 hover:scale-110'}`}>
                Find dupes!
            </button>
          </div>
          {isLoading &&
            <Loader />
          }
          {dupesResult && selectedDupeProduct &&
            <div ref={dupesResultRef}>
              <DupesResult />
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default SkincareDupes;