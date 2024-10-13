import React from "react";

function Home() {
  return (
    <div className="relative flex justify-end w-5/6 mx-auto">
      <div className="absolute left-0 z-20 ml-12 mt-36 lg:w-2/3">
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-10">
          Instantly Check Skincare Product Compatibility
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl mb-20 ">
          Safe, Simple, and Smart!
        </p>
        <div className="w-full sm:w-2/3 lg:justify-center flex">
          <button className="mt-4 bg-[#ffb6c1] border border-[#ffb6c1] py-4 rounded-full w-1/2 text-xl sm:text-2xl shadow-xl transition duration-300 hover:scale-125 hover:bg-white hover:text-[#ffb6c1]">
            Start Matching!
          </button>
        </div>
      </div>
      <div className="bg-[#ffb6c1] w-full lg:w-1/2 pt-28 rounded-xl mt-16 shadow-lg flex mb-0">
        <img
          src="/frontPagePic.png"
          alt="Hand holding a jar of cream"
          className="lg:mx-auto mt-auto ml-auto h-1/2 sm:h-2/3 lg:h-auto"
        />
      </div>
    </div>
  );
}

export default Home;
