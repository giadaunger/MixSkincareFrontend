import React, { useState } from "react";
import { Plus } from "@styled-icons/evaicons-solid/Plus";
import AddProducts from "../components/AddProducts";

function CompareProducts() {
  const [addProduct, setAddProduct] = useState(false);

  return (
    <div>
      <div className="z-10 w-1/2 mx-auto flex items-center justify-center absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <AddProducts />
      </div>
      <div className="z-0">
        <div className="w-5/6 mx-auto">
          <div className="w-full mx-auto text-center mt-20">
              <h2 className="text-4xl min-[500px]:text-5xl md:text-6xl mb-4 min-[500px]:mb-10">Add Products to Compare Ingredients!</h2>
              <p className="text-xl min-[500px]:text-2xl md:text-3xl mb-10 min-[500px]:mb-20">Add your skincare favorites to analyze their compatibility.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24">
            <div className="bg-[#ffb6c1] rounded-xl w-60 min-w-60 min-h-96 flex items-center justify-center shadow-xl">
              <div className="bg-white rounded-full mx-auto items-center w-20 h-20 flex shadow-xl transition duration-300 hover:scale-125">
                <Plus className="w-12 h-12 flex mx-auto items-center text-[#ffb6c1]"/>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Plus className="w-24 h-24 text-[#ffb6c1]"/>  
            </div>
            <div className="bg-[#ffb6c1] rounded-xl w-60 min-w-60 min-h-96 flex items-center justify-center shadow-xl">
              <div className="bg-white rounded-full mx-auto items-center w-20 h-20 flex shadow-xl transition duration-300 hover:scale-125">
                <Plus className="w-12 h-12 flex mx-auto items-center text-[#ffb6c1]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareProducts;