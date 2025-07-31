import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl  text-gray-900">
            BetterBrief
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              About
            </Link>
            <Link
              to="/tips"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Tips
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
