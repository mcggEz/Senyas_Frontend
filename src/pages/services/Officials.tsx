import React from 'react';

interface OfficialsProps {
  onBack: () => void;
}

const Officials: React.FC<OfficialsProps> = ({ onBack }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <button
        onClick={onBack}
        className="mb-4 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200 font-medium text-sm"
      >
       
        <span>Back to Dashboard</span>
      </button>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Barangay Officials</h2>
      <p className="text-gray-600">
        This is the placeholder for the Barangay Officials page. 
        You can list the officials and their information here.
      </p>
      {/* You can add more detailed structure here, e.g., a grid or list of officials */}
    </div>
  );
};

export default Officials; 