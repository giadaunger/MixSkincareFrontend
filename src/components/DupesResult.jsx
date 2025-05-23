import React from 'react'
import skincareStore from '../stores/skincareProductStore';
import statsStore from '../stores/statsStore';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';  
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function DupesResult() {
  const { dupesResult } = skincareStore();
  const { trackProductView } = statsStore();

  const navigate = useNavigate();

  const sortedProducts = [...dupesResult.similar_products].sort((a, b) => {
    const percentA = Math.round((a.matching_ingredients.length / a.total_ingredients) * 100);
    const percentB = Math.round((b.matching_ingredients.length / b.total_ingredients) * 100);
    return percentB - percentA;
  });

  const handleProductClick = (productId, e) => {
    e.preventDefault(); 
    
    trackProductView(productId)
      .then(() => {
        navigate(`/product/${productId}`);
      });
  };

  return (
    <div className="relative w-full h-full p-4"> 
      {sortedProducts.length > 0 ? (
        <>
          {sortedProducts.map((product) => (  
            <Link 
              onClick={(e) => handleProductClick(product.id, e)}
              key={product.id}
              to={`/product/${product.id}`}
            >
              <div key={product.id} className="flex flex-col p-4 w-full md:w-2/3 shadow-sm mx-auto border border-gray-300 rounded-xl mb-10 transform transition duration-300 hover:scale-105">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                  <div className="flex flex-row items-center self-start">
                    <div className="bg-white rounded-lg p-1 mb-2">
                      <img src={product.product_img} alt="product img" className="w-32 h-32 object-scale-down rounded-lg mb-4" />
                    </div>
                    <div className="items-center ml-4">
                      <h2 className="text-lg font-semibold w-full">{product.name}</h2>
                      <h2 className="text-sm w-full">{product.company_name} - {product.category}</h2>
                    </div>
                  </div>
                  <div className='w-40 h-40 mt-4 sm:mt-0 self-center sm:self-auto'>
                    <CircularProgressbar 
                      value={Math.round((product.matching_ingredients.length / product.total_ingredients) * 100)}
                      text={`${Math.round((product.matching_ingredients.length / product.total_ingredients) * 100)}%`}
                      styles={buildStyles({
                        rotation: 0.25,
                        strokeLinecap: 'round',
                        textSize: '16px',
                        pathTransitionDuration: 1.5,
                        pathColor: 
                          Math.round((product.matching_ingredients.length / product.total_ingredients) * 100) < 40 
                          ? '#ff8376'
                          : Math.round((product.matching_ingredients.length / product.total_ingredients) * 100) < 70 
                          ? '#ffbd5d'
                          : '#90EE90',  
                        textColor: '#374151', 
                        trailColor: '#f3f4f6',
                        backgroundColor: '#3e98c7',
                      })}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
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
                      className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm"
                    >
                      {ingredient.name}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </>
      ) : (
        <div className="bg-[#fffbfd] shadow-xl w-full md:w-1/3 mx-auto mb-10 p-4 rounded-xl">
          <img src="../../loaderGIF.gif" alt="" className="mx-auto h-32 w-32" />
          <p className="text-center text-lg">We couldn't find any similar products with matching ingredients for this item.</p>
        </div>
      )}
    </div>
  )
}

export default DupesResult