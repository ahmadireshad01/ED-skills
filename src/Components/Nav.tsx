"use client";
import { useState } from "react";
import { Search } from "lucide-react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#fafaf5]">
      {/* Content wrapper */}
      <div className="flex justify-between items-center py-4 sm:py-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[124px]">
        {/* Left side: logo + links */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          <div className="flex items-center gap-2">
            <img
              src="/images/nav/image1.svg"
              alt="logo"
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
            />
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[27px] font-bold leading-[26.7px] tracking-[-2%]">
              MyEdSkills
            </h1>
          </div>

          {/* Navigation Links - visible lg+ */}
          <ul className="hidden lg:flex items-center text-[15px] md:text-[16px] font-medium leading-7 tracking-[-0.22px] gap-5 xl:gap-8">
            <li className="cursor-pointer hover:text-gray-600">Courses</li>
            <li className="cursor-pointer hover:text-gray-600">How It Works</li>
            <li className="cursor-pointer hover:text-gray-600">Scholarships</li>
            <li className="cursor-pointer hover:text-gray-600">
              For Educators
            </li>
          </ul>
        </div>

        {/* Right side: search + auth buttons */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Search */}
          <button className="bg-[#E8E6E8] p-2 rounded-full hover:bg-gray-300 transition">
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Auth buttons - md+ only */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <button className="hover:bg-black hover:text-white font-medium px-4 md:px-6 py-2 rounded-full transition">
              Login
            </button>
            <button className="hover:bg-black hover:text-white font-medium px-4 md:px-6 py-2 rounded-full transition">
              Signup
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-[#fafaf5] animate-slideDown">
          <ul className="flex flex-col items-center text-center py-4 px-4 space-y-4 text-base font-medium">
            <li className="cursor-pointer hover:text-gray-600 py-2">Courses</li>
            <li className="cursor-pointer hover:text-gray-600 py-2">
              How It Works
            </li>
            <li className="cursor-pointer hover:text-gray-600 py-2">
              Scholarships
            </li>
            <li className="cursor-pointer hover:text-gray-600 py-2">
              For Educators
            </li>

            {/* Auth buttons */}
            <div className="flex flex-col w-full max-w-[200px] gap-3 pt-4">
              <button className="hover:bg-black hover:text-white font-medium px-4 py-2 rounded-full border transition">
                Login
              </button>
              <button className="hover:bg-black hover:text-white font-medium px-4 py-2 rounded-full border transition">
                Signup
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
