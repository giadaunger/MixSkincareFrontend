import React from 'react'
import useFormStore from '../../stores/formStore';

function Age() {
  const { formData, updateFormField } = useFormStore();

  const handleAgeChange = (e) => {
    updateFormField('age', e.target.value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <p className="text-gray-600 mb-8 text-center">
        Skin's needs change as we age. Different age groups benefit from different ingredients - younger skin might focus on prevention and oil control, while mature skin might need more focus on hydration and firmness.
      </p>

      <div className="flex flex-col items-center gap-4">
        <div className="text-4xl font-semibold text-[#E2A3B7]">
          {formData.age || 25} years
        </div>
        
        <div className="w-full max-w-md relative">
          <input 
            type="range" 
            min="13" 
            max="80" 
            value={formData.age || 25}
            onChange={handleAgeChange}
            className="w-full h-2 appearance-none bg-white rounded-lg cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-6
            [&::-webkit-slider-thumb]:w-6
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-[#E2A3B7]
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-runnable-track]:bg-[#E2A3B7]
            [&::-webkit-slider-runnable-track]:rounded-lg"
          />
          <div className="flex justify-between text-sm mt-1 text-gray-600">
            <span>13</span>
            <span>80</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Age