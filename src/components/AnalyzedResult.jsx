import React from "react";
import skincareStore from "../stores/skincareProductStore";
import { Warning } from "@styled-icons/ionicons-solid/Warning";
import { Ok } from "styled-icons/crypto";

function AnalyzedResult() {
  const { analysisResult } = skincareStore();

  const hasActiveIngredients = analysisResult.active_ingredients?.length > 0;
  const hasIncompatibilities = analysisResult.incompatibility_warnings?.length > 0;
  
  // ML-modellens resultat
  const mlIsCompatible = analysisResult.is_compatible;
  const mlConfidence = analysisResult.confidence || 0;
  
  const renderWarningImage = () => {
    if (hasActiveIngredients && hasIncompatibilities) {
      return (
        <div className="w-40 h-40 mx-auto">
          <img src="../../comboWarning.png" alt="" />
        </div>
      );
    }
    if (hasActiveIngredients) {
      return (
        <div className="w-40 h-40">
          <img src="../../yellowWarning.png" alt="" />
        </div>
      );
    }
    if (hasIncompatibilities) {
      return (
        <div className="w-40 h-40">
          <img src="../../blueWarning.png" alt="" />
        </div>
      );
    }
    return null;
  };
  
  // Skapa ML-resultatmeddelande baserat på faktiska värden
  const getMLResultMessage = () => {
    if (mlIsCompatible === undefined) return "";
    
    if (mlIsCompatible === true) {
      return `AI predicts these products work well together (${mlConfidence}% confidence).`;
    } else {
      return `AI predicts these products might NOT be compatible (${mlConfidence}% confidence).`;
    }
  };
  
  return (
    <>
      {(hasActiveIngredients || hasIncompatibilities) ? (
        <div className="bg-[#FFDFE9] rounded-xl p-6 lg:w-2/3 mx-auto mb-24">
          <div className="md:flex inline">
            <div className="bg-white rounded-xl p-6 md:w-3/4">
              {mlIsCompatible !== undefined && (
                <div 
                  className={`sm:flex w-full items-center gap-3 ${mlIsCompatible ? 'bg-[#d9f9d9] text-[#7dcc7d]' : 'bg-[#ffcccc] text-[#e57373]'} font-bold rounded-xl sm:rounded-full mt-4 px-6 py-3 max-w-2xl mx-auto shadow-xl`}
                >
                  {mlIsCompatible ? (
                    <Ok className="w-8 h-8 flex-shrink-0" />
                  ) : (
                    <Warning className="w-8 h-8 flex-shrink-0" />
                  )}
                  <span className="text-center">
                    {getMLResultMessage()}
                  </span>
                </div>
              )}
              
              {analysisResult.active_ingredients?.map((active, index) => (
                <div 
                  key={index} 
                  className="sm:flex w-full items-center gap-3 bg-[#fffcc8] text-[#e3ba5f] font-bold rounded-xl sm:rounded-full mt-4 px-6 py-3 max-w-2xl mx-auto shadow-xl"
                >
                  <Warning className="w-8 h-8 flex-shrink-0" />
                  <span className="text-center">
                    Active ingredient: {active.ingredient}
                    {active.requires_sunscreen && ". Wear sunscreen, when used in AM"}
                    {active.additional_info && `. ${active.additional_info}`}
                  </span>
                </div>
              ))}
              {analysisResult.incompatibility_warnings?.map((warning, index) => (
                <div 
                  key={index}
                  className="sm:flex w-full items-center gap-3 bg-[#cef4fa] text-[#7ac4d1] font-bold rounded-xl sm:rounded-full mt-4 px-6 py-3 max-w-2xl mx-auto shadow-xl"
                >
                  <Warning className="w-8 h-8 flex-shrink-0" />
                  <span className="text-center">
                    Ingredient {warning.ingredients[0]} and {warning.ingredients[1]} are not compatible!
                    {warning.message && ` (${warning.message})`}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-1 items-center justify-center">
              {renderWarningImage()}
            </div>
          </div>
        </div>
      ) : (
        <div className="sm:flex w-full items-center gap-3 bg-[#d9f9d9] text-[#7dcc7d] font-bold rounded-xl sm:rounded-full mb-20 px-6 py-3 max-w-2xl mx-auto shadow-xl">
          <Ok className="w-8 h-8 flex-shrink-0" />
          <span className="text-center">
            {mlIsCompatible !== undefined 
              ? getMLResultMessage()
              : "No active ingredients and no incompatible ingredients!"
            }
          </span>
        </div>
      )}
    </>
  );
}

export default AnalyzedResult;