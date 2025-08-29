import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiBriefcase, FiHome, FiInfo } from "react-icons/fi";
import { FaRegLightbulb } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const location = useLocation();

  // Get header height for content padding
  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  // Set initial scroll state on mount
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll(); // Check immediately on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home", icon: <FiHome className="md:hidden" /> },
    {
      path: "/better-prompt",
      label: "Prompt Improver",
      icon: <FaRegLightbulb className="md:hidden" />,
    },
    { path: "/about", label: "About", icon: <FiInfo className="md:hidden" /> },
    {
      path: "/tips",
      label: "Tips",
      icon: <FaRegLightbulb className="md:hidden" />,
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900 border-b border-gray-800 shadow-lg py-2"
            : "bg-gray-900 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="group-hover:rotate-9 transition-transform">
                <img src="/brief.svg" alt="logo" className="h-8" />
              </div>
              <span className="text-2xl font-bold text-white">BetterBrief</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div style={{ height: `${headerHeight}px` }}></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 border-l border-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-5 border-b border-gray-800">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-2 rounded-lg">
                <FiBriefcase className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">BetterBrief</span>
            </div>
          </div>

          <div className="flex-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-6 py-3 text-lg ${
                  location.pathname === item.path
                    ? "text-white bg-gray-800 border-l-4 border-green-500"
                    : "text-gray-400 hover:bg-gray-800"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
