import React from 'react';

const Home = ({ navigateTo }) => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80" 
          alt="Agriculture Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-b from-emerald-50/80 via-transparent to-emerald-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="slide-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6 border border-emerald-200">
              <i data-lucide="leaf" className="w-4 h-4 mr-2"></i>
              AI-Powered Agriculture
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-emerald-950 serif leading-tight mb-6">
              Cultivate Smarter,<br />
              <span className="text-emerald-600">Harvest Better</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              TerraGrow uses advanced machine learning to analyze your soil nutrients and environmental conditions, recommending the perfect crop for maximum yield and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigateTo('predictor')} 
                className="px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/30 flex items-center justify-center group"
              >
                Get Recommendation
                <i data-lucide="arrow-right" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition"></i>
              </button>
              <button 
                onClick={() => navigateTo('about')} 
                className="px-8 py-4 bg-white text-emerald-800 border-2 border-emerald-200 rounded-full font-semibold hover:bg-emerald-50 transition flex items-center justify-center"
              >
                Learn More
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-700">7</div>
                <div className="text-sm text-slate-500">Parameters</div>
              </div>
              <div className="text-center border-x border-emerald-200">
                <div className="text-3xl font-bold text-emerald-700">95%</div>
                <div className="text-sm text-slate-500">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-700">24/7</div>
                <div className="text-sm text-slate-500">Support</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-emerald-200 rounded-3xl transform rotate-3 opacity-20"></div>
            <img 
              src="https://static.photos/agriculture/640x360/42" 
              alt="Farm Field" 
              className="relative rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition duration-500 w-full object-cover h-125"
            />
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl max-w-xs slide-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <i data-lucide="trending-up" className="w-5 h-5 text-emerald-600"></i>
                </div>
                <div>
                  <div className="font-semibold text-emerald-900">Yield Increase</div>
                  <div className="text-sm text-slate-500">Average improvement</div>
                </div>
              </div>
              <div className="text-3xl font-bold text-emerald-600">+40%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;