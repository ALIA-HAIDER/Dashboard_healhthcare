import { useState } from 'react';
import { FaBars, FaSearch, FaUserMd, FaCalendarCheck, FaComments, FaChartBar, FaTeeth, FaDna, FaHeartbeat, FaVial, FaMoneyCheckAlt, FaXRay } from 'react-icons/fa';

export function DashNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden text-gray-600 focus:outline-none"
      >
        <FaBars className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-black border-r shadow-md transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:w-64`}
      >
        <div className="p-4">
          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
            <FaSearch className="absolute top-2 right-3 text-gray-400" />
          </div>
        </div>

        {/* Main Menu */}
        <div className="p-4">
          <p className="text-sm text-gray-500">Menu</p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center space-x-3  rounded-md p-2 cursor-pointe bg-[#2361a2] text-white hover:text-[#e9eaed] cursor-pointer">
              <FaUserMd className="w-5 h-5" />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-3 text-white hover:text-[#2361a2] cursor-pointer">
              <FaCalendarCheck className="w-5 h-5" />
              <span>Doctors</span>
            </li>
            <li className="flex items-center space-x-3 text-white hover:text-[#2361a2] cursor-pointer">
              <FaComments className="w-5 h-5" />
              <span>Appointment</span>
            </li>
            <li className="flex items-center space-x-3 text-white hover:text-[#2361a2] cursor-pointer">
              <FaChartBar className="w-5 h-5" />
              <span>Message</span>
            </li>
            <li className="flex items-center space-x-3 text-white hover:text-[#2361a2] cursor-pointer">
              <FaChartBar className="w-5 h-5" />
              <span>Statistics</span>
            </li>
          </ul>
        </div>

        {/* Other Menu */}
        <div className="p-4">
          <p className="text-sm text-gray-500">Other Menu</p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center space-x-3  text-white rounded-md p-2 cursor-pointer">
              <FaTeeth className="w-5 h-5" />
              <span>Dental Treatment</span>
            </li>
            <li className="flex items-center space-x-3 text-white hover:text-[#2361a2] cursor-pointer">
              <FaDna className="w-5 h-5" />
              <span>DNA Test</span>
            </li>
            <li className="flex items-center space-x-3 text-white hover:text-[#2361a2] cursor-pointer">
              <FaHeartbeat className="w-5 h-5" />
              <span>Cardiology</span>
            </li>
            <li className="flex items-center space-x-3 text-white hover:text-[#2361a2] cursor-pointer">
              <FaVial className="w-5 h-5" />
              <span>Test Results</span>
            </li>
            <li className="flex items-center space-x-3 text-white hover:text-[#2361a2] cursor-pointer">
              <FaMoneyCheckAlt className="w-5 h-5" />
              <span>Payment</span>
            </li>
            <li className="flex items-center space-x-3 text-white hover:text-[#2361a2] cursor-pointer">
              <FaXRay className="w-5 h-5" />
              <span>X-Ray</span>
            </li>
          </ul>
        </div>

        {/* User Info */}
        <div className="p-4 border-t mt-auto">
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">Daniel Sullivan</p>
              <p className="text-xs text-gray-500">daniel.sul@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
