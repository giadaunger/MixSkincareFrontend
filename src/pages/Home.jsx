import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="relative flex justify-end w-5/6 mx-auto mb-32">
        <div className="absolute left-0 z-20 ml-6 sm:ml-12 mt-36 lg:w-2/3">
          <h1 className="text-4xl min-[500px]:text-5xl md:text-6xl mb-4 min-[500px]:mb-10">
            Instantly Check Skincare Product Compatibility
          </h1>
          <p className="text-2xl min-[500px]:text-3xl md:text-4xl mb-10 min-[500px]:mb-20 ">
            Safe, Simple, and Smart!
          </p>
          <div className="w-full sm:w-2/3 lg:justify-center flex">
            <Link to="/compare" className="mt-4 bg-[#ffdce1] lg:bg-[#ffb6c1] border border-[#ffdce1] lg:border-[#ffb6c1] py-4 rounded-full w-1/2 text-xl text-center sm:text-2xl shadow-xl transition duration-300 hover:scale-105 hover:bg-white hover:text-[#ffb6c1]">
              Start Matching!
            </Link>
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
      <div className="w-5/6 justify-center mx-auto">
        <h2 className="text-center text-[#ffb6c1] text-3xl sm:text-5xl mb-10">
          Why is product compatibility important?
        </h2>
        <p className="text-center text-xl mb-20">
          It's important to examine the ingredients in skincare products to
          ensure they match your skin type and complement each other.
          Incompatible ingredients can lead to skin irritation, allergic
          reactions, or diminished product effectiveness. For example, mixing
          certain acids and retinols can cause skin damage rather than providing
          the desired rejuvenation. By understanding the components of your
          skincare items, you can avoid adverse reactions and achieve the best
          possible results for your skin’s health and appearance.
        </p>
        <h2 className="text-center text-[#ffb6c1] text-3xl sm:text-5xl mb-10">
          Seek Professional Guidance
        </h2>
        <p className="text-center text-xl mb-32">
          While the guidance provided here offers a general overview of skincare
          ingredient compatibility, it's essential to remember that individual
          skin conditions and needs can vary significantly. For personalized
          skincare advice that caters specifically to your skin type and
          concerns, it is highly recommended to consult a dermatologist. A
          professional can offer tailored recommendations and advanced treatment
          options, ensuring you get the most effective and safe skincare
          regimen.
        </p>
      </div>
    </div>
  );
}

export default Home;
