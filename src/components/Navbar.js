import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-amber-900 text-amber-50 shadow-lg">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-serif font-bold tracking-tight">Café Fausse</Link>
      <div className="hidden md:flex space-x-6">
        {['/', '/menu', '/reservations', '/about', '/gallery'].map((path) => (
          <Link
            key={path}
            to={path}
            className="hover:text-amber-200 transition-colors duration-200 font-medium"
          >
            {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <button className="text-amber-50 hover:text-amber-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;