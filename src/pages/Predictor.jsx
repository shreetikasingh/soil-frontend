import React, { useState } from 'react';
import { simulateMLPrediction } from '../Constants/Cropdata';

const Predictor = ({ navigateTo, onPredict, showToast }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = {
      nitrogen: parseFloat(e.target.nitrogen.value),
      phosphorus: parseFloat(e.target.phosphorus.value),
      potassium: parseFloat(e.target.potassium.value),
      temperature: parseFloat(e.target.temperature.value),
      humidity: parseFloat(e.target.humidity.value),
      ph: parseFloat(e.target.ph.value),
      rainfall: parseFloat(e.target.rainfall.value)
    };

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // TODO: Replace with actual API call to Python backend with .pkl model
    // const response = await fetch('http://your-api/predict', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    // });
    // const result = await response.json();
    
    const result = simulateMLPrediction(formData);
    onPredict(formData, result);
    setLoading(false);
  };

  const fillSampleData = () => {
    const form = document.getElementById('prediction-form');
    form.nitrogen.value = 90;
    form.phosphorus.value = 42;
    form.potassium.value = 43;
    form.temperature.value = 25.5;
    form.humidity.value = 82;
    form.ph.value = 6.5;
    form.rainfall.value = 230;
    showToast('Sample data filled successfully!');
  };

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-950 serif mb-4">Soil & Environment Analysis</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Enter your soil nutrient values and environmental parameters below. Our ML model will analyze the data and recommend the optimal crop for your conditions.
          </p>
        </div>

        <form id="prediction-form" onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-12 shadow-xl border border-emerald-100">
          {/* Macronutrients Section */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-emerald-900 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center mr-3">
                <i data-lucide="flask-conical" className="w-4 h-4 text-emerald-600"></i>
              </span>
              Soil Macronutrients (N-P-K)
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Nitrogen (N) <span className="text-slate-400 text-xs">kg/ha</span>
                </label>
                <div className="relative">
                  <input 
                    type="number" 
                    name="nitrogen" 
                    required 
                    min="0" 
                    max="140" 
                    step="0.1"
                    className="input-field w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none bg-white/50"
                    placeholder="e.g., 90"
                  />
                  <div className="absolute right-3 top-3 text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded">N</div>
                </div>
                <p className="text-xs text-slate-500">Essential for leaf growth</p>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Phosphorus (P) <span className="text-slate-400 text-xs">kg/ha</span>
                </label>
                <div className="relative">
                  <input 
                    type="number" 
                    name="phosphorus" 
                    required 
                    min="0" 
                    max="145" 
                    step="0.1"
                    className="input-field w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none bg-white/50"
                    placeholder="e.g., 42"
                  />
                  <div className="absolute right-3 top-3 text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded">P</div>
                </div>
                <p className="text-xs text-slate-500">For root development</p>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Potassium (K) <span className="text-slate-400 text-xs">kg/ha</span>
                </label>
                <div className="relative">
                  <input 
                    type="number" 
                    name="potassium" 
                    required 
                    min="0" 
                    max="205" 
                    step="0.1"
                    className="input-field w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none bg-white/50"
                    placeholder="e.g., 43"
                  />
                  <div className="absolute right-3 top-3 text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded">K</div>
                </div>
                <p className="text-xs text-slate-500">Disease resistance</p>
              </div>
            </div>
          </div>

          {/* Environmental Conditions */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-emerald-900 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                <i data-lucide="cloud-sun" className="w-4 h-4 text-blue-600"></i>
              </span>
              Environmental Conditions
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Temperature <span className="text-slate-400 text-xs">°C</span>
                </label>
                <div className="relative">
                  <input 
                    type="number" 
                    name="temperature" 
                    required 
                    min="0" 
                    max="50" 
                    step="0.1"
                    className="input-field w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none bg-white/50"
                    placeholder="e.g., 25.5"
                  />
                  <i data-lucide="thermometer" className="absolute right-3 top-3 w-4 h-4 text-slate-400"></i>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Humidity <span className="text-slate-400 text-xs">%</span>
                </label>
                <div className="relative">
                  <input 
                    type="number" 
                    name="humidity" 
                    required 
                    min="0" 
                    max="100" 
                    step="0.1"
                    className="input-field w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none bg-white/50"
                    placeholder="e.g., 65"
                  />
                  <i data-lucide="droplets" className="absolute right-3 top-3 w-4 h-4 text-slate-400"></i>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Rainfall <span className="text-slate-400 text-xs">mm</span>
                </label>
                <div className="relative">
                  <input 
                    type="number" 
                    name="rainfall" 
                    required 
                    min="0" 
                    max="300" 
                    step="0.1"
                    className="input-field w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none bg-white/50"
                    placeholder="e.g., 120"
                  />
                  <i data-lucide="cloud-rain" className="absolute right-3 top-3 w-4 h-4 text-slate-400"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Soil pH */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-emerald-900 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center mr-3">
                <i data-lucide="test-tube" className="w-4 h-4 text-amber-600"></i>
              </span>
              Soil Properties
            </h3>
            <div className="max-w-md">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Soil pH Level <span className="text-slate-400 text-xs">0-14</span>
                </label>
                <div className="relative">
                  <input 
                    type="number" 
                    name="ph" 
                    required 
                    min="0" 
                    max="14" 
                    step="0.1"
                    className="input-field w-full px-4 py-3 rounded-xl border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none bg-white/50"
                    placeholder="e.g., 6.5"
                  />
                  <div className="absolute right-3 top-3 text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded">pH</div>
                </div>
                <p className="text-xs text-slate-500">Most crops prefer pH 6.0-7.0</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-emerald-100">
            <button 
              type="button" 
              onClick={fillSampleData}
              className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center"
            >
              <i data-lucide="wand-2" className="w-4 h-4 mr-2"></i>
              Fill Sample Data
            </button>
            <button 
              type="submit" 
              disabled={loading}
              className="px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/30 flex items-center disabled:opacity-70"
            >
              {loading ? (
                <>
                  <i data-lucide="loader-2" className="w-5 h-5 mr-2 animate-spin"></i>
                  Analyzing...
                </>
              ) : (
                <>
                  <span>Analyze & Predict</span>
                  <i data-lucide="cpu" className="w-5 h-5 ml-2"></i>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Predictor;