"use client"
import { useState, useEffect } from "react";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor">
          <path d="M333.187 237.405c32.761-23.893 54.095-62.561 54.095-106.123C387.282 58.893 328.389 0 256 0S124.718 58.893 124.718 131.282c0 43.562 21.333 82.23 54.095 106.123-81.44 31.165-139.428 110.126-139.428 202.39 0 39.814 32.391 72.205 72.205 72.205h288.82c39.814 0 72.205-32.391 72.205-72.205 0-92.264-57.988-171.225-139.428-202.39zM164.103 131.282c0-50.672 41.225-91.897 91.897-91.897s91.897 41.225 91.897 91.897S306.672 223.18 256 223.18s-91.897-41.226-91.897-91.898zM400.41 472.615H111.59c-18.097 0-32.82-14.723-32.82-32.821 0-97.726 79.504-177.231 177.231-177.231s177.231 79.504 177.231 177.231c-.001 18.098-14.724 32.821-32.822 32.821z" />
        </svg>
      ),
      value: "500K+",
      label: "Total Users",
      color: "violet"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      value: "$80K",
      label: "Revenue",
      color: "emerald"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      value: "100K",
      label: "Engagement",
      color: "rose"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      value: "99.9%",
      label: "Server Uptime",
      color: "blue"
    }
  ];

  const colorClasses = {
    violet: "from-violet-500 to-violet-600",
    emerald: "from-emerald-500 to-emerald-600",
    rose: "from-rose-500 to-rose-600",
    blue: "from-blue-500 to-blue-600"
  };

  return (
    <div className="relative p-6 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assests/videos/eocmevideos.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 sm:py-24">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Join the startups building their success stories with our platform
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/30 hover:bg-white/15 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[stat.color]} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>

                {/* Value */}
                <h3 className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-slate-200 font-medium">
                  {stat.label}
                </p>

                {/* Subtle accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses[stat.color]} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}