import React, { useState } from 'react';

const Login = ({ navigateTo, showToast }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const toggleLoginMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔐 PERSIST LOGIN STATE
    localStorage.setItem("isLoggedIn", "true");

    showToast(
      isLoginMode ? 'Logged in successfully!' : 'Account created successfully!'
    );

    // ✅ REDIRECT AFTER LOGIN
    setTimeout(() => navigateTo('predictor'), 1000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-md w-full">
        <div className="glass rounded-3xl p-8 md:p-12 shadow-xl border border-emerald-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
              <i data-lucide="user" className="w-8 h-8 text-emerald-600"></i>
            </div>
            <h2 className="text-3xl font-bold text-emerald-950 serif">
              {isLoginMode ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-slate-600 mt-2">
              {isLoginMode
                ? 'Login to access your saved recommendations'
                : 'Join TerraGrow for personalized recommendations'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLoginMode && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none bg-white/50"
                  placeholder="John Doe"
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none bg-white/50"
                placeholder="farmer@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none bg-white/50"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-slate-400 hover:text-emerald-600"
                >
                  <i data-lucide="eye" className="w-5 h-5"></i>
                </button>
              </div>
            </div>

            {!isLoginMode && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none bg-white/50"
                  placeholder="••••••••"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/30 flex items-center justify-center"
            >
              <span>{isLoginMode ? 'Login' : 'Sign Up'}</span>
              <i data-lucide="arrow-right" className="w-5 h-5 ml-2"></i>
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-600">
              {isLoginMode ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={toggleLoginMode}
                className="text-emerald-600 font-semibold hover:underline ml-1"
              >
                {isLoginMode ? 'Sign up' : 'Login'}
              </button>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-emerald-100">
            <p className="text-xs text-center text-slate-500">
              By continuing, you agree to our Terms of Service and Privacy Policy.
              This system is currently in demo mode.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;