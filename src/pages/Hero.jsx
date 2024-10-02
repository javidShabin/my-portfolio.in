import React from "react";

const Hero = () => {
  return (
    <main className="bg-gradient-to-t from-white to-violet-300 h-[88vh] w-full flex justify-center items-center ">
      <div className="container w-[80%] flex justify-center">
        <div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-justify text-gray-700 md:tracking-[6px] ">
            <span className="text-5xl md:text-7xl  text-gray-600">HI!</span>
            <br />
            I am Javid <br />
            Shabin
          </h1>
          <p className="text-1xl font-thin sm:text-2xl md:text-3xl text-gray-700 tracking-[5px]">
            MERNSTACK DEVELOPER
          </p>
            <button className="py-2 px-5 bg-[#695aa6] mt-5 text-white rounded-md font-semibold">
              Explore
            </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
