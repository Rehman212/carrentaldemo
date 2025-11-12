"use client"; // ← Add this at the very top

import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import i18n from "../../i18n"; // ✅ Import your initialized i18n instance

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#231f1f] to-[#00D495] text-white">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <Phone size={14} />
                <span className="hidden sm:inline">+1 (234) 567-890</span>
              </a>
              <a href="mailto:info@example.com" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <Mail size={14} />
                <span className="hidden md:inline">info@example.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span className="hidden sm:inline">New York, USA</span>
              </div>
              <div className="h-4 w-px bg-white/30 hidden sm:block"></div>
              <a href="#" className="hover:text-blue-200 transition-colors">Help</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md sticky  z-50">
        <div className="max-w-7xl mx-auto px-1">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <div className="flex-shrink-0">
  <a href="/" className="flex items-center space-x-2">
    <img
      src="/assests/images/Blogo.PNG"   // Replace with your logo image path
      alt="Logo"
      
      className="h-15 w-auto"  // Adjust height and width as needed
    />
  </a>
</div>


            {/* Desktop Navigation */}
           <nav className="hidden lg:flex ml-auto items-center space-x-8 pr-4 font-serif text-black">
  <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
    Home
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
  </a>
  <div className="relative group">
    <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center space-x-1">
      <span>Products</span>
      <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
    </button>
    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ">
      <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Category 1</a>
      <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Category 2</a>
      <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Category 3</a>
    </div>
  </div>
  <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
    Services
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
  </a>
  <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
    About
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
  </a>
  <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
    Contact
    <span className="absolute bottom-0 left-0 w-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
  </a>
</nav>


            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search size={20} className="text-gray-700" />
              </button>

              {/* Cart */}
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingCart size={20} className="text-gray-700" />
                <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              {/* User */}
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden md:block">
                <User size={20} className="text-gray-700" />
              </button>

              {/* CTA Button */}
             <a
  href="/login"
  className="hidden md:block bg-gradient-to-r from-[#231f1f] to-[#00D495] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
>
  Sign In
</a>


              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="pb-4 animate-in slide-in-from-top">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products, services..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              <a href="/" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Home
              </a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Products
              </a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Services
              </a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Abouts
              </a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                Contact
              </a>
              <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
