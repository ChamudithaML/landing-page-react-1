import { useState } from 'react';
import logo from '../../assets/images/cogent-logo-01.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-800 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <a href="https://cogentsolutions.ae/" target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#oview" className="text-gray-100 hover:text-blue-600">Event Overview</a>
            <a href="#agenda" className="text-gray-100 hover:text-blue-600">Agenda</a>
          </div>

          <div className="hidden md:flex">
            <a
              href="#register"
              className="bg-transparent text-white px-4 py-2 rounded-full border border-white hover:text-purple-500 transition"
            >
              Register Now
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              <svg
                className="h-6 w-6 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <a href="#midopt1" className="block py-2 text-gray-100 hover:text-purple-500">Event Overview</a>
          <a href="#midopt2" className="block py-2 text-gray-100 hover:text-purple-500">Agenda</a>
          <button className="w-full mt-2 bg-transparent text-white py-2 rounded-full border border-white hover:text-purple-500 transition">
            Register Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
