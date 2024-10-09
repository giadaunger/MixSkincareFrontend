import React from "react";

function Home() {
  return (
    <div className="relative flex justify-end w-2/3 mx-auto">
      <div className="absolute left-0 z-20 ml-12">
        <h1 className="text-6xl">
          Instantly Check Skincare Product Compatibility
        </h1>
        <p className="text-2xl">Safe, Simple, and Smart!</p>
        <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Start Matching!
        </button>
      </div>
      <div className="bg-[#ffb6c1] md:w-2/5 w-1/2 pt-28 rounded-xl mt-16">
        <img
          src="/frontPagePic.png"
          alt="Hand holding a jar of cream"
          className="mx-auto"
        />
      </div>
    </div>
  );
}

export default Home;
