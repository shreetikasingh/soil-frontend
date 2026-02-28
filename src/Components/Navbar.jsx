import React, { useState } from 'react';

const Navbar = ({ navigateTo, currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (page) =>
    currentPage === page ? 'text-emerald-700' : 'text-slate-600';

  return (
    <nav className="fixed w-full z-50 glass border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigateTo('home')}
          >
            <i data-lucide="sprout" className="w-8 h-8 text-emerald-600"></i>
            <span className="text-2xl font-bold text-emerald-900 serif tracking-tight">
              TerraGrow
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => navigateTo('home')}
              className={`nav-link ${isActive('home')} hover:text-emerald-700 font-medium transition`}
            >
              Home
            </button>

            {/* 🔥 MODIFIED HERE */}
            <button
              onClick={() => navigateTo('Login')}
              className={`nav-link hover:text-emerald-700 font-medium transition`}
            >
              Get Recommendation
            </button>

            <button
              onClick={() => navigateTo('about')}
              className={`nav-link ${isActive('about')} hover:text-emerald-700 font-medium transition`}
            >
              About
            </button>

            <button
              onClick={() => navigateTo('Login')}
              className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition font-medium"
            >
              Login
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i
              data-lucide={mobileMenuOpen ? 'x' : 'menu'}
              className="w-6 h-6 text-emerald-800"
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-emerald-100">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => {
                navigateTo('home');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-slate-600 hover:bg-emerald-50 rounded"
            >
              Home
            </button>

            {/* 🔥 MODIFIED HERE */}
            <button
              onClick={() => {
                navigateTo('Login');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-slate-600 hover:bg-emerald-50 rounded"
            >
              Get Recommendation
            </button>

            <button
              onClick={() => {
                navigateTo('about');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-slate-600 hover:bg-emerald-50 rounded"
            >
              About
            </button>

            <button
              onClick={() => {
                navigateTo('Login');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-emerald-600 font-medium hover:bg-emerald-50 rounded"
            >
              Login / Signup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;