import { useState, useEffect } from 'react';
import srmistLogo from '../assets/SRMIST logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Main Navbar - Fixed height for all devices */}
      <nav className="w-full h-16 bg-[#193f64] shadow-[0px_4px_4px_#00000040] flex items-center justify-between px-4 sm:px-6 lg:px-[150px] fixed top-0 z-40">
        {/* Logo - Adjusted size for mobile */}
        <div className="h-14 w-40 sm:h-[40px] sm:w-[150px] flex-shrink-0">
          <img
            className="h-full w-full object-contain"
            alt="Srmist logo hwite"
            src={srmistLogo}
          />
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Shop</NavLink>
          <NavLink href="#">Contact</NavLink>
          <NavLink href="#">About Us</NavLink>
        </div>

        {/* Auth Buttons - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-3">
          <AuthButton variant="primary">LOG IN</AuthButton>
          <AuthButton variant="secondary">SIGN UP</AuthButton>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'visible' : 'invisible'}`}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Sidebar Content */}
        <div 
          className={`absolute top-0 right-0 h-full w-72 bg-[#193f64] shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full p-4 overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="#" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="#" onClick={() => setIsOpen(false)}>Shop</MobileNavLink>
              <MobileNavLink href="#" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
              <MobileNavLink href="#" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
            </nav>

            {/* Mobile Auth Buttons */}
            <div className="mt-auto pt-6 space-y-3 ">
              <AuthButton variant="primary" fullWidth>LOG IN</AuthButton>
              <AuthButton variant="secondary" fullWidth>SIGN UP</AuthButton>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

// Reusable NavLink component
const NavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="relative group text-white font-medium text-base sm:text-lg lg:text-xl tracking-wider"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#a38e75] transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

// Mobile NavLink component
const MobileNavLink = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-white text-xl font-medium py-3 px-4 rounded transition-colors duration-200 hover:bg-[#2a4d75] active:bg-[#1e3a5a]"
    >
      {children}
    </a>
  );
};

// Reusable AuthButton component
const AuthButton = ({ variant = 'primary', children, fullWidth = false }) => {
  const baseClasses = "px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200";
  const primaryClasses = "bg-[#a38e75] text-white hover:bg-[#8a7862] active:bg-[#786652] hover:shadow-md";
  const secondaryClasses = "bg-white text-[#10294a] hover:bg-gray-100 active:bg-gray-200 hover:shadow-md";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseClasses} ${widthClass} ${
        variant === 'primary' ? primaryClasses : secondaryClasses
      }`}
    >
      {children}
    </button>
  );
};