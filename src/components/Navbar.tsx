import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './index.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'nv shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <div className="relative">
              {/* SVG Camera Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-10 h-10 ${
                  scrolled ? 'text-rose-600' : 'text-white'
                }`}
              >
                <path d="M17 10.5V7a2 2 0 0 0-2-2h-1.5l-.5-1h-4l-.5 1H7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7l-3 3v-4l3 3z" />
              </svg>

              {/* Red Dot */}
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
            </div>

            {/* Text */}
            <div className="flex flex-col leading-tight">
              <span className={`text-3xl font-bold tracking-tight ${
                scrolled ? 'text-rose-600' : 'text-white'
              }`}>
                Live
              </span>
              <span className={`text-sm font-light tracking-wider ${
                scrolled ? 'text-rose-600' : 'text-white'
              }`}>
                Streaming
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className={`text-base font-medium ${
              scrolled ? 'text-gray-800' : 'text-white'
            } hover:text-rose-500 transition-colors`}>Home</a>
            <a href="#gallery" className={`text-base font-medium ${
              scrolled ? 'text-gray-800' : 'text-white'
            } hover:text-rose-500 transition-colors`}>Invitation</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`p-2 focus:outline-none ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 transition-all animate-fade-in-down">
            <a href="#" className="text-gray-800 hover:text-rose-500 text-lg font-medium">Home</a>
            <a href="#gallery" className="text-gray-800 hover:text-rose-500 text-lg font-medium">Invitation</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
