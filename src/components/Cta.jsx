'use client';

import { useState } from 'react';
import { Car, Phone, Calendar, MapPin, ArrowRight, Clock, Shield } from 'lucide-react';

export default function CarRentalCTA() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    { icon: Clock, text: '24/7 Support', color: 'text-blue-400' },
    { icon: Shield, text: 'Fully Insured', color: 'text-green-400' },
    { icon: MapPin, text: 'Free Delivery', color: 'text-purple-400' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-[#262624] to-slate-900 py-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 text-sm text-blue-300">
              <Car className="w-4 h-4" />
              <span>Limited Time Offer</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Ready to Hit the
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
                Open Road?
              </span>
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed">
              Get 25% off your first rental when you book today. Premium vehicles, unbeatable prices, and unforgettable journeys await.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              {features.map((Feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 transition-transform hover:scale-110"
                  onMouseEnter={() => setHoveredFeature(idx)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`${Feature.color} transition-colors`}>
                    <Feature.icon className="w-5 h-5" />
                  </div>
                  <span className="text-slate-200 font-medium">{Feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative bg-gradient-to-r from-[#262624] to-[#2DA476] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/60 transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2DA476] to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </span>
              </button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-slate-900 flex items-center justify-center text-white font-bold text-sm"
                  >
                    {i === 4 ? '5K+' : ''}
                  </div>
                ))}
              </div>
              <div className="text-slate-300">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-sm">Trusted by 5,000+ happy customers</p>
              </div>
            </div>
          </div>

          {/* Right Content - Car Visual */}
          <div className="relative">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <Car className="w-32 h-32 text-cyan-400 animate-pulse" />
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Starting from</span>
                    <span className="text-red-400 line-through text-sm">$99/day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-white">$74</span>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      Save 25%
                    </span>
                  </div>
                  <div className="text-sm text-slate-400">
                    Premium cars • Flexible terms • Instant booking
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
              <div className="font-bold text-2xl">500+</div>
              <div className="text-sm opacity-90">Vehicles</div>
            </div>

            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform">
              <div className="font-bold text-2xl">50+</div>
              <div className="text-sm opacity-90">Locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}