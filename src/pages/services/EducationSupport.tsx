import React from 'react';

interface EducationSupportProps {
  onBack: () => void;
}

const EducationSupport: React.FC<EducationSupportProps> = ({ onBack }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors duration-200"
          >
            <svg 
              className="w-6 h-6 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Education Support</h1>
            <p className="text-gray-600">Access educational assistance and programs</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        <p className="text-gray-600">
          This is the placeholder for the Education Support page. 
          You can add the educational programs and application form here.
        </p>
      </div>
    </div>
  );
};

export default EducationSupport; 