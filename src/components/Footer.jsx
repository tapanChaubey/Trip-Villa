import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-gradient-to-b from-[#F1EAFF] to-[#FFFFFF] text-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-6">
            <Link to="/" className="flex items-center gap-1 text-2xl font-bold tracking-wide">
              <span className="text-rose-600">Trip</span>
              <span className="text-indigo-700">+Villa</span>
            </Link>
          </div>

          <p className="text-center max-w-xl text-sm font-normal leading-relaxed mb-4 text-gray-700">
             Book your perfect stay with ease—our hotel booking site brings comfort, convenience, and great deals to your fingertips.
          </p>

          {/* Social Links with Icons */}
          <div className="flex space-x-6 mt-2 text-xl">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
              <FaGithub />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-red-900 text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
            <a href="https://prebuiltui.com">Trip+Villa</a> ©2025. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
