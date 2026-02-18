import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Toast from './Components/Toast';
import Home from './pages/Home';
import Predictor from './pages/Predictor';
import Result from './pages/Result';
import About from './pages/About';
import Login from './pages/Login';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [predictionResult, setPredictionResult] = useState(null);
  const [formData, setFormData] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '' });

  // Initialize Lucide icons on page change
// Initialize Lucide icons on page change
  /* useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [currentPage]);
 */
  

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrediction = (data, result) => {
    setFormData(data);
    setPredictionResult(result);
    navigateTo('result');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateTo={navigateTo} />;
      case 'predictor':
        return <Predictor navigateTo={navigateTo} onPredict={handlePrediction} showToast={showToast} />;
      case 'result':
        return <Result navigateTo={navigateTo} prediction={predictionResult} inputs={formData} showToast={showToast} />;
      case 'about':
        return <About navigateTo={navigateTo} />;
      case 'Login':
        return <Login navigateTo={navigateTo} showToast={showToast} />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar navigateTo={navigateTo} currentPage={currentPage} />
      <main className="grow pt-16">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
      <Toast show={toast.show} message={toast.message} />
    </div>
  );
};

export default App;