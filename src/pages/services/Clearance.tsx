import React from 'react';

interface ClearanceProps {
  onBack: () => void;
}

const Clearance: React.FC<ClearanceProps> = ({ onBack }) => {
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
            <h1 className="text-2xl font-bold text-gray-800">Barangay Clearance</h1>
            <p className="text-gray-600">Request a barangay clearance certificate</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Requirements Section */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Requirements</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="material-icons text-blue-600 mr-2">check_circle</span>
              <span>Valid government-issued ID</span>
            </li>
            <li className="flex items-start">
              <span className="material-icons text-blue-600 mr-2">check_circle</span>
              <span>Proof of residency</span>
            </li>
            <li className="flex items-start">
              <span className="material-icons text-blue-600 mr-2">check_circle</span>
              <span>Processing fee: ₱50.00</span>
            </li>
            <li className="flex items-start">
              <span className="material-icons text-blue-600 mr-2">check_circle</span>
              <span>No pending cases or violations in the barangay</span>
            </li>
          </ul>
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
            </div>

            {/* Clearance Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Clearance Details</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Purpose of Clearance</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select purpose</option>
                  <option value="employment">Employment</option>
                  <option value="business">Business Permit</option>
                  <option value="police">Police Requirement</option>
                  <option value="travel">Travel Requirement</option>
                  <option value="school">School Requirement</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type of Clearance</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select type</option>
                  <option value="regular">Regular (3-5 working days)</option>
                  <option value="express">Express (1-2 working days)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Any additional information or special requests"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Document Upload */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Required Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <span className="material-icons text-gray-400 text-4xl mb-2">upload_file</span>
                <p className="text-sm text-gray-600">Upload Valid ID</p>
                <input type="file" className="hidden" />
                <button type="button" className="mt-2 text-blue-600 text-sm hover:text-blue-700">Choose File</button>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <span className="material-icons text-gray-400 text-4xl mb-2">upload_file</span>
                <p className="text-sm text-gray-600">Upload Proof of Residency</p>
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

export default Clearance; 