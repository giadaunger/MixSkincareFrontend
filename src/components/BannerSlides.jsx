import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function BannerSlides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    /* {
      img: "../../banner.png",
      slogan: "Shield Your Glow, Every Sunny Day.",
      text: "Your perfect SPF match is just a click away.",
      buttonText: "Shop sun care",
      styling: "right"
    },
    {
      img: "../../banner2.png",
      slogan: "K-Beauty Secrets, Your Skin's New Ritual.",
      text: "Reveal your healthiest skin with Korean care essentials.",
      buttonText: "Explore K-beauty",
      styling: "left"
    }, */
    {
      img: "../../banners/banner3.png",
      slogan: "Glow From Within, Learn Along the Way!",
      text: "Explore skincare tips, ingredient insights, and beauty routines – written to empower your journey to healthy, radiant skin.",
      textColor: "black",
      backgroundColor: "#b0a59cd3",
      buttonText: "Read the blog",
      styling: "left",
      link: "/blog"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full relative overflow-hidden h-[400px] md:h-[450px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="w-full h-full flex items-center relative">
            <img 
              src={slide.img} 
              alt={slide.slogan}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div 
              style={slide.backgroundColor ? { backgroundColor: slide.backgroundColor } : {}} 
              className={`relative shadow-xl rounded-lg z-10 p-8 text-center max-w-md  ${slide.styling === "left" ? "ml-6 md:ml-16" : "ml-auto mr-6 md:mr-16"}`}
            >
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${slide.textColor ? `text-${slide.textColor}` : 'text-white'}`}>{slide.slogan}</h2>
              <p className={`text-sm md:text-base mb-4 ${slide.textColor ? `text-${slide.textColor}` : 'text-white'}`}>{slide.text}</p>
              <Link to={slide.link}>
                <button className="text-black shadow-md border border-black px-4 py-2 mt-10 rounded-md flex mx-auto transform transition duration-300 hover:scale-110">
                  {slide.buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 cursor-pointer ${
                index === currentSlide ? 'bg-[#E2A3B7]' : 'bg-white'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default BannerSlides