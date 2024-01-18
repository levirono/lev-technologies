import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      {/* Visible on Larger Screens */}
      <div className="hidden md:flex">
        <Link to="/" className="text-white mx-4">Home</Link>
        <Link to="/about" className="text-white mx-4">Services</Link>
        <Link to="/skills" className="text-white mx-4">Blogs</Link>
        <Link to="/projects" className="text-white mx-4">Reviews</Link>
        <Link to="/contact" className="text-white mx-4">Store</Link>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Invisible Menu for Small Screens */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 left-0 bg-blue-900">
          <Link to="/" className="text-white block py-2 px-4">Home</Link>
          <Link to="/about" className="text-white block py-2 px-4">Services</Link>
          <Link to="/skills" className="text-white block py-2 px-4">Blogs</Link>
          <Link to="/projects" className="text-white block py-2 px-4">Reviews</Link>
          <Link to="/contact" className="text-white block py-2 px-4">Store</Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
