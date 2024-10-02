import React, { useState } from "react";
import { profilePic } from "../assets";
import { Link, Logs } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function to show/hide menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 flex justify-center items-center shadow-lg sticky top-0 left-0 bg-white z-10">
      <div className="container w-[90%] md:w-[85%] flex justify-between items-center">
        <div className="logo text-[24px] md:text-[32px] font-extrabold">
          <h1>Javid Shabin</h1>
        </div>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex items-center gap-4 md:gap-7 text-[14px] md:text-[18px] font-bold text-gray-600 cursor-pointer">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/project"}>
            <li>Projects</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>

        <div className="profile cursor-pointer hidden md:block">
          <div className="rounded-full">
            <img
              src={profilePic}
              className="w-[40px] md:w-[50px] rounded-full"
            />
          </div>
        </div>
        <div className="toggle-menu block md:hidden" onClick={toggleMenu}>
          <Logs />
        </div>
      </div>

      {/* Toggle menu for mobile screens */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-[65px] w-full z-20">
          <ul className="flex flex-col items-center gap-4 py-4 text-[18px] font-bold text-gray-600 cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <div className="flex justify-center py-2">
            <div className="rounded-full cursor-pointer">
              <img src={profilePic} className="w-[50px] rounded-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
