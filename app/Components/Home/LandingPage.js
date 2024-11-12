"use client";
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  // Trigger animation when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200); // Delay before animation starts
    return () => clearTimeout(timer); // Clean up the timeout on unmount
  }, []);

  return (
    <div className="hero-section container mx-auto px-6 py-10 md:px-12 md:py-16 shadow-lg rounded-[2.5rem] mb-20 border flex flex-col md:flex-row items-center justify-between bg-white">
      {/* Left Content */}
      <div
        className={`max-w-3xl md:max-w-3xl pl-8 md:pl-16 text-center md:text-left transition-all duration-1000 ${animate ? 'animate-move-left' : 'opacity-0 translate-x-10'
          }`}
      >
        <img className="h-12 mb-16 mx-auto md:mx-0" src="/u.png" alt="Üben AI Logo" />
        <h1 className="text-4xl md:text-5xl font-bold required:leading-[2.9rem]">
          The <span className="text-yellow-500">✨magical✨</span> new way to learn German
        </h1>


        <p className="text-gray-600 mt-4 text-lg">
          Learn from 200+ lessons from A1 to B2 and practice your new skills online. Üben is your personalized AI language tutor that gets you writing and speaking{' '}
          <span className="font-semibold">better</span> and <span className="font-semibold">faster</span>.
        </p>
        <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-200 transition">
          Get Started
        </button>
        <p className="text-gray-500 mt-4">Free for 7 days. Then billed annually.</p>
      </div>

      {/* Right Content */}
      <div
        className={`relative mt-8 md:mt-0 md:pr-20 transition-all duration-1000 ${animate ? 'animate-move-right' : 'opacity-0 translate-x-10'
          }`}
      >
        <img
          className="h-[400px] md:h-[800px] w-auto mx-auto md:mx-0"
          src="/mobile.png"
          alt="Conversation preview"
        />
      </div>
    </div>
  );
};

export default HeroSection;
