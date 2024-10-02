import React from "react";
import { profilePic } from "../assets";

const Header = () => {
  return (
    <header className="w-full py-4 flex justify-center items-center shadow-lg sticky top-0 left-0">
      <div className="container w-[85%] flex justify-between ">
        <div className="logo text-[32px] font-extrabold">
          <h1>Javid Shabin</h1>
        </div>

        <ul className="flex items-center gap-7 font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li></li>
        </ul>
        <div className="profile">
          <div className="rounded-full">
            <img src={profilePic} className="w-[50px] rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
