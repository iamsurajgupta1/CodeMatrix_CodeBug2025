
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/* import Header from '../components/Header' */

const ListJob = () => {
     const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode state
       const [isDropdownOpen, setIsDropdownOpen] = useState(false);
       
  return (
   <>
   <nav className={`${isDarkMode ? "bg-[#1A1B26]" : "bg-white"} p-4 fixed w-full top-0 z-50 shadow-lg`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className={`${isDarkMode ? "text-white" : "text-black"} text-xl font-bold`}>
            StudentHub
          </Link>
          <div className="space-x-6 flex items-center">
            {/* Navbar Links */}
            <Link to="/jobs" className={`${isDarkMode ? "text-white" : "text-black"} hover:text-purple-500`}>Jobs</Link>
            <Link to="/courses" className={`${isDarkMode ? "text-white" : "text-black"} hover:text-purple-500`}>Courses</Link>
            <Link to="/contact" className={`${isDarkMode ? "text-white" : "text-black"} hover:text-purple-500`}>Contact</Link>

            {/* Dropdown Menu for Features */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                to="#"
                className={`${isDarkMode ? "text-white" : "text-black"} hover:text-purple-500 cursor-pointer`}
              >
                Features
              </Link>
              {isDropdownOpen && (
                <div className={`absolute left-0 mt-2 w-48 ${isDarkMode ? "bg-[#1A1B26]" : "bg-white"} p-4 rounded-lg shadow-lg`}>
                  <ul>
                    <li className={`${isDarkMode ? "text-white" : "text-black"} mb-2 hover:text-purple-500`}>
                      <Link to="/ai-resume-builder">AI Resume Builder</Link>
                    </li>
                    <li className={`${isDarkMode ? "text-white" : "text-black"} mb-2 hover:text-purple-500`}>
                      <Link to="/ai-mock-interview">AI Mock Interview</Link>
                    </li>
                    <li className={`${isDarkMode ? "text-white" : "text-black"} mb-2 hover:text-purple-500`}>
                      <Link to="/courses">Courses</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Dark/Light Mode Toggle */}
           {/*  <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${isDarkMode ? "bg-[#12131E]" : "bg-gray-200"}`}
            >
              {isDarkMode ? (
                <Sun className={`h-5 w-5 ${isDarkMode ? "text-white" : "text-black"}`} />
              ) : (
                <Moon className={`h-5 w-5 ${isDarkMode ? "text-white" : "text-black"}`} />
              )}
            </button> */}
          </div>
        </div>
      </nav>
   </>
  )
}

export default ListJob