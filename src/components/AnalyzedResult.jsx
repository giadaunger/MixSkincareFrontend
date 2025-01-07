import React from "react";
import useStore from "../stores/store";
import { Warning } from "@styled-icons/ionicons-solid/Warning";

function AnalyzedResult() {
  const { analysisResult } = useStore();
  
  return (
    <div className="bg-[#ffb6c1] rounded-xl p-6 w-2/3 mx-auto mb-24 flex">
      <div className="bg-white rounded-xl p-6 w-3/4">
        {analysisResult.active_ingredients?.map((active, index) => (
          <div 
            key={index} 
            className="flex w-full items-center gap-3 bg-[#fffcc8] text-[#e3ba5f] font-bold rounded-full mt-4 px-6 py-3 max-w-2xl mx-auto"
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
            className="flex w-full items-center gap-3 bg-[#cef4fa] text-[#7ac4d1] font-bold rounded-full mt-4 px-6 py-3 max-w-2xl mx-auto"
          >
            <Warning className="w-8 h-8 flex-shrink-0" />
            <span className="text-center">
              Ingredient {warning.ingredients[0]} and {warning.ingredients[1]} are not compatible!
              {warning.message && ` (${warning.message})`}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-1 items-center">
        {analysisResult.active_ingredients && !analysisResult.incompatibility_warnings &&
          <div className="w-40 h-40">
            <img src="../../yellowWarning.png" alt="" />
          </div>
        }
        {!analysisResult.active_ingredients && analysisResult.incompatibility_warnings &&
          <div className="w-40 h-40">
            <img src="../../blueWarning.png" alt="" />
          </div>
        }
        {analysisResult.active_ingredients && analysisResult.incompatibility_warnings &&
          <div className="w-40 h-40 mx-auto">
            <img src="../../comboWarning.png" alt="" />
          </div>
        }
      </div>
    </div>
  );
}

export default AnalyzedResult;