import React, { useState, useEffect } from "react";
import { Plus } from "@styled-icons/evaicons-solid/Plus";
import AddProducts from "../components/AddProducts";
import AnalyzedResult from "../components/AnalyzedResult";
import useStore from "../stores/store";
import { Trash3Fill } from "styled-icons/bootstrap";
import { Warning } from "@styled-icons/ionicons-solid/Warning";

function CompareProducts() {
  const {
    isPopupOpen, 
    setIsPopupOpen, 
    selectedProduct, 
    errorMsg, 
    setErrorMsg, 
    isLoading, 
    setIsLoading,
    analyzeCompatibility,
    setAnalysisResult,
    analysisResult
  } = useStore();
  const [firstProduct, setFirstProduct] = useState("");
  const [secondProduct, setSecondProduct] = useState("");

  useEffect(() => {
    if(selectedProduct && !firstProduct) {
      setFirstProduct(selectedProduct);
    } else if (selectedProduct && !secondProduct) {
      setSecondProduct(selectedProduct);
    }
  }, [selectedProduct]);

  useEffect(() => {
    if(firstProduct && secondProduct && firstProduct.product_name === secondProduct.product_name) {
      setErrorMsg("OBS! You have selected the same product twice. Please select different products to check compatibility!");
    } else {
      setErrorMsg("");
    }
  }, [firstProduct, secondProduct]);

  const handleDeleteProduct = (productNumber) => {
    if(productNumber === 1) {
      setFirstProduct(null);
    } else if(productNumber === 2) {
      setSecondProduct(null);
    }
  }

  const handleAnalyzeCompatibility = async () => {
    if (!firstProduct || !secondProduct) return;
  
    try {
      setIsLoading(true);
      await analyzeCompatibility(firstProduct.id, secondProduct.id);
      
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
        <AddProducts />
      </div>
      <div className="z-0">
        <div className="w-5/6 mx-auto">
          <div className="w-full mx-auto text-center mt-12">
              <h2 className="text-4xl min-[500px]:text-5xl md:text-6xl mb-4 min-[500px]:mb-10">Add Products to Compare Ingredients!</h2>
              <p className="text-xl min-[500px]:text-2xl md:text-3xl mb-10 min-[500px]:mb-20">Add your skincare favorites to analyze their compatibility.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24">
            <div className="bg-[#ffb6c1] rounded-xl w-60 min-w-60 min-h-80 flex items-center justify-center shadow-xl">
              {firstProduct ? (
                <div className="relative w-full h-full p-4"> 
                  <div className="absolute -top-11 right-1"> 
                    <div onClick={() => handleDeleteProduct(1)} className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100">
                      <Trash3Fill className="w-6 h-6 text-[#ffb6c1]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={firstProduct.product_img} alt="product img" className="w-32 h-32 object-cover rounded-lg mb-4" />
                    <h2 className="text-lg font-semibold">{firstProduct.product_name}</h2>
                    <h2 className="text-sm">{firstProduct.company_name}</h2>
                  </div>
                </div>
              ) : (
                <button onClick={() => setIsPopupOpen(true)} className="bg-white rounded-full mx-auto items-center w-20 h-20 flex shadow-xl transition duration-300 hover:scale-125">
                  <Plus className="w-12 h-12 flex mx-auto items-center text-[#ffb6c1]" />
                </button>
              )}
            </div>
            <div className="flex justify-center items-center">
              <Plus className="w-24 h-24 text-[#ffb6c1]"/>  
            </div>
            <div className="bg-[#ffb6c1] rounded-xl w-60 min-w-60 min-h-80 flex items-center justify-center shadow-xl">
              {secondProduct ? (
                <div className="relative w-full h-full p-4"> 
                  <div className="absolute -top-11 right-1"> 
                    <div onClick={() => handleDeleteProduct(2)} className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100">
                      <Trash3Fill className="w-6 h-6 text-[#ffb6c1]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={secondProduct.product_img} alt="product img" className="w-32 h-32 object-cover rounded-lg mb-4" />
                    <h2 className="text-lg font-semibold">{secondProduct.product_name}</h2>
                    <h2 className="text-sm">{secondProduct.company_name}</h2>
                  </div>
                </div>
              ) : (
                <button onClick={() => setIsPopupOpen(true)} className="bg-white rounded-full mx-auto items-center w-20 h-20 flex shadow-xl transition duration-300 hover:scale-125">
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
            disabled={!firstProduct || !secondProduct}
            className={`w-full lg:w-1/6 mt-14 mb-28 rounded-xl shadow-lg text-center text-xl p-2 transition-colors duration-200
              ${(!firstProduct || !secondProduct || errorMsg) ? 'bg-gray-300 cursor-not-allowed opacity-50' : 'bg-[#ffb6c1] hover:bg-[#ff9eab] active:bg-[#ff8c9c]'}`}>
                Analyze compatibility
            </button>
          </div>
          {isLoading &&
            <div>
              <img src="../../loaderGIF.gif" alt="" className="mx-auto h-28 w-28" />
              <p className="text-center text-xl">Loading...</p>
            </div>
          }
          {analysisResult &&
            <AnalyzedResult />
          }
        </div>
      </div>
    </div>
  );
}

export default CompareProducts;