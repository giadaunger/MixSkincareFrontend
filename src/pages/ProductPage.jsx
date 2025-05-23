import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import skincareStore from '../stores/skincareProductStore'
import GoBackBtn from '../components/GoBackBtn';
import Loader from '../components/Loader'

function ProductPage() {
  const { id } = useParams();
  const { productInfo, setProductInfo, fetchProductInfo, isLoading, setIsLoading } = skincareStore();
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    setProductInfo(null);
    setIsLoading(true);
    
    fetchProductInfo(id).then(() => {
      setIsLoading(false);
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [id]);

  if (isLoading || !productInfo) return <div><Loader /></div>;

  return (
    <div className="">
      <GoBackBtn />
      <div className="w-5/6 md:w-2/3 mx-auto flex flex-col min-[1000px]:flex-row justify-center gap-10">
        <div className="w-full min-[1000px]:w-1/3">
          <img src={productInfo.product_img} alt="" className="mx-auto max-h-96" />
        </div>
        <div className="w-full min-[1000px]:w-2/3">
          <div className="mb-32 text-center min-[1000px]:text-left">
            <h2 className="text-4xl">{productInfo.product_name}</h2>
            <p className="text-xl">{productInfo.company_name}</p>
            <p>{productInfo.category}</p>
          </div>
          <div className="w-full">
            <div className="w-full flex justify-start mb-5 border-b border-black">
              <button
                onClick={() => setActiveTab('description')}
                className={`p-2 sm:p-4 text-sm sm:text-lg font-medium rounded-t-md ${
                  activeTab === 'description'
                    ? 'text-[#E2A3B7] font-extrabold border-x border-t border-black relative -mb-[1px] bg-white'
                    : 'text-black transform transition duration-300 hover:scale-105'
                }`}
              >
                BESKRIVNING
              </button>

              <button
                onClick={() => setActiveTab('ingredients')}
                className={`p-2 sm:p-4 text-sm sm:text-lg font-medium rounded-t-md ${
                  activeTab === 'ingredients'
                    ? 'text-[#E2A3B7] font-extrabold border-x border-t border-black relative -mb-[1px] bg-white'
                    : 'text-black transform transition duration-300 hover:scale-105'
                }`}
              >
                INGREDIENSER
              </button>

              {/* <button
                onClick={() => setActiveTab('SkinType')}
                className={`p-2 sm:p-4 text-sm sm:text-lg font-medium rounded-t-md ${
                  activeTab === 'SkinType'
                    ? 'text-[#E2A3B7] font-extrabold border-x border-t border-black relative -mb-[1px] bg-white'
                    : 'text-black transform transition duration-300 hover:scale-105'
                }`}
              >
                SKIN TYPE
              </button> */}
            </div>
            <div className="w-11/12 mx-auto">
              {activeTab === 'description' && (
                <div>
                  <p>{productInfo.description}</p>
                </div>
              )}
              {activeTab === 'ingredients' && (
                <div>
                  {productInfo.ingredients?.map((ingredientObj) => (
                    <p key={ingredientObj.id} className="inline mr-4">{ingredientObj.ingredient.ingredient},</p>
                  ))}
                </div>
              )}
              {activeTab === 'SkinType' && (
                <div>
                  <p>This product is compatible with skintype: a, b and c</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
{/*       <div className="w-5/6 md:w-2/3 mx-auto mt-40 space-y-10 mb-20">
        <div className="bg-[#FFDFE9] w-full rounded-md flex flex-row p-4 justify-between items-center">
          <div>Logo</div>
          <div className="flex flex-row space-x-5 items-center">
            <p>95kr</p>
            <button className="bg-white text-black p-2 items-center">Go to store</button>
          </div>
        </div>
        <div className="bg-[#FFDFE9] w-full rounded-md flex flex-row p-4 justify-between items-center">
          <div>Logo</div>
          <div className="flex flex-row space-x-5 items-center">
            <p>95kr</p>
            <button className="bg-white text-black p-2 items-center">Go to store</button>
          </div>
        </div>
        <div className="bg-[#FFDFE9] w-full rounded-md flex flex-row p-4 justify-between items-center">
          <div>Logo</div>
          <div className="flex flex-row space-x-5 items-center">
            <p>95kr</p>
            <button className="bg-white text-black p-2 items-center">Go to store</button>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default ProductPage