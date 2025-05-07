import React from 'react'

function NaturalRemedies() {
  return (
    <div className="sm:w-3/4 w-11/12 mx-auto mt-20 mb-10">
      <h2 className="text-4xl md:text-6xl text-center mb-10 text-[#e2a3b7]">Glow Naturally: 3 DIY Beauty Remedies</h2>
      <p className="text-xl">
        Looking to upgrade your skincare routine without breaking the bank or exposing your skin 
        to harsh chemicals? Mother Nature has your back. Here are three simple, all-natural DIY 
        remedies using ingredients you probably already have in your kitchen. These recipes are gentle, 
        effective, and perfect for anyone seeking a glow-up the holistic way.
      </p>

      <div className="mt-10 p-4 flex flex-col xl:flex-row xl:space-x-4 space-y-4 items-center">
        <div className="xl:w-1/2">
          <img src="../../public/blogImg/NaturalRemediesImg1.png" alt="" />
        </div>
        <div className="xl:w-1/2">
          <h3 className="text-2xl">1. Turmeric Brightening Face Mask</h3>
          <div className="flex flex-row mt-5 text-xl">
            <p className="font-semibold mr-2">Best for:</p>
            <p>Dull skin, uneven tone</p>
          </div>
          <p className="font-semibold mt-5 text-xl">Ingredients:</p>
          <ul className="ml-2 text-xl">
            <li>- 1 tsp turmeric powder</li>
            <li>- 1 tbsp plain yogurt or honey (for sensitive skin)</li>
          </ul>
          <p className="font-semibold mt-5 text-xl">Instructions:</p>
          <p className="text-xl">
            Mix all ingredients into a xlooth paste. Apply evenly to your face, avoiding the eye area. 
            Let it sit for 10–15 minutes, then rinse off with warm water. Use once a week for a brighter, 
            more even complexion.
          </p>
          <div className="flex flex-row mt-5 text-xl">
            <p className="font-semibold mr-2">Note:</p>
            <p>Turmeric can stain, so use an old towel and wash off thoroughly.</p>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col xl:flex-row xl:space-x-4 space-y-4 p-4 items-center">
        <div className="xl:w-1/2">
          <img src="../../public/blogImg/NaturalRemediesImg2.png" alt="" />
        </div>
        <div className="xl:w-1/2">
          <h3 className="text-2xl">2. Coffee Undereye Mask for Dark Circles</h3>
          <div className="flex flex-row mt-5 text-xl">
            <p className="font-semibold mr-2">Best for:</p>
            <p>Tired eyes, puffiness, dark circles</p>
          </div>
          <p className="font-semibold mt-5 text-xl">Ingredients:</p>
          <ul className="ml-2 text-xl">
            <li>- 1 tsp ground coffee</li>
            <li>- 1 tsp coconut oil or almond oil</li>
          </ul>
          <p className="font-semibold mt-5 text-xl">Instructions:</p>
          <p className="text-xl">
            Combine coffee and oil into a thick paste. Gently dab under your eyes (don’t rub). Leave 
            on for 10 minutes, then rinse gently with lukewarm water. Use 2–3 times per week for best 
            results. Caffeine helps improve circulation, reduce puffiness, and wake up tired eyes.
          </p>
        </div>
      </div>

      <div className="mt-20 mb-10 flex flex-col xl:flex-row xl:space-x-4 space-y-4 p-4 items-center">
        <div className="xl:w-1/2">
          <img src="../../public/blogImg/NaturalRemediesImg3.png" alt="" />
        </div>
        <div className="xl:w-1/2">
          <h3 className="text-2xl">3. Oatmeal & Honey Calming Mask</h3>
          <div className="flex flex-row mt-5 text-xl">
            <p className="font-semibold mr-2">Best for:</p>
            <p>Redness, sensitivity, acne-prone skin</p>
          </div>
          <p className="font-semibold mt-5 text-xl">Ingredients:</p>
          <ul className="ml-2 text-xl">
            <li>- 2 tbsp finely ground oats</li>
            <li>- 1 tbsp raw honey</li>
            <li>- A splash of warm water or aloe vera gel</li>
          </ul>
          <p className="font-semibold mt-5 text-xl">Instructions:</p>
          <p className="text-xl">
            Mix until you have a creamy texture. Apply to clean skin and leave on for 10–15 minutes. 
            Rinse gently. This mask soothes irritation, balances skin, and leaves your face feeling 
            baby soft.
          </p>
        </div>
      </div>

      <h3 className="text-2xl">Final Thoughts:</h3>
      <p className="text-xl">
        Natural remedies aren’t just trendy—they’re timeless. With just a few ingredients and a few 
        minutes, you can give your skin the love it deserves. Always patch test new ingredients and 
        adjust recipes to suit your skin type. Nature knows best, and your skin will thank you for it.
      </p>
    </div>
  )
}

export default NaturalRemedies