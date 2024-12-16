import { useState } from "react";
import reactLogo from "./assets/react.svg";
import hexa from "/hexa.png";
import juicebox from "/juicebox.png";
import refreshBtn from "/refresh.svg";
import backBtn from "/back.svg";
import { useNavigate } from "react-router-dom";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    "Professionals around the world shared how they feel about technology and I’ve listened. Now it’s your turn.",
    "I’ll ask you a handful of meaningful questions and compare your responses with people in your industry. ",
    "You’ll get insights into current industry sentiments and a reality check about technology in a few minutes. Deal? Great!"
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-12">
        <div className="flex flex-row justify-around items-center w-full">
          <div className="p-3 bg-slate-800 rounded-full cursor-pointer" onClick={() => navigate('/')}>
            <img src={backBtn} alt="Previous Slide" />
          </div>
          <img src={juicebox} alt="Logo" className="h-12" />
          <div className=" rounded-full cursor-pointer" onClick={ () => navigate('/about')}>
            <img src={refreshBtn} alt="Next Slide" />
          </div>
        </div>
        <img src={hexa} alt="Hexa" />
        <div className="carousel">
          <span className="text-2xl text-center block">
            {slides[currentSlide]}
          </span>
          <div className="flex justify-center mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full mx-1 ${
                  index === currentSlide ? "bg-purple-600" : "bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
        {currentSlide == 2 ? <button
          onClick={() => {navigate('/form')}}
          className=" border-2 py-5 px-12 rounded-md font-semibold bg-slate-50 text-black"
        >
          Get Started
        </button> : <button
          onClick={handleNext}
          className=" border-2 py-5 px-12 rounded-md font-semibold"
        >
          Continue
        </button>}
        
      </div>
    </>
  );
}
