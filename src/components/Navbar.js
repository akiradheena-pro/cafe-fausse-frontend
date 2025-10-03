import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/reservations', label: 'Reservations' },
  { path: '/about', label: 'About' },
  { path: '/gallery', label: 'Gallery' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="bg-amber-900 text-amber-50 shadow-lg relative">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tight" onClick={handleLinkClick}>
          Café Fausse
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ path, label }) => (
            <Link key={path} to={path} className="hover:text-amber-200 transition-colors duration-200 font-medium">
              {label}
            </Link>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-amber-50 hover:text-amber-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-amber-900 shadow-lg z-10">
          <div className="flex flex-col items-center py-4">
            {navLinks.map(({ path, label }) => (
              <Link key={path} to={path} className="py-2 text-lg hover:text-amber-200" onClick={handleLinkClick}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;