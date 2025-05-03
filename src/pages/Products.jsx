import React, { useState, useEffect } from 'react'
import { SearchHeart } from "styled-icons/bootstrap";
import statsStore from '../stores/statsStore';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const { 
    fetchPopularProducts, 
    popularProducts, 
    trackProductView, 
    isLoading, 
    hasMore, 
    resetPagination 
  } = statsStore();

  const navigate = useNavigate();
  
  useEffect(() => {
    resetPagination(); 
    fetchPopularProducts();
  }, []);

  const handleInputChange = (e) => { 
    const term = e.target.value;
    setSearchTerm(term);
  }

  const loadMoreProducts = () => {
    if (!isLoading && hasMore) {
      fetchPopularProducts();
    }
  }

  const handleProductClick = (productId, e) => {
    e.preventDefault(); 
    
    trackProductView(productId)
      .then(() => {
        navigate(`/product/${productId}`);
      });
  };
  
  return (
    <div className="w-5/6 mx-auto mt-12 mb-20">
      <div className="mx-auto w-11/12 md:w-3/4 relative mb-20"> 
        <SearchHeart className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input 
          autoFocus
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder='Type to search'
          className="w-full pl-10 pr-4 py-2 rounded-lg border-2 focus:outline-none border-[#FFD6DC] focus:border-[#FFDFE9]"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 gap-y-20">
        {popularProducts.map(product => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`}
            onClick={(e) => {handleProductClick(product.id, e)}}
          >
            <div className="flex flex-col items-center w-36 sm:w-52 h-[295px] transform transition duration-300 hover:scale-105">
              <div className="rounded-lg p-1 mb-2 bg-[#f9fafbd9]">
                <img src={product.product_img} alt={product.product_name} className="w-52 h-32 object-scale-down rounded-lg mb-4" />
              </div>
              <div className="w-full text-left h-full md:px-4">
                <h3 className="text-lg font-semibold">{product.product_name}</h3>
                <p className="text-sm">{product.company_name} - {product.category}</p>
              </div>
              <div className="flex float-left w-full">
                <button className="mt-2 flex justify-end mr-0 p-1 border rounded-md border-[#e2a3b7] text-[#e2a3b7] hover:bg-[#e2a3b7] hover:text-white">See product</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {hasMore && (
        <div className="w-full mt-20">
          <button 
            onClick={loadMoreProducts} 
            disabled={isLoading}
            className={`mt-2 flex mx-auto p-2 text-xl border rounded-md border-[#e2a3b7] text-[#e2a3b7] hover:bg-[#e2a3b7] hover:text-white ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Loading...' : 'Show more'}
          </button>
        </div>
      )}
    </div>
  )
}

export default Products