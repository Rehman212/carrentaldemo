"use client"
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const matchedUser = users.find(user => user.email === email && user.password === password);

    if (matchedUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        window.location.href = '/Dashboard';
      }, 1000);
    } else {
      alert('Invalid email or password');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="assests/videos/eocmevideos.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm"></div>
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20">
            <div className="text-center mb-8">
              <div className="inline-block p-3 bg-gradient-to-br from-[#0BD092] to-[#252322] rounded-2xl mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-gray-300 text-sm md:text-base">Sign in to continue to your account</p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#0BD092] to-[#252322] text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              <p className="text-center text-gray-400 text-xs mt-6">© 2025 Your Company. All rights reserved.</p>
            </div>
          </div>

          <p className="text-center text-gray-400 text-xs mt-6">© 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
