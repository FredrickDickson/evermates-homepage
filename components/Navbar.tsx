import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Logo & Main Nav */}
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0 flex items-center">
              <img
                src="/evermates-logo.png"
                alt="Evermates"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-500">
              <a href="#" className="hover:text-violet-600 transition-colors">Practice Tests</a>
              <a href="#" className="hover:text-violet-600 transition-colors">Quests</a>
            </div>
          </div>

          {/* Center: Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 sm:text-xs"
                placeholder="Enter code to find"
              />
            </div>
          </div>

          {/* Right Side: User Links & Auth */}
          <div className="hidden md:flex items-center gap-6 text-xs font-medium text-gray-500">
            <a href="#" className="hover:text-gray-900">My Tests</a>
            <a href="#" className="hover:text-gray-900">My Quests</a>
            <a href="#" className="hover:text-gray-900">Creator Studio</a>
            
            <div className="h-4 w-px bg-gray-300 mx-2"></div>
            
            <a href="#" className="text-violet-600 hover:text-violet-800">Log in</a>
            <a href="#" className="px-4 py-1.5 border border-violet-600 text-violet-600 rounded-md hover:bg-violet-50 transition-colors">
              Register
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-violet-700 hover:bg-gray-50">Practice Tests</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-violet-700 hover:bg-gray-50">Quests</a>
            <div className="px-3 py-2">
               <input
                type="text"
                className="block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm placeholder-gray-500 focus:ring-1 focus:ring-violet-500"
                placeholder="Enter code to find"
              />
            </div>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">My Tests</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">My Quests</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">Creator Studio</a>
             <div className="border-t border-gray-200 mt-2 pt-2 flex flex-col gap-2 px-3">
                <a href="#" className="text-center w-full py-2 text-violet-600 font-medium">Log in</a>
                <a href="#" className="text-center w-full py-2 border border-violet-600 text-violet-600 rounded-md font-medium">Register</a>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;