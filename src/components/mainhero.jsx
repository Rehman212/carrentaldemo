"use client";
import React, { useState, useEffect } from 'react';
import { ShoppingBag, ArrowRight, Play } from 'lucide-react';

export default function HeroSectiossn() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black pb-20">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <source
            src="assests/videos/eocmevideos.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-white text-sm font-medium">New Collection 2025</span>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-150 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Discover Your
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Perfect Style
              </span>
            </h1>

            {/* Subheading */}
            <p
              className={`text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Explore our curated collection of premium fashion pieces designed to elevate your wardrobe. Free shipping on orders over $100.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button className="group relative bg-white text-black px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Shop Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Video
                </span>
              </button>
            </div>

            {/* Stats */}
            <div
              className={`mt-12 grid grid-cols-3 gap-8 transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-gray-400">Premium Brands</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">50K+</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">4.9★</div>
                <div className="text-sm text-gray-400">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors cursor-pointer">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}