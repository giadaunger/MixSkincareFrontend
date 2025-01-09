import React from 'react'
import useStore from '../stores/store';

function DupesResult() {
  const { dupesResult } = useStore();

  return (
    <div className="relative w-full h-full p-4"> 
      {dupesResult.similar_products?.map((product) => (  // Notera .similar_products
        <div key={product.id} className="flex flex-row items-center justify-between p-4">
          <img src={product.product_img} alt="product img" className="w-32 h-32 object-cover rounded-lg mb-4" />
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold w-full">{product.name}</h2>
            <h2 className="text-sm w-full">{product.company_name}</h2>
          </div>
          <div>
            <p className="">Matching ingredients: {product.matching_ingredients} / {product.total_ingredients}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DupesResult