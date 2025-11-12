"use client"
import React, { useState } from 'react';

export default function Productlist() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const products = [
    { id: 1, name: "Vehicle 1", price: 10, image: "assests/images/carbg.png", badge: "New" },
    { id: 2, name: "Vehicle 2", price: 12, image: "assests/images/carbg.png", badge: "Hot" },
    { id: 3, name: "Vehicle 3", price: 14, image: "assests/images/carbg.png", badge: "New" },
    { id: 4, name: "Vehicle 4", price: 12, image: "assests/images/carbg.png", badge: "New" },
    { id: 5, name: "Vehicle 5", price: 15, image: "assests/images/carbg.png", badge: "New" },
    { id: 6, name: "Vehicle 6", price: 16, image: "assests/images/carbg.png", badge: "Sale" },
    { id: 7, name: "Vehicle 7", price: 12, image: "assests/images/carbg.png", badge: "New" },
    { id: 8, name: "Vehicle 8", price: 11, image: "assests/images/carbg.png", badge: "New " }
  ];

  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const getBadgeColor = (badge) => {
    switch(badge) {
      case "New": return "bg-gradient-to-r from-emerald-400 to-emerald-500";
      case "Hot": return "bg-gradient-to-r from-rose-400 to-rose-500";
      case "Sale": return "bg-gradient-to-r from-amber-400 to-amber-500";
      default: return "bg-indigo-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 p-4 sm:p-8">
      <div className="mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gray-900 font-serif bg-clip-text text-transparent mb-4 animate-fade-in">
            Premium Cars 
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto text-black">
            Discover our exclusive collection of premium Vehicles
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 shadow-sm">
              24/7 Support
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 shadow-sm">
              Affordable Rates
            </span>
          </div>
        </div>

        {/* Products Grid - Now shows 2 columns on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Badge */}
              <div className={`absolute top-4 left-4 z-10 px-3 py-1 ${getBadgeColor(product.badge)} text-white text-xs font-bold rounded-full shadow-lg transform transition-transform duration-300 ${hoveredIndex === index ? 'scale-110' : ''}`}>
                {product.badge}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  wishlist.includes(product.id)
                    ? 'bg-rose-500 scale-110'
                    : 'bg-white/90 hover:bg-rose-100'
                } shadow-lg`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  className={`transition-all duration-300 ${
                    wishlist.includes(product.id) ? 'fill-white scale-110' : 'fill-rose-500'
                  }`}
                  viewBox="0 0 64 64"
                >
                  <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
                </svg>
              </button>

              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-slate-50 to-slate-100 p-6 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`relative w-full h-full object-contain transition-transform duration-700 ${
                    hoveredIndex === index ? 'scale-110 rotate-3' : ''
                  }`}
                />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {product.name}
                  </h5>
                  <div className="flex flex-col items-end">
                    <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      ${product.price}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  Premium quality footwear crafted with excellence and style
                </p>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-amber-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="text-xs text-slate-600 ml-1">(128)</span>
                </div>

                {/* Add to Cart Button */}
                <button className="relative w-full py-2 sm:py-3 px-2 sm:px-4 bg-gradient-to-r from-[#2FA275] to-[#232020] hover:from-[#2FA275] hover:to-[#232020] text-white text-xs sm:text-base font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group/btn">
                  <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    <span className="hidden sm:inline">Add to Cart</span>
                    <span className="sm:hidden">Add</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}