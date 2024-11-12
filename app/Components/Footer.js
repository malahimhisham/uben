import React from 'react';

const Footer = () => {
  return (
    <div style={{ backgroundImage: 'linear-gradient(155deg, #eef2ff, #fff 50%, #fafafa)' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 border-b-2 gap-4 px-12 py-10">
        <div className="flex items-center cursor-pointer transform transition-all duration-700">
          <img className="h-10 w-auto" src="/uben.png" alt="Üben AI Logo" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex flex-col">
            <h2 className="font-bold text-gray-600">Company</h2>
            <p className="mt-4 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-300">About us</p>
            <p className="mt-2 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-300">Prices</p>
          </div>

          <div className="flex flex-col">
            <h2 className="font-bold text-gray-600">More</h2>
            <p className="mt-4 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-300">Contact us</p>
            <p className="mt-2 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-300">Help / FAQ</p>
          </div>
        </div>

      </div>

      <div className='px-12 mb-8'>
       <p className='mt-2 text-gray-600'>Copyright 2024 Üben AI.</p>
       <p className='mt-2 text-gray-600'>All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
