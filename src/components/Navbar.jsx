import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Video Platform
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
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
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="block mt-4 md:inline-block md:mt-0 md:ml-6">
            Home
          </Link>
          <Link to="/admin" className="block mt-4 md:inline-block md:mt-0 md:ml-6">
            Admin
          </Link>
          <Link to="/login" className="block mt-4 md:inline-block md:mt-0 md:ml-6">
            Login
          </Link>
          <Link to="/signup" className="block mt-4 md:inline-block md:mt-0 md:ml-6">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
