"use client"
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Check } from 'lucide-react';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Validation
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all fields');
      return;
    }
    if (!formData.acceptTerms) {
      alert('Please accept the terms and conditions');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Save to localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(user => user.email === formData.email)) {
      alert('Email already registered');
      return;
    }

    users.push({
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password
    });

    localStorage.setItem('users', JSON.stringify(users));

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Signup successful! You can now login.');
      window.location.href = '/login';
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const passwordStrength = () => {
    const password = formData.password;
    if (password.length === 0) return { strength: 0, label: '', color: '' };
    if (password.length < 6) return { strength: 25, label: 'Weak', color: 'bg-red-500' };
    if (password.length < 10) return { strength: 50, label: 'Fair', color: 'bg-yellow-500' };
    if (password.length < 14) return { strength: 75, label: 'Good', color: 'bg-blue-500' };
    return { strength: 100, label: 'Strong', color: 'bg-green-500' };
  };

  const strength = passwordStrength();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="assests/videos/eocmevideos.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm"></div>
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20">
            <div className="text-center mb-8">
              <div className="inline-block p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Create Account</h1>
              <p className="text-gray-300 text-sm md:text-base">Join us today and get started for free</p>
            </div>

            <div className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Create a strong password"
                    className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-300">Password Strength</span>
                      <span className={`text-xs font-medium ${
                        strength.strength === 100 ? 'text-green-400' :
                        strength.strength === 75 ? 'text-blue-400' :
                        strength.strength === 50 ? 'text-yellow-400' : 'text-red-400'
                      }`}>{strength.label}</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full transition-all duration-300 ${strength.color}`} style={{ width: `${strength.strength}%` }}></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Confirm your password"
                    className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <button
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {formData.confirmPassword && formData.password === formData.confirmPassword && (
                  <div className="flex items-center gap-1 mt-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-green-400">Passwords match</span>
                  </div>
                )}
              </div>

              {/* Terms */}
              <div>
                <label className="flex items-start cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
                    className="w-5 h-5 mt-0.5 rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
                  />
                  <span className="ml-3 text-sm text-gray-300 group-hover:text-white transition-colors">
                    I agree to the <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">Terms of Service</a> and <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">Privacy Policy</a>
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>

          <p className="text-center text-gray-400 text-xs mt-6">© 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
