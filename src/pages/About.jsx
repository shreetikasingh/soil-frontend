import React from 'react';

const About = ({ navigateTo }) => {
  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-950 serif mb-4">About TerraGrow</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Empowering agriculturists, researchers, and students with data-driven crop recommendations.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass rounded-2xl p-8 text-center crop-card border border-emerald-100">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
              <i data-lucide="target" className="w-8 h-8 text-emerald-600"></i>
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-3">Our Mission</h3>
            <p className="text-slate-600">
              To reduce guesswork in agriculture by providing scientific crop recommendations based on soil and environmental analysis.
            </p>
          </div>
          
          <div className="glass rounded-2xl p-8 text-center crop-card border border-emerald-100">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <i data-lucide="users" className="w-8 h-8 text-blue-600"></i>
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-3">Who We Serve</h3>
            <p className="text-slate-600">
              Farmers seeking better yields, researchers analyzing trends, and students learning about agricultural science.
            </p>
          </div>
          
          <div className="glass rounded-2xl p-8 text-center crop-card border border-emerald-100">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <i data-lucide="brain-circuit" className="w-8 h-8 text-amber-600"></i>
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-3">Technology</h3>
            <p className="text-slate-600">
              Machine learning algorithms trained on extensive agricultural datasets to ensure accurate predictions.
            </p>
          </div>
        </div>

        {/* Educational Content */}
        <div className="glass rounded-3xl p-8 md:p-12 shadow-xl border border-emerald-100 mb-8">
          <h3 className="text-2xl font-bold text-emerald-950 mb-8 flex items-center">
            <i data-lucide="book-open" className="w-6 h-6 mr-3 text-emerald-600"></i>
            Understanding Soil Parameters
          </h3>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="parameter-icon w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold text-emerald-700">N</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-emerald-900 mb-2">Nitrogen (N)</h4>
                <p className="text-slate-600 leading-relaxed">
                  Essential for leaf growth and plant vigor. Nitrogen is a key component of chlorophyll and amino acids. Deficiency leads to yellowing leaves (chlorosis) and stunted growth. Common sources include urea, ammonium nitrate, and organic compost.
                </p>
              </div>
            </div>
            
            <div className="border-t border-emerald-100"></div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="parameter-icon w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold text-emerald-700">P</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-emerald-900 mb-2">Phosphorus (P)</h4>
                <p className="text-slate-600 leading-relaxed">
                  Critical for root development, flowering, and fruiting. Phosphorus supports energy transfer within plants through ATP. Deficiency causes dark green or purplish leaf coloration and poor root development. Found in bone meal and superphosphate.
                </p>
              </div>
            </div>
            
            <div className="border-t border-emerald-100"></div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="parameter-icon w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold text-emerald-700">K</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-emerald-900 mb-2">Potassium (K)</h4>
                <p className="text-slate-600 leading-relaxed">
                  Improves disease resistance, drought tolerance, and overall crop quality. Potassium regulates stomatal opening for gas exchange and water retention. Deficiency shows as yellowing along leaf edges and weak stalks. Sources include potash and wood ash.
                </p>
              </div>
            </div>
            
            <div className="border-t border-emerald-100"></div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
                <i data-lucide="test-tube" className="w-8 h-8 text-amber-700"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-emerald-900 mb-2">Soil pH</h4>
                <p className="text-slate-600 leading-relaxed">
                  Measures soil acidity or alkalinity on a scale of 0-14. Most crops prefer a pH between 6.0 and 7.0. pH controls nutrient availability—extreme pH values lock nutrients in forms plants cannot absorb. Lime raises pH, sulfur lowers it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fertilizer Guide */}
        <div className="bg-linear-to-r from-emerald-800 to-teal-900 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <i data-lucide="shovel" className="w-6 h-6 mr-3"></i>
            Fertilizer Management Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <i data-lucide="check-circle-2" className="w-5 h-5 mr-3 text-emerald-300 shrink-0 mt-0.5"></i>
                <span>Conduct soil testing before planting to determine exact nutrient needs</span>
              </li>
              <li className="flex items-start">
                <i data-lucide="check-circle-2" className="w-5 h-5 mr-3 text-emerald-300 shrink-0 mt-0.5"></i>
                <span>Apply nitrogen in split doses to prevent leaching and maximize uptake</span>
              </li>
              <li className="flex items-start">
                <i data-lucide="check-circle-2" className="w-5 h-5 mr-3 text-emerald-300 shrink-0 mt-0.5"></i>
                <span>Maintain proper pH before adding fertilizers—nutrients won't absorb in extreme pH</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i data-lucide="check-circle-2" className="w-5 h-5 mr-3 text-emerald-300 shrink-0 mt-0.5"></i>
                <span>Use organic matter (compost) to improve soil structure and nutrient retention</span>
              </li>
              <li className="flex items-start">
                <i data-lucide="check-circle-2" className="w-5 h-5 mr-3 text-emerald-300 shrink-0 mt-0.5"></i>
                <span>Consider crop rotation to naturally replenish soil nitrogen levels</span>
              </li>
              <li className="flex items-start">
                <i data-lucide="check-circle-2" className="w-5 h-5 mr-3 text-emerald-300 shrink-0 mt-0.5"></i>
                <span>Monitor leaf color and growth patterns for early deficiency detection</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;