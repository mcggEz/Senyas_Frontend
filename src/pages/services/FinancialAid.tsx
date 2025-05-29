import React from 'react';

interface FinancialAidProps {
  onBack: () => void;
}

const FinancialAid: React.FC<FinancialAidProps> = ({ onBack }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors duration-200"
          >
            <span className="material-icons text-gray-600">arrow_back</span>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Financial Aid Programs</h1>
            <p className="text-gray-600">Apply for financial assistance and support</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Programs Overview */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Available Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">medical_services</span>
                <h3 className="font-semibold">Medical Assistance</h3>
              </div>
              <p className="text-sm text-gray-600">Financial support for medical expenses</p>
              <p className="text-sm text-blue-600 mt-2">Up to ₱10,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">school</span>
                <h3 className="font-semibold">Educational Aid</h3>
              </div>
              <p className="text-sm text-gray-600">Support for educational expenses</p>
              <p className="text-sm text-blue-600 mt-2">Up to ₱5,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">emergency</span>
                <h3 className="font-semibold">Emergency Relief</h3>
              </div>
              <p className="text-sm text-gray-600">Immediate assistance for emergencies</p>
              <p className="text-sm text-blue-600 mt-2">Case-based assessment</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">business</span>
                <h3 className="font-semibold">Livelihood Support</h3>
              </div>
              <p className="text-sm text-gray-600">Small business and livelihood assistance</p>
              <p className="text-sm text-blue-600 mt-2">Up to ₱15,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">elderly</span>
                <h3 className="font-semibold">Senior Citizen Aid</h3>
              </div>
              <p className="text-sm text-gray-600">Special assistance for elderly residents</p>
              <p className="text-sm text-blue-600 mt-2">Monthly allowance</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">accessible</span>
                <h3 className="font-semibold">PWD Support</h3>
              </div>
              <p className="text-sm text-gray-600">Assistance for persons with disabilities</p>
              <p className="text-sm text-blue-600 mt-2">Various benefits</p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your contact number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your address"
                />
              </div>
            </div>

            {/* Assistance Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Assistance Details</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type of Assistance</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select type</option>
                  <option value="medical">Medical Assistance</option>
                  <option value="education">Educational Aid</option>
                  <option value="emergency">Emergency Relief</option>
                  <option value="livelihood">Livelihood Support</option>
                  <option value="senior">Senior Citizen Aid</option>
                  <option value="pwd">PWD Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount Needed</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter amount needed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Purpose</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Explain the purpose of financial assistance"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Supporting Documents */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Supporting Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <span className="material-icons text-gray-400 text-4xl mb-2">upload_file</span>
                <p className="text-sm text-gray-600">Valid ID</p>
                <input type="file" className="hidden" />
                <button type="button" className="mt-2 text-blue-600 text-sm hover:text-blue-700">Choose File</button>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <span className="material-icons text-gray-400 text-4xl mb-2">upload_file</span>
                <p className="text-sm text-gray-600">Proof of Income</p>
                <input type="file" className="hidden" />
                <button type="button" className="mt-2 text-blue-600 text-sm hover:text-blue-700">Choose File</button>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <span className="material-icons text-gray-400 text-4xl mb-2">upload_file</span>
                <p className="text-sm text-gray-600">Supporting Documents</p>
                <input type="file" className="hidden" />
                <button type="button" className="mt-2 text-blue-600 text-sm hover:text-blue-700">Choose File</button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FinancialAid; 