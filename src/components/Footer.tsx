import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 mb-4">
          © 2025 Live Stream Events. All rights reserved. Developed by <a className='text-gray-300' href='https://sairamkottu.ccbp.tech/' target="_blank">Vinay</a>
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">YouTube</a>
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
