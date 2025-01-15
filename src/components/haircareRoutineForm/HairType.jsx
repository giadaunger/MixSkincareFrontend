import React from 'react'
import useSkincareFormStore from '../../stores/skincareFormStore'

function HairType() {
  const { formData, updateFormField } = useSkincareFormStore();

  const handleTypeChange = (type) => {
    updateFormField('skinType', type);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <p className="text-gray-600 mb-8 text-center">
        Your skin type determines which ingredients and product textures will work best for your skin. Understanding whether your skin is dry, oily, or combination helps create a routine that maintains your skin's natural balance.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => handleTypeChange('dry')}
          className={`p-4 rounded-lg border-2 transition-all border-[#E2A3B7] ${
            formData.skinType === 'dry'
              ? 'border-[#E2A3B7] bg-[#E2A3B7] scale-90'
              : 'transform transition duration-300 hover:scale-105'
          }`}
        >
          <h3 className="font-semibold mb-2">Dry Skin</h3>
          <p className="text-sm text-gray-600">Feels tight, may flake or peel</p>
        </button>

        <button
          onClick={() => handleTypeChange('oily')}
          className={`p-4 rounded-lg border-2 transition-all border-[#E2A3B7] ${
            formData.skinType === 'oily'
              ? 'border-[#E2A3B7] bg-[#E2A3B7] scale-90'
              : 'transform transition duration-300 hover:scale-105'
          }`}
        >
          <h3 className="font-semibold mb-2">Oily Skin</h3>
          <p className="text-sm text-gray-600">Appears shiny, prone to breakouts</p>
        </button>

        <button
          onClick={() => handleTypeChange('combination')}
          className={`p-4 rounded-lg border-2 transition-all border-[#E2A3B7] ${
            formData.skinType === 'combination'
              ? 'border-[#E2A3B7] bg-[#E2A3B7] scale-90'
              : 'transform transition duration-300 hover:scale-105'
          }`}
        >
          <h3 className="font-semibold mb-2">Combination</h3>
          <p className="text-sm text-gray-600">Oily T-zone, dry cheeks</p>
        </button>
      </div>
    </div>
  )
}

export default HairType