import React, {useState} from 'react'
import { ChevronLeft, ChevronRight } from '@styled-icons/fa-solid'
import HairType from '../components/haircareRoutineForm/HairType';
import HairSensitivity from '../components/haircareRoutineForm/HairSensitivity';
import HairConcerns from '../components/haircareRoutineForm/HairConcerns';
import Age from '../components/haircareRoutineForm/Age';
import RoutineLength from '../components/haircareRoutineForm/RoutineLenght';
import ExperienceLevel from '../components/haircareRoutineForm/ExperienceLevel';

function HaircareRoutine() {
  const [currentSlideStep, setCurrentSlideStep] = useState(0);

  const slides = [
    {
      component: <HairType />,
      title: "What's your hair type?",
    },
    {
      component: <HairSensitivity />,
      title: "How sensitive is your hair?",
    },
    {
      component: <HairConcerns />,
      title: "What are your hair concerns?",
    },
    {
      component: <Age />,
      title: "What's your age?",
    },
    {
      component: <RoutineLength />,
      title: "Preferred routine length?",
    },
    {
      component: <ExperienceLevel />,
      title: "Your skincare experience level?",
    },
  ]

  const handleNext = () => {
    if (currentSlideStep < slides.length - 1) {
      setCurrentSlideStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlideStep > 0) {
      setCurrentSlideStep(prev => prev - 1);
    }
  };

  return (
    <div className="w-11/12 mx-auto mb-20">
      <div className="w-full md:w-2/3 mx-auto text-center mt-12">
        <h2 className="text-4xl min-[500px]:text-5xl md:text-6xl mb-4 min-[500px]:mb-10">Build Your Daily Skincare Routine! Hair</h2>
        <p className="text-xl min-[500px]:text-2xl md:text-3xl mb-10 min-[500px]:mb-20">Get a basic routine suggestion based on your skin type and concerns. Simple guidance for your everyday skincare needs.</p>
      </div>
      <div className="bg-[#FFDFE9] rounded-xl p-8 w-5/6 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">{slides[currentSlideStep].title}</h2>
          <p className="text-gray-600">Step {currentSlideStep + 1} of {slides.length}</p>
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <div 
                key={index} 
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlideStep ? 'bg-[#E2A3B7]' : 'bg-white'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-rows-[1fr_auto] sm:grid-rows-1 grid-cols-2 sm:grid-cols-[auto_1fr_auto] gap-4 items-center">
          <button 
            onClick={handlePrevious}
            className={`p-2 col-start-1 row-start-2 sm:row-start-1 ${currentSlideStep === 0 ? 'invisible' : ''}`}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex justify-center col-span-2 row-start-1 sm:col-span-1 sm:col-start-2">
            {slides[currentSlideStep].component}
          </div>

          <button 
            onClick={handleNext}
            className={`p-2 col-start-2 row-start-2 justify-self-end sm:justify-self-start sm:row-start-1 sm:col-start-3 ${
              currentSlideStep === slides.length - 1 ? 'invisible' : ''
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="justify-center w-full flex mt-10">
          <button className={`p-2 rounded-xl border border-[#E2A3B7] bg-[#E2A3B7] text-white font-semibold text-xl ${currentSlideStep < slides.length - 1 ? 'invisible' : ''}`}>Create Routine!</button>
        </div>
      </div>
    </div>
  )
}

export default HaircareRoutine