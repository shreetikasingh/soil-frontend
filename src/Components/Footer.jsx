import React from 'react';

const Footer = ({ navigateTo }) => {
  return (
    <footer className="bg-emerald-900 text-emerald-100 py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <i data-lucide="sprout" className="w-6 h-6 text-emerald-400"></i>
              <span className="text-xl font-bold serif">TerraGrow</span>
            </div>
            <p className="text-emerald-200/80 max-w-sm">
              Intelligent crop recommendation system powered by machine learning. Making agriculture smarter, one prediction at a time.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-white transition">Home</button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-white transition">About</button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <i data-lucide="mail" className="w-4 h-4 mr-2"></i> support@terragrow.ai
              </li>
              <li className="flex items-center">
                <i data-lucide="phone" className="w-4 h-4 mr-2"></i> +977 9822498284
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-emerald-400">&copy; 2026 TerraGrow. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-emerald-400 hover:text-white transition">
              <i data-lucide="twitter" className="w-5 h-5"></i>
            </a>
            <a href="#" className="text-emerald-400 hover:text-white transition">
              <i data-lucide="linkedin" className="w-5 h-5"></i>
            </a>
            <a href="#" className="text-emerald-400 hover:text-white transition">
              <i data-lucide="github" className="w-5 h-5"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;