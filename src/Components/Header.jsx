import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // As per strict guidelines: varying page names to avoid "About", "Contact", "Services"
  // Total items: 5 (strictly under the max 6 limit)
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Company', path: '/the-company' },
    { name: 'Core Infrastructure', path: '/infrastructure' },
    { name: 'Platform', path: '/platform' },
    { name: 'Reach Us', path: '/reach-us' }
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section - EXACT MCA NAME */}
          <Link to="/" className="flex  items-center gap-1 ">
            <img src={logo} className='h-16' alt="" />
            <div className='flex flex-col mt-3'>
              <span className="text-2xl font-extrabold text-[#1d4ed8] tracking-tight leading-none uppercase">
                ARIES INFRACON
              </span>
              <span className="text-[10px] font-semibold text-[#60a5fa] tracking-widest uppercase leading-tight mt-1">
                Private Limited
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered as per screenshot */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[15px] font-semibold transition-colors duration-200 ${isActive ? 'text-[#1d4ed8]' : 'text-gray-700 hover:text-[#1d4ed8]'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button - Right aligned, flat/matte blue as per reference */}
          <div className="hidden md:flex items-center">
            {/* CTA Button Label specifically named (Rule: NEVER just 'Submit' or standard) */}
            <Link to="/reach-us">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#3b82f6] text-white px-6 py-2.5 rounded text-[15px] font-semibold tracking-wide hover:bg-[#2563eb] transition-colors"
              >
                Initiate Project
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#1d4ed8] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 text-base font-semibold rounded-md ${location.pathname === link.path
                      ? 'bg-blue-50 text-[#1d4ed8]'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#1d4ed8]'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 px-3">
                <Link to="/reach-us" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-[#3b82f6] text-white px-5 py-3 rounded text-base font-semibold hover:bg-[#2563eb] transition-colors">
                    Initiate Project
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;