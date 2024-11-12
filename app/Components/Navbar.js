"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  // Trigger navbar, text, and button fade-in effects when the page loads
  useEffect(() => {
    const navbarTimer = setTimeout(() => setNavbarVisible(true), 300); // Delay for navbar fade-in
    const textTimer = setTimeout(() => setTextVisible(true), 600); // Delay for text slide-up
    const buttonTimer = setTimeout(() => setButtonVisible(true), 900); // Delay for button slide-up
    return () => {
      clearTimeout(navbarTimer);
      clearTimeout(textTimer);
      clearTimeout(buttonTimer);
    }; // Clean up on unmount
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={`w-full z-50 h-[70px] items-center fixed top-0 opacity-100 bg-[#fdfdfdcc] bg-opacity-80 shadow-sm border-b border-gray-200 transition-opacity duration-1000 ${
          navbarVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-8 py-3 flex justify-between items-center h-full">
          {/* Logo Section */}
          <div
            className={`flex items-center cursor-pointer transform transition-all duration-700 ${
              textVisible ? "translate-y-0" : "translate-y-10 opacity-0"
            }`}
          >
            <Link href={'/'}>
              <img className="h-10 w-auto" src="/uben.png" alt="Üben AI Logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div
            className={`hidden md:flex space-x-8 navbar text-gray-900 font-medium transform transition-all duration-700 ${
              textVisible ? "translate-y-0" : "translate-y-10 opacity-0"
            }`}
          >
            <Link href="/" className="hover:text-gray-600 font-[Generalsans, sans-serif]">
              Home
            </Link>
            <Link href="/pages/uben" className="hover:text-gray-600">Why Üben?</Link>
            <a href="#prices" className="hover:text-gray-600">Prices</a>
            <a href="#help" className="hover:text-gray-600">Help</a>
          </div>

          {/* Call-to-Action Button for large screens */}
          <button
            className={`hidden md:block bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-200 transition transform ${
              buttonVisible ? "translate-y-0" : "translate-y-10 opacity-0"
            }`}
          >
            Download App
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            className="md:hidden text-gray-900 ml-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu with Transition */}
      <div
        className={`fixed top-16 left-0 w-full z-50 h-full bg-white shadow-md transition-transform duration-500 transform ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center py-4">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="py-2 px-10 hover:text-gray-600">Home</a>
            <a href="#why-uben" className="py-2 px-10 hover:text-gray-600">Why Üben?</a>
            <a href="#prices" className="py-2 px-10 hover:text-gray-600">Prices</a>
            <a href="#help" className="py-2 px-10 hover:text-gray-600">Help</a>
            <button className="mt-8 bg-yellow-400 text-black px-6 py-2 w-full rounded-full font-semibold hover:bg-yellow-200">
              Download App
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
