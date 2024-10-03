import React, { useState } from "react";
import { profilePic } from "../assets";
import { Logs, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { lessProfile, showPRofile } from "../redux/features/profileSlice";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileShow, setIsProfileShow] = useState(false);

  const dispatch = useDispatch();
  // Toggle function to show/hide menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showProfile = () => {
    setIsProfileShow((prevState) => !prevState);

    if (isProfileShow) {
      dispatch(lessProfile());
    } else {
      dispatch(showPRofile());
    }
  };

  return (
    <header className="w-full py-4 flex justify-center items-center shadow-lg sticky top-0 left-0 bg-violet-50 z-10">
      <div className="container w-[90%] md:w-[85%] flex justify-between items-center">
        <div className="logo text-[24px] md:text-[32px] font-extrabold">
          <h1 className=" text-gray-700">Javid Shabin</h1>
        </div>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex items-center gap-4 md:gap-7 text-[14px] md:text-[18px] font-bold text-gray-600 cursor-pointer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="py-1 px-4 bg-[#695aa6] text-white rounded-lg">
            <Link to="/contact">Follow Me</Link>
          </li>
        </ul>

        <div className="profile cursor-pointer hidden md:block">
          <div className="rounded-full">
            <img
              onClick={showProfile}
              src={profilePic}
              className="w-[40px] md:w-[50px] rounded-full"
            />
          </div>
        </div>
        <div className="toggle-menu block md:hidden" onClick={toggleMenu}>
            {
                !isMenuOpen ? <Logs /> : <X/>
            }
          
        </div>
      </div>

      {/* Toggle menu for mobile screens */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-[65px] w-full z-20">
          <ul className="flex flex-col items-center gap-4 py-4 text-[18px] font-bold text-gray-600 cursor-pointer">
            <li onClick={toggleMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/project">Projects</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex justify-center py-2">
            <div className="rounded-full cursor-pointer" onClick={toggleMenu}>
              <img
                onClick={showProfile}
                src={profilePic}
                className="w-[50px] rounded-full"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
