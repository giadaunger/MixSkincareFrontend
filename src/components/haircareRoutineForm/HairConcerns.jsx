import React from 'react'
import useSkincareFormStore from '../../stores/skincareFormStore';

function HairConcerns() {
 const { formData, updateFormField } = useSkincareFormStore();

 const handleConcernChange = (concern) => {
   let updatedConcerns;
   if (formData.skinConcerns.includes(concern)) {
     updatedConcerns = formData.skinConcerns.filter(item => item !== concern);
   } else {
     updatedConcerns = [...formData.skinConcerns, concern];
   }
   updateFormField('skinConcerns', updatedConcerns);
 };

 const concerns = [
   {
     name: 'acne',
     title: 'Acne',
     description: 'Breakouts, blackheads, and clogged pores'
   },
   {
     name: 'aging',
     title: 'Aging',
     description: 'Fine lines, wrinkles, and loss of firmness'
   },
   {
     name: 'pigmentation',
     title: 'Pigmentation',
     description: 'Dark spots, uneven skin tone, and sun damage'
   },
   {
     name: 'texture',
     title: 'Texture',
     description: 'Rough skin, enlarged pores, and uneven surface'
   },
   {
     name: 'dryness',
     title: 'Dryness',
     description: 'Flaky, tight, and dehydrated skin'
   },
   {
     name: 'redness',
     title: 'Redness',
     description: 'Inflammation, rosacea, and general redness'
   },
   {
    name: 'pores',
    title: 'Pores',
    description: 'Visible, enlarged pores that are hard to minimize'
  },
  {
    name: 'darkCircles',
    title: 'Dark Circles',
    description: 'Under-eye darkness and puffiness'
  }
 ];

 return (
   <div className="w-full max-w-2xl mx-auto">
     <p className="text-gray-600 mb-8 text-center">
       Everyone's skin has different needs. Whether you're dealing with acne, aging, hyperpigmentation, or dryness, identifying your main concerns helps target specific issues with the right ingredients.
     </p>
     
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
       {concerns.map((concern) => (
         <button
           key={concern.name}
           onClick={() => handleConcernChange(concern.name)}
           className={`p-4 rounded-lg border-2 transition-all border-[#E2A3B7] ${
             formData.skinConcerns.includes(concern.name)
               ? 'border-[#E2A3B7] bg-[#E2A3B7] scale-90'
               : 'transform transition duration-300 hover:scale-105'
           }`}
         >
           <h3 className="font-semibold mb-2">{concern.title}</h3>
           <p className="text-sm text-gray-600">{concern.description}</p>
         </button>
       ))}
     </div>

     {formData.skinConcerns.length > 0 && (
       <div className="mt-6 text-center text-sm text-gray-600">
         Selected concerns: {formData.skinConcerns.length}
       </div>
     )}
   </div>
 )
}

export default HairConcerns