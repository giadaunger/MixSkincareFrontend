import React from 'react'
import useFormStore from '../../stores/formStore';

function SkinSensitivity() {
  const { formData, updateFormField } = useFormStore();

  const handleTypeChange = (type) => {
    updateFormField('skinSensitivity', type);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <p className="text-gray-600 mb-8 text-center">
        Knowing your skin's sensitivity level is crucial for choosing the right products. Sensitive skin requires gentler ingredients and may need to avoid certain active ingredients that could cause irritation.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => handleTypeChange('sensitive')}
          className={`p-4 rounded-lg border-2 transition-all border-[#E2A3B7] ${
            formData.skinSensitivity === 'sensitive'
              ? 'border-[#E2A3B7] bg-[#E2A3B7] scale-90'
              : 'transform transition duration-300 hover:scale-105'
          }`}
        >
          <h3 className="font-semibold mb-2">Sensitive</h3>
          <p className="text-sm text-gray-600">Easily reacts to products, often becomes red or irritated</p>
        </button>

        <button
          onClick={() => handleTypeChange('normal')}
          className={`p-4 rounded-lg border-2 transition-all border-[#E2A3B7] ${
            formData.skinSensitivity === 'normal'
              ? 'border-[#E2A3B7] bg-[#E2A3B7] scale-90'
              : 'transform transition duration-300 hover:scale-105'
          }`}
        >
          <h3 className="font-semibold mb-2">Normal sensitivity</h3>
          <p className="text-sm text-gray-600">Generally tolerates most products well, occasionally reacts</p>
        </button>

        <button
          onClick={() => handleTypeChange('resistant')}
          className={`p-4 rounded-lg border-2 transition-all border-[#E2A3B7] ${
            formData.skinSensitivity === 'resistant'
              ? 'border-[#E2A3B7] bg-[#E2A3B7] scale-90'
              : 'transform transition duration-300 hover:scale-105'
          }`}
        >
          <h3 className="font-semibold mb-2">Resistant</h3>
          <p className="text-sm text-gray-600">Rarely reacts to products, can handle most active ingredients</p>
        </button>
      </div>
    </div>
  )
}

export default SkinSensitivity