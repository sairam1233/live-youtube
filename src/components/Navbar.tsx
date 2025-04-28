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
            className={`nvv text-4xl font-bold tracking-wide ${
              scrolled ? 'text-rose-600' : 'text-white'
            } transition-colors duration-300`}
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Livestream
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className={`text-base font-medium ${
              scrolled ? 'text-gray-800' : 'text-white'
            } hover:text-rose-500 transition-colors`}>
              Home
            </a>
            <a href="#gallery" className={`text-base font-medium ${
              scrolled ? 'text-gray-800' : 'text-white'
            } hover:text-rose-500 transition-colors`}>
              Invitation
            </a>
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
            <a href="#about" className="text-gray-800 hover:text-rose-500 text-lg font-medium">About</a>
            <a href="#contact" className="text-gray-800 hover:text-rose-500 text-lg font-medium">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
