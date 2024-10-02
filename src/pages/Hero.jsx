import React from "react";
import { profilePic } from "../assets";
import { useSelector } from "react-redux";

const Hero = () => {
  const isProfile = useSelector((state) => state.profile.isvalue);
  
  return (
    <>
      <main className="relative bg-gradient-to-t from-white to-violet-300 h-[88vh] w-full flex justify-center items-center ">
        {/* Profile details section */}
        {isProfile && (
          <div className="absolute top-4 right-4 bg-white w-[250px] py-2 px-3 rounded-md shadow-xl ">
            <div className="rounded-full flex flex-col items-end text-right ">
              <img
                src={profilePic}
                className="w-[40px] md:w-[50px] rounded-full "
              />
              <div>
                <p>javid.personal.act@gmail.com</p>
                <p>9526223034</p>
              </div>
            </div>
          </div>
        )}
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
    </>
  );
};

export default Hero;
