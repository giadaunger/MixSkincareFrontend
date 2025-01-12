import React from 'react'
import useStore from '../stores/store';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';  
import { Link } from 'react-router-dom';

function DupesResult() {
  const { dupesResult } = useStore();

  return (
    <div className="relative w-full h-full p-4"> 
      {dupesResult.similar_products?.map((product) => (  
        <Link to={`/product/${product.id}`}>
          <div key={product.id} className="flex flex-col sm:flex-row items-center justify-between p-4 w-full md:w-2/3 mx-auto bg-[#FFDFE9] rounded-xl mb-10 transform transition duration-300 hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-lg p-1 mb-2">
                <img src={product.product_img} alt="product img" className="w-32 h-32 object-scale-down rounded-lg mb-4" />
              </div>
              <h2 className="text-lg font-semibold w-full">{product.name}</h2>
              <h2 className="text-sm w-full">{product.company_name} - {product.category}</h2>
            </div>
            <div>
              <p className="text-center">Ingredients</p>
              <div className="flex flex-wrap">
                {product.matching_ingredients?.map((ingredient) => (
                  <span 
                    key={ingredient.id} 
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    {ingredient.name}
                  </span>
                ))}
                {product.product_only_ingredients?.map((ingredient) => (
                  <span 
                    key={ingredient.id} 
                    className="bg-[#fafafa] text-[#808080] px-3 py-1 rounded-full text-sm"
                  >
                    {ingredient.name}
                  </span>
                ))}
              </div>
            </div>
            <div className='w-40 h-40'>
              <CircularProgressbar 
                value={Math.round((product.matching_ingredients.length / product.total_ingredients) * 100)}
                text={`${Math.round((product.matching_ingredients.length / product.total_ingredients) * 100)}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: 'round',
                  textSize: '16px',
                  pathTransitionDuration: 1.5,
                  pathColor: `#10B981`,  
                  textColor: '#374151', 
                  trailColor: 'white',
                  backgroundColor: '#3e98c7',
                })}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default DupesResult