import React, {useState} from 'react'

function SkincareRoutine() {
  const [age, setAge] = useState(25); // Default värde på 25

 return (
   <div className="w-5/6 mx-auto">
     <div className="w-full md:w-2/3 mx-auto text-center mt-12">
         <h2 className="text-4xl min-[500px]:text-5xl md:text-6xl mb-4 min-[500px]:mb-10">Build Your Daily Skincare Routine!</h2>
         <p className="text-xl min-[500px]:text-2xl md:text-3xl mb-10 min-[500px]:mb-20">Get a basic routine suggestion based on your skin type and concerns. Simple guidance for your everyday skincare needs.</p>
     </div>
     <div className="bg-[#ffb6c1] rounded-md p-8">
       <form className="space-y-8">
         <div>
           <h3 className="text-xl mb-4">Skin Type:</h3>
           <div className="flex gap-6">
             <label className="flex items-center gap-2">
               <input type="radio" name="skinType" value="dry" />
               Dry skin
             </label>
             <label className="flex items-center gap-2">
               <input type="radio" name="skinType" value="oily" />
               Oily skin
             </label>
             <label className="flex items-center gap-2">
               <input type="radio" name="skinType" value="combination" />
               Combination
             </label>
           </div>
         </div>

         <div>
           <h3 className="text-xl mb-4">Skin Sensitivity:</h3>
           <div className="flex gap-6">
             <label className="flex items-center gap-2">
               <input type="radio" name="sensitivity" value="sensitive" />
               Sensitive
             </label>
             <label className="flex items-center gap-2">
               <input type="radio" name="sensitivity" value="normal" />
               Normal sensitivity
             </label>
             <label className="flex items-center gap-2">
               <input type="radio" name="sensitivity" value="resistant" />
               Resistant
             </label>
           </div>
         </div>

         <div>
           <h3 className="text-xl mb-4">Skin Concerns:</h3>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
             <label className="flex items-center gap-2">
               <input type="checkbox" name="concerns" value="acne" />
               Acne
             </label>
             <label className="flex items-center gap-2">
               <input type="checkbox" name="concerns" value="redness" />
               Redness
             </label>
             <label className="flex items-center gap-2">
               <input type="checkbox" name="concerns" value="pigmentation" />
               Pigmentation
             </label>
             <label className="flex items-center gap-2">
               <input type="checkbox" name="concerns" value="aging" />
               Fine lines/Aging
             </label>
             <label className="flex items-center gap-2">
               <input type="checkbox" name="concerns" value="pores" />
               Large pores
             </label>
             <label className="flex items-center gap-2">
               <input type="checkbox" name="concerns" value="texture" />
               Uneven texture
             </label>
           </div>
         </div>

         <div>
            <h3 className="text-xl mb-4">Age: {age}</h3>
            <div className="w-full max-w-md">
              <input 
                type="range" 
                min="13" 
                max="80" 
                value={age} 
                onChange={(e) => setAge(e.target.value)}
                className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer" 
              />
              <div className="flex justify-between text-sm mt-1">
                <span>13</span>
                <span>80</span>
              </div>
            </div>
          </div>

         <div>
           <h3 className="text-xl mb-4">Preferred Routine Length:</h3>
           <div className="flex gap-6">
             <label className="flex items-center gap-2">
               <input type="radio" name="routineLength" value="minimal" />
               Minimal (2-3 steps)
             </label>
             <label className="flex items-center gap-2">
               <input type="radio" name="routineLength" value="moderate" />
               Moderate (3-5 steps)
             </label>
             <label className="flex items-center gap-2">
               <input type="radio" name="routineLength" value="extended" />
               Extended (5+ steps)
             </label>
           </div>
         </div>

         <div>
           <h3 className="text-xl mb-4">Experience Level:</h3>
           <div className="flex gap-6">
             <label className="flex items-center gap-2">
               <input type="radio" name="experience" value="beginner" />
               Beginner
             </label>
             <label className="flex items-center gap-2">
               <input type="radio" name="experience" value="intermediate" />
               Regular user
             </label>
             <label className="flex items-center gap-2">
               <input type="radio" name="experience" value="advanced" />
               Experienced
             </label>
           </div>
         </div>

         <button className="w-full bg-white py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors">
           Generate Routine
         </button>
       </form>
     </div>
   </div>
 )
}

export default SkincareRoutine