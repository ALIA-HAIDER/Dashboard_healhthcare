import { useState } from "react";
import logo from '../assets/img.png';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 shadow-md p-4 bg-[#000000] bg-opacity-40 backdrop-blur-lg ">
      <nav className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <img className="rounded-full w-[50px] md:w-[200px]" src={logo} alt="Logo" />
          </div>
          <p className="font-bold text-[#EDF6F9] text-xl md:text-3xl font-mono">MediCare</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-[#EDF6F9] hover:text-gray-800">
            Dashboard
          </a>
          <a href="#" className="text-[#EDF6F9] hover:text-gray-800">
            Patients
          </a>
          <a href="#" className="text-[#EDF6F9] hover:text-gray-800">
            Appointments
          </a>
          <a href="#" className="text-[#EDF6F9] hover:text-gray-800">
            Reports
          </a>
        </div>

        {/* Right-side Content */}
        <div className="hidden sm:flex items-center space-x-4">
          <a href="#" className="text-[#EDF6F9] hover:text-[#E29578]">
            <button className="bg-transparent text-[#2361a2] px-4 py-2 rounded-full">
              Sign Up
            </button>
          </a>
          <a href="#" className="text-white">
            <button className="bg-[#2292A4] hover:bg-[#2361a2] text-black px-4 py-2 rounded-full">
              Sign in
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#2292A4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#2292A4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4">
          <a href="#" className="w-full text-center border-[#2361a2] p-3 rounded-2xl border text-[#2292A4] hover:text-[#2361a2] m-1">
            Dashboard
          </a>
          <a href="#" className="w-full text-center border-[#2361a2] p-3 rounded-2xl border text-[#2292A4] hover:text-[#2361a2] m-1">
            Patients
          </a>
          <a href="#" className="w-full text-center border-[#2361a2] p-3 rounded-2xl border text-[#2292A4] hover:text-[#2361a2] m-1">
            Appointments
          </a>
          <a href="#" className="w-full text-center border-[#2361a2] p-3 rounded-2xl border text-[#2292A4] hover:text-[#2361a2] m-1">
            Reports
          </a>
          <div className="flex justify-center w-full mt-4">
            <a href="#" className="text-white px-4 py-2 rounded-md transition">
              <button className="bg-[#2292A4] hover:bg-[#2361a2] text-black px-4 py-2 rounded-full">
                Sign in
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
