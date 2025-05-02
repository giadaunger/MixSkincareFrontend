import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BannerSlides from '../components/BannerSlides'
import statsStore from '../stores/statsStore'

function Home() {
  const { fetchPopularProducts, popularProducts, trackProductView } = statsStore();
  
  useEffect(() => {
    fetchPopularProducts();
  }, []);
    
  return (
    <div>
      <div>
        <BannerSlides />
      </div>
      <div className="w-11/12 mx-auto mt-20 mb-20">
        <h2 className="text-4xl md:text-6xl text-center mb-10">Popular product</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {popularProducts.map(product => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              onClick={(e) => {
                e.preventDefault();
                trackProductView(product.id);
                window.location.href = `/product/${product.id}`;
              }}
            >
              <div className="flex flex-col items-center p-4 w-52 h-72 transform transition duration-300 hover:scale-105">
                <div className="bg-white rounded-lg p-1 mb-2">
                  <img src={product.product_img} alt={product.product_name} className="w-52 h-32 object-scale-down rounded-lg mb-4" />
                </div>
                <div className="w-full text-left">
                  <h3 className="text-lg font-semibold">{product.product_name}</h3>
                  <p className="text-sm">{product.company_name} - {product.category}</p>
                  <button className="mt-2 flex mr-0 p-1 border border-[#e2a3b7] text-[#e2a3b7] hover:bg-[#e2a3b7] hover:text-white">See product</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home