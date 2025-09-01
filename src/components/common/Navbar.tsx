import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    if (path !== '/' && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  const getNavLinkClass = (path: string) => {
    const active = isActive(path);
    return `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
      active
        ? 'border-blue-500 text-gray-900'
        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
    }`;
  };

  const getMobileNavLinkClass = (path: string) => {
    const active = isActive(path);
    return `block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
      active
        ? 'border-blue-500 text-blue-700 bg-blue-50'
        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
    }`;
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-blue-600 font-bold text-xl">TVETLink</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className={getNavLinkClass('/')}>
                Home
              </Link>
              <Link to="/about" className={getNavLinkClass('/about')}>
                About
              </Link>
              <Link to="/private-sector" className={getNavLinkClass('/private-sector')}>
                Private Sector
              </Link>
              <Link to="/donation" className={getNavLinkClass('/donation')}>
                Donation
              </Link>
              <Link to="/contact" className={getNavLinkClass('/contact')}>
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Login
            </Link>
            <Link to="/signup" className="ml-3 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
              Sign Up
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className={getMobileNavLinkClass('/')}>
              Home
            </Link>
            <Link to="/about" className={getMobileNavLinkClass('/about')}>
              About
            </Link>
            <Link to="/private-sector" className={getMobileNavLinkClass('/private-sector')}>
              Private Sector
            </Link>
            <Link to="/donation" className={getMobileNavLinkClass('/donation')}>
              Donation
            </Link>
            <Link to="/contact" className={getMobileNavLinkClass('/contact')}>
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <Link to="/login" className="block text-base font-medium text-gray-500 hover:text-gray-800">
                Login
              </Link>
              <Link to="/signup" className="ml-auto block px-4 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;