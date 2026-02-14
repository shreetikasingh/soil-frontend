import React from 'react';

const Toast = ({ show, message }) => {
  if (!show) return null;
  
  return (
    <div className="fixed bottom-4 right-4 bg-emerald-800 text-white px-6 py-3 rounded-xl shadow-2xl z-50 flex items-center animate-slide-in">
      <i data-lucide="check-circle" className="w-5 h-5 mr-3"></i>
      <span>{message}</span>
    </div>
  );
};

export default Toast;