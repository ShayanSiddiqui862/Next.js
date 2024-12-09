"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[91px] px-[54px]">
      <nav className="w-full h-full flex justify-between items-center">
        {/* Brand Section */}
        <div className="text-[#252B42] font-bold text-[24px] leading-[32px]">
          Bandage
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="font-semibold text-sm text-[#737373]">Home</Link>
            </li>
            <li>
              <Link href="/about" className="font-semibold text-sm text-[#737373]">About</Link>
            </li>
            <li>
              <Link href="/" className="font-semibold text-sm text-[#737373]">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="font-semibold text-sm text-[#737373]">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Button Section for Desktop */}
        <div className="hidden md:flex items-center justify-end space-x-8 mt-4">
          {/* Login Link */}
          <Link href="/login" className="font-semibold text-sm text-[#23A6F0]">
            Login
          </Link>

          {/* Become a Member Button */}
          <Link href="/learn-more" className="font-semibold text-sm text-white flex items-center gap-2 px-6 py-3 bg-[#23A6F0] rounded-[5px]">
            Become a Member
            <svg className="w-[12px] h-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 10" fill="none" stroke="#FFFFFF">
              <path d="M2 5h8M5 2l3 3-3 3" />
            </svg>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#252B42]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-[91px] left-0 right-0 p-4 z-50">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="font-semibold text-sm text-[#737373]">Home</Link>
            </li>
            <li>
              <Link href="/about" className="font-semibold text-sm text-[#737373]">About</Link>
            </li>
            <li>
              <Link href="/" className="font-semibold text-sm text-[#737373]">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="font-semibold text-sm text-[#737373]">Contact</Link>
            </li>
            <li>
              <Link href="/login" className="font-semibold text-sm text-[#23A6F0]">Login</Link>
            </li>
            <li>
              <Link href="/learn-more" className="font-semibold text-sm text-white flex items-center gap-2 px-6 py-3 bg-[#23A6F0] rounded-[5px]">
                Become a Member
                <svg className="w-[12px] h-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 10" fill="none" stroke="#FFFFFF">
                  <path d="M2 5h8M5 2l3 3-3 3" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
