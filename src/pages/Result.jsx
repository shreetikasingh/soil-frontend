import React, { useEffect } from 'react';
import { cropDatabase } from '../Constants/Cropdata';

const Result = ({ navigateTo, prediction, inputs, showToast }) => {
  // Animate confidence bar on mount
  useEffect(() => {
    if (!prediction || !inputs) {
      navigateTo('predictor');
      return;
    }

    const timer = setTimeout(() => {
      const bar = document.getElementById('confidence-bar');
      if (bar) bar.style.width = `${prediction.confidence}%`;
    }, 300);

    return () => clearTimeout(timer);
  }, [prediction, inputs, navigateTo]);

  if (!prediction || !inputs) return null;

  const downloadReport = () => {
    showToast('Report download started...');
    setTimeout(() => showToast('Report downloaded successfully!'), 1500);
  };

  const params = [
    { label: 'Nitrogen', value: inputs.nitrogen, unit: '', icon: 'n' },
    { label: 'Phosphorus', value: inputs.phosphorus, unit: '', icon: 'p' },
    { label: 'Potassium', value: inputs.potassium, unit: '', icon: 'k' },
    { label: 'Temperature', value: inputs.temperature, unit: '°C', icon: 'thermometer' },
    { label: 'Humidity', value: inputs.humidity, unit: '%', icon: 'droplets' },
    { label: 'pH', value: inputs.ph, unit: '', icon: 'test-tube' },
    { label: 'Rainfall', value: inputs.rainfall, unit: 'mm', icon: 'cloud-rain' }
  ];

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-emerald-50 to-white">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={() => navigateTo('predictor')} 
          className="mb-6 flex items-center text-slate-600 hover:text-emerald-700 font-medium transition"
        >
          <i data-lucide="arrow-left" className="w-4 h-4 mr-2"></i>
          Back to Analysis
        </button>

        <div className="glass rounded-3xl p-8 md:p-12 shadow-xl border border-emerald-100 mb-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
              <i data-lucide="sparkles" className="w-8 h-8 text-emerald-600"></i>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 serif mb-2">Recommended Crop</h2>
            <p className="text-slate-600">Based on your soil and environmental parameters</p>
          </div>

          {/* Main Recommendation */}
          <div className="bg-linear-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 md:p-12 text-black mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="text-emerald-100 text-sm font-semibold uppercase tracking-wider mb-2">Optimal Choice</div>
                <h3 className="text-4xl md:text-6xl font-bold serif mb-4">{prediction.mainCrop}</h3>
                <p className="text-emerald-50 text-lg mb-6 max-w-lg">{prediction.description}</p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Confidence Score</span>
                  </div>
                  <div className="text-3xl font-bold">{prediction.confidence}%</div>
                </div>

                <div className="w-full bg-white/20 rounded-full h-3 mb-2">
                  <div 
                    id="confidence-bar" 
                    className="progress-bar bg-white h-3 rounded-full" 
                    style={{width: '0%'}}
                  ></div>
                </div>
              </div>

              <div className="w-full md:w-auto flex justify-center">
                <div className="w-48 h-48 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center border-2 border-white/30">
                  <i 
                    data-lucide={cropDatabase[prediction.mainCrop]?.icon || 'leaf'} 
                    className="w-24 h-24 text-white"
                  ></i>
                </div>
              </div>
            </div>
          </div>

          {/* Input Summary */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-4">Input Parameters</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {params.map((p, index) => (
                <div key={index} className="text-center p-3 rounded-xl bg-white border border-slate-200">
                  <div className="text-xs text-slate-500 mb-1">{p.label}</div>
                  <div className="font-bold text-emerald-700 text-lg">{p.value}{p.unit}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button 
              onClick={() => navigateTo('predictor')} 
              className="px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-700 rounded-full font-semibold hover:bg-emerald-50 transition flex items-center justify-center"
            >
              <i data-lucide="refresh-cw" className="w-4 h-4 mr-2"></i>
              Try Different Parameters
            </button>
            <button 
              onClick={downloadReport}
              className="px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/30 flex items-center justify-center"
            >
              <i data-lucide="download" className="w-4 h-4 mr-2"></i>
              Download Report (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
