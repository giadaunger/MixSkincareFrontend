import React, { useState, useEffect } from "react";
import { Plus } from "@styled-icons/evaicons-solid/Plus";
import AddProducts from "../components/AddProducts";
import DupesResult from "../components/DupesResult";
import useStore from "../stores/store";
import Loader from "../components/Loader";
import { Trash3Fill } from "styled-icons/bootstrap";
import { Warning } from "@styled-icons/ionicons-solid/Warning";

function Dupes() {
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
  } = useStore();
  const [chosenProduct, setChosenProduct] = useState("");

  useEffect(() => {
    if(selectedDupeProduct && !chosenProduct) {
      setChosenProduct(selectedDupeProduct);
    }
  }, [selectedDupeProduct]);

  const handleDeleteProduct = (productNumber) => {
    if(productNumber === 1) {
      setChosenProduct(null);
      setDupesResult([]);
    }
  }

  const handleAnalyzeCompatibility = async () => {
    if (!chosenProduct) return;
  
    try {
      setIsLoading(true);
      await fetchDupes(chosenProduct.id);
      
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
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
          <div className="w-full mx-auto text-center mt-12">
              <h2 className="text-4xl min-[500px]:text-5xl md:text-6xl mb-4 min-[500px]:mb-10">Find Your Perfect Match!</h2>
              <p className="text-xl min-[500px]:text-2xl md:text-3xl mb-10 min-[500px]:mb-20">Discover budget-friendly alternatives to your favorite skincare products. Compare ingredients, prices, and find similar products that work just as well.</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-[#ffb6c1] rounded-xl w-full md:w-2/3 min-h-52 flex items-center justify-center shadow-xl">
              {chosenProduct ? (
                <div className="relative w-full h-full p-4"> 
                  <div className="absolute right-4"> 
                    <div onClick={() => handleDeleteProduct(1)} className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100">
                      <Trash3Fill className="w-6 h-6 text-[#ffb6c1]" />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between p-4">
                    <img src={chosenProduct.product_img} alt="product img" className="w-32 h-32 object-scale-down rounded-lg mb-4" />
                    <div className="flex flex-col items-center">
                      <h2 className="text-lg font-semibold w-full">{chosenProduct.product_name}</h2>
                      <h2 className="text-sm w-full">{chosenProduct.company_name}</h2>
                    </div>
                    <div>
                      <p className="text-center">Ingredients</p>
                      <div className="flex flex-wrap justify-center">
                        {chosenProduct?.ingredients?.map((item) => (
                          <span 
                            key={item.id}
                            className="bg-white px-3 py-1 rounded-full text-sm shadow-sm"
                          >
                            {item.ingredient.ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <button onClick={() => setIsPopupOpen(true)} className="bg-white rounded-full mx-auto items-center w-20 h-20 flex shadow-xl transition duration-300 hover:scale-105">
                  <Plus className="w-12 h-12 flex mx-auto items-center text-[#ffb6c1]" />
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
            className={`w-full sm:w-1/3 lg:w-1/6 mt-14 mb-28 rounded-xl shadow-lg text-center text-xl p-2 transition-colors duration-200
              ${(!chosenProduct || errorMsg) ? 'bg-gray-300 cursor-not-allowed opacity-50' : 'bg-[#ffb6c1] hover:bg-[#ff9eab] active:bg-[#ff8c9c]'}`}>
                Find dupes!
            </button>
          </div>
          {isLoading &&
            <Loader />
          }
          {dupesResult && selectedDupeProduct &&
            <DupesResult />
          }
        </div>
      </div>
    </div>
  );
}

export default Dupes;