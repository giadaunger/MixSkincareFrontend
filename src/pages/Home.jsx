import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BannerSlides from '../components/BannerSlides'
import statsStore from '../stores/statsStore'
import { useNavigate } from 'react-router-dom'

function Home() {
  const { fetchFrontPageProducts, frontPageProducts, trackProductView } = statsStore();

  const navigate = useNavigate();
  
  useEffect(() => {
    fetchFrontPageProducts();
  }, []);
    
  const handleProductClick = (productId, e) => {
    e.preventDefault(); 
    
    trackProductView(productId)
      .then(() => {
        navigate(`/product/${productId}`);
      });
  };

  return (
    <div>
      <div>
        <BannerSlides />
      </div>
      <div className="w-5/6 mx-auto justify-center mt-20 mb-20">
        <h2 className="text-4xl md:text-6xl text-center mb-10">Popular products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 gap-y-20">
          {frontPageProducts.map(product => (
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
        <div className="mb-20 mt-36">
          <h2 className="text-center text-[#E2A3B7] text-3xl sm:text-5xl mb-10">
            Why is product compatibility important?
          </h2>
          <p className="text-center text-xl mb-20">
            It's important to examine the ingredients in skincare products to
            ensure they match your skin type and complement each other.
            Incompatible ingredients can lead to skin irritation, allergic
            reactions, or diminished product effectiveness. For example, mixing
            certain acids and retinols can cause skin damage rather than providing
            the desired rejuvenation. By understanding the components of your
            skincare items, you can avoid adverse reactions and achieve the best
            possible results for your skin’s health and appearance.
          </p>
          <h2 className="text-center text-[#E2A3B7] text-3xl sm:text-5xl mb-10">
            Seek Professional Guidance
          </h2>
          <p className="text-center text-xl mb-32">
            While the guidance provided here offers a general overview of skincare
            ingredient compatibility, it's essential to remember that individual
            skin conditions and needs can vary significantly. For personalized
            skincare advice that caters specifically to your skin type and
            concerns, it is highly recommended to consult a dermatologist. A
            professional can offer tailored recommendations and advanced treatment
            options, ensuring you get the most effective and safe skincare
            regimen.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home