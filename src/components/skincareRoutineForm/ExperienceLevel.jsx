import React from 'react'
import useFormStore from '../../stores/formStore';

function ExperienceLevel() {
 const { formData, updateFormField } = useFormStore();

 const handleTypeChange = (type) => {
   updateFormField('experienceLevel', type);
 };

 const experienceLevels = [
   {
     name: 'beginner',
     title: 'Beginner',
     description: 'New to skincare routines',
     includes: 'Will start with gentle, basic products and simple routines',
   },
   {
     name: 'intermediate',
     title: 'Regular User',
     description: 'Familiar with basic skincare',
     includes: 'Can handle more active ingredients and complex routines',
   },
   {
     name: 'advanced',
     title: 'Experienced',
     description: 'Well-versed in skincare',
     includes: 'Comfortable with strong actives and advanced treatments',
   }
 ];

 return (
   <div className="w-full max-w-2xl mx-auto">
     <p className="text-gray-600 mb-8 text-center">
       Your familiarity with skincare helps determine the complexity of products you can use. Beginners might start with gentle, basic products, while experienced users might handle more active ingredients.
     </p>
     
     <div className="grid grid-cols-1 gap-4">
       {experienceLevels.map((level) => (
         <button
           key={level.name}
           onClick={() => handleTypeChange(level.name)}
           className={`p-6 rounded-lg border-2 transition-all border-[#E2A3B7] ${
             formData.experienceLevel === level.name
               ? 'border-[#E2A3B7] bg-[#E2A3B7] scale-95'
               : 'transform transition duration-300 hover:scale-105'
           }`}
         >
           <h3 className="font-semibold text-xl mb-2">{level.title}</h3>
           <p className="text-sm text-gray-700 font-medium mb-2">{level.description}</p>
           <p className="text-sm text-gray-600">{level.includes}</p>
         </button>
       ))}
     </div>
   </div>
 )
}

export default ExperienceLevel