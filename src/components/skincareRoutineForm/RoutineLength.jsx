import React from 'react'
import useSkincareFormStore from '../../stores/skincareFormStore';

function RoutineLength() {
 const { formData, updateFormField } = useSkincareFormStore();

 const handleTypeChange = (type) => {
   updateFormField('routineLength', type);
 };

 const routineTypes = [
   {
     name: 'minimal',
     title: 'Minimal (2-3 steps)',
     description: 'Cleanser, Moisturizer, SPF',
     subtitle: 'Perfect for beginners or those who prefer simplicity'
   },
   {
     name: 'moderate',
     title: 'Moderate (4-5 steps)',
     description: 'Cleanser, Toner, Serum, Moisturizer, SPF',
     subtitle: 'Balanced routine with targeted treatments'
   },
   {
     name: 'extended',
     title: 'Extended (6+ steps)',
     description: 'Double Cleanse, Toner, Multiple Serums, Eye Cream, Moisturizer, SPF',
     subtitle: 'Comprehensive care for skincare enthusiasts'
   }
 ];

 return (
   <div className="w-full max-w-2xl mx-auto">
     <p className="text-gray-600 mb-8 text-center">
       The number of steps in your routine affects its sustainability. While some enjoy a detailed routine, others prefer keeping it simple. The best routine is one you'll actually follow consistently.
     </p>
     
     <div className="grid grid-cols-1 gap-4">
       {routineTypes.map((type) => (
         <button
           key={type.name}
           onClick={() => handleTypeChange(type.name)}
           className={`p-6 rounded-lg border-2 transition-all border-[#E2A3B7] ${
             formData.routineLength === type.name
               ? 'border-[#E2A3B7] bg-[#E2A3B7] scale-95'
               : 'transform transition duration-300 hover:scale-105'
           }`}
         >
           <h3 className="font-semibold text-xl mb-2">{type.title}</h3>
           <p className="text-sm text-gray-600">{type.subtitle}</p>
           <p className="text-sm text-gray-700 font-medium mb-2">Includes: {type.description}</p>
         </button>
       ))}
     </div>
   </div>
 )
}

export default RoutineLength