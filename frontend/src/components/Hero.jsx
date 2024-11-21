// Hero.jsx
import React from "react";
import hospital from "../assets/hospital.mp4";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden py-20 bg-black">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 w-full h-full object-cover"
      >
        <source src={hospital} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#080b0f] via-transparent to-black/70"></div>
      <div className="absolute bottom-20 left-10 text-white text-cente">
        <h1 className="text-4xl md:text-5xl mb-4 font-serif">
          Transforming your care
        </h1>
        
        <p className="text-lg md:text-xl mb-6">
          We drive innovation and we provide the best health care.
        </p>
        <button className="bg-transparent text-[#ffff] font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-100 transition border">
          Request an appointment 
        </button>
      </div>
    </div>
  );
};

export default Hero;
