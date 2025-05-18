import React, { useState, useEffect } from "react";
import { Plus } from "@styled-icons/evaicons-solid/Plus";
import AddProducts from "../components/AddProducts";
import AnalyzedResult from "../components/AnalyzedResult";
import Loader from "../components/Loader";
import skincareStore from "../stores/skincareProductStore";
import { Trash3Fill } from "styled-icons/bootstrap";
import { Warning } from "@styled-icons/ionicons-solid/Warning";

function CompareProducts() {
  const [activeCard, setActiveCard] = useState(null);
  const {
    setIsPopupOpen, 
    selectedCompareProduct, 
    errorMsg, 
    setErrorMsg, 
    isLoading, 
    setIsLoading,
    analyzeCompatibility,
    analysisResult,
    setAnalysisResult,
    setSelectedCompareProduct,
    firstCompareProduct,
    setFirstCompareProduct,
    secondCompareProduct,
    setSecondCompareProduct
  } = skincareStore();

  useEffect(() => {
    if(selectedCompareProduct && activeCard === 1) {
      setFirstCompareProduct(selectedCompareProduct);
      setActiveCard(null); 
    } else if (selectedCompareProduct && activeCard === 2) {
      setSecondCompareProduct(selectedCompareProduct);
      setActiveCard(null); 
    }
  }, [selectedCompareProduct]);

  useEffect(() => {
    if(firstCompareProduct && secondCompareProduct && firstCompareProduct.product_name === secondCompareProduct.product_name) {
      setErrorMsg("OBS! You have selected the same product twice. Please select different products to check compatibility!");
    } else {
      setErrorMsg("");
    }
  }, [firstCompareProduct, secondCompareProduct]);

  const handleCardClick = (cardNumber) => {
    setActiveCard(cardNumber);
    setIsPopupOpen(true);
  };

  const handleDeleteProduct = (productNumber) => {
    if(productNumber === 1) {
      setFirstCompareProduct(null);
    } else if(productNumber === 2) {
      setSecondCompareProduct(null);
    }
    setAnalysisResult(null);
  }

  const handleAnalyzeCompatibility = async () => {
    if (!firstCompareProduct || !secondCompareProduct) return;
  
    try {
      setIsLoading(true);
      await analyzeCompatibility(firstCompareProduct.id, secondCompareProduct.id);
      
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
        <AddProducts onSelect={setSelectedCompareProduct} />
      </div>
      <div className="z-0">
        <div className="w-5/6 mx-auto">
          <div className="w-full mx-auto text-center mt-12">
              <h2 className="text-4xl min-[500px]:text-5xl md:text-6xl mb-4 min-[500px]:mb-10 text-[#E2A3B7] text-center mt-10">Add Products to Compare Ingredients!</h2>
              <p className="text-xl min-[500px]:text-2xl mb-10 min-[500px]:mb-20">Add your skincare favorites to analyze their compatibility.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24">
          <div className={`border border-gray-300 rounded-xl w-60 min-w-60 min-h-[340px] flex ${firstCompareProduct ? 'items-end' : 'items-center'} justify-center shadow-sm`}>
            {firstCompareProduct ? (
                <div className="relative w-full h-full p-4"> 
                  <div className="absolute -top-8 right-2"> 
                    <div onClick={() => handleDeleteProduct(1)} className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transform transition duration-300 hover:scale-125">
                      <Trash3Fill className="w-6 h-6 text-[#E2A3B7]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 bg-white rounded-md mb-2">
                      <img src={firstCompareProduct.product_img} alt="product img" className="w-32 h-32 object-scale-down rounded-lg mb-4" />
                    </div>
                    <div className="w-full text-center min-h-20">
                      <h2 className="text-lg font-semibold">{firstCompareProduct.product_name}</h2>
                      <h2 className="text-sm ">{firstCompareProduct.company_name}</h2>
                    </div>
                  </div>
                </div>
              ) : (
                <button onClick={() => handleCardClick(1)} className="bg-[#E2A3B7] rounded-full mx-auto items-center w-20 h-20 flex shadow-xl transition duration-300 hover:scale-110">
                  <Plus className="w-12 h-12 flex mx-auto items-center text-white" />
                </button>
              )}
            </div>
            <div className="flex justify-center items-center">
              <Plus className="w-24 h-24 text-[#E2A3B7]"/>  
            </div>
            <div className={`border border-gray-300 rounded-xl w-60 min-w-60 min-h-[340px] flex ${secondCompareProduct ? 'items-end' : 'items-center'} justify-center`}>
              {secondCompareProduct ? (
                <div className="relative w-full h-full p-4"> 
                  <div className="absolute -top-8 right-2"> 
                    <div onClick={() => handleDeleteProduct(2)} className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transform transition duration-300 hover:scale-125">
                      <Trash3Fill className="w-6 h-6 text-[#E2A3B7]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 bg-white rounded-md mb-2">
                      <img src={secondCompareProduct.product_img} alt="product img" className="w-32 h-32 object-scale-down rounded-lg mb-4" />
                    </div>
                    <div className="w-full text-center min-h-20">
                      <h2 className="text-lg font-semibold">{secondCompareProduct.product_name}</h2>
                      <h2 className="text-sm ">{secondCompareProduct.company_name}</h2>
                    </div>
                  </div>
                </div>
              ) : (
                <button onClick={() => handleCardClick(2)} className="bg-[#E2A3B7] rounded-full mx-auto items-center w-20 h-20 flex shadow-xl transition duration-300 hover:scale-110">
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
            disabled={!firstCompareProduct || !secondCompareProduct}
            className={`w-full lg:w-1/6 mt-14 mb-28 rounded-xl shadow-lg text-center text-xl p-2 border
              ${(!firstCompareProduct || !secondCompareProduct || errorMsg) ? 'bg-gray-300 border-gray-300 cursor-not-allowed opacity-50 text-black' : 'border-[#E2A3B7] text-[#E2A3B7] transform transition duration-300 hover:scale-110'}`}>
                Analyze compatibility
            </button>
          </div>
          {isLoading &&
            <Loader />
          }
          {analysisResult && firstCompareProduct && secondCompareProduct &&
            <AnalyzedResult />
          }
        </div>
      </div>
    </div>
  );
}

export default CompareProducts;