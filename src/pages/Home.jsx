import React from "react";

function Home() {
  return (
    <div className="relative flex justify-end w-5/6 mx-auto">
      <div className="absolute left-0 z-20 ml-12 mt-36 w-2/3">
        <h1 className="text-6xl mb-10">
          Instantly Check Skincare Product Compatibility
        </h1>
        <p className="text-4xl mb-20">Safe, Simple, and Smart!</p>
        <div className="w-2/3 justify-center flex">
          <button className="mt-4 bg-[#ffb6c1] border border-[#ffb6c1] py-4 rounded-full justify-center w-1/2 text-2xl shadow-xl transition duration-300 hover:scale-125 hover:bg-white hover:text-[#ffb6c1]">
            Start Matching!
          </button>
        </div>
      </div>
      <div className="bg-[#ffb6c1] md:w-1/2 w-1/2 pt-28 rounded-xl mt-16 shadow-lg">
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
