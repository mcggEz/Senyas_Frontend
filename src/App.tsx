import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'

const SplashScreen = () => {
  return (
    <div className="fixed inset-0  bg-[#14274e] z-[9999] flex items-center justify-center">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-4 relative">
          <div className="absolute inset-0 border-4 border-white rounded-full animate-ping"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/splash.png" alt="SIGLA Logo" className="w-20 h-20  mb-3  border-blue-200" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Barangay Info Hub</h2>
        <p className="text-blue-100">Your Digital Assistant</p>
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;