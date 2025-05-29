import React from 'react';

interface EmergencyHotlinesProps {
  onBack: () => void;
}

const EmergencyHotlines: React.FC<EmergencyHotlinesProps> = ({ onBack }) => {
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
            <h1 className="text-2xl font-bold text-gray-800">Emergency Hotlines</h1>
            <p className="text-gray-600">Quick access to emergency contact numbers and services</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Emergency Numbers */}
        <div className="bg-red-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Emergency Contact Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-red-600">local_police</span>
                <h3 className="font-semibold">Police Station</h3>
              </div>
              <p className="text-sm text-gray-600">24/7 Emergency Response</p>
              <a href="tel:911" className="text-lg font-bold text-red-600 mt-2 flex items-center">
                <span className="material-icons mr-1">phone</span>
                911
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-red-600">local_fire_department</span>
                <h3 className="font-semibold">Fire Station</h3>
              </div>
              <p className="text-sm text-gray-600">Fire Emergency</p>
              <a href="tel:117" className="text-lg font-bold text-red-600 mt-2 flex items-center">
                <span className="material-icons mr-1">phone</span>
                117
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-red-600">emergency</span>
                <h3 className="font-semibold">Ambulance</h3>
              </div>
              <p className="text-sm text-gray-600">Medical Emergency</p>
              <a href="tel:117" className="text-lg font-bold text-red-600 mt-2 flex items-center">
                <span className="material-icons mr-1">phone</span>
                117
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-red-600">health_and_safety</span>
                <h3 className="font-semibold">Health Center</h3>
              </div>
              <p className="text-sm text-gray-600">Medical Assistance</p>
              <a href="tel:+639123456789" className="text-lg font-bold text-red-600 mt-2 flex items-center">
                <span className="material-icons mr-1">phone</span>
                (0912) 345-6789
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-red-600">flood</span>
                <h3 className="font-semibold">Disaster Response</h3>
              </div>
              <p className="text-sm text-gray-600">Natural Disasters</p>
              <a href="tel:+639123456789" className="text-lg font-bold text-red-600 mt-2 flex items-center">
                <span className="material-icons mr-1">phone</span>
                (0912) 345-6789
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-red-600">security</span>
                <h3 className="font-semibold">Barangay Patrol</h3>
              </div>
              <p className="text-sm text-gray-600">Community Security</p>
              <a href="tel:+639123456789" className="text-lg font-bold text-red-600 mt-2 flex items-center">
                <span className="material-icons mr-1">phone</span>
                (0912) 345-6789
              </a>
            </div>
          </div>
        </div>

        {/* Emergency Report Form */}
        <form className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-800">Report an Emergency</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Reporter Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Reporter Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter incident location"
                />
              </div>
            </div>

            {/* Emergency Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Emergency Details</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type of Emergency</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select type</option>
                  <option value="medical">Medical Emergency</option>
                  <option value="fire">Fire</option>
                  <option value="crime">Crime</option>
                  <option value="accident">Accident</option>
                  <option value="disaster">Natural Disaster</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Describe the emergency situation"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of People Involved</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter number of people"
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Additional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Photos/Videos</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <span className="material-icons text-gray-400 text-4xl mb-2">upload_file</span>
                  <p className="text-sm text-gray-600">Upload photos or videos</p>
                  <input type="file" className="hidden" multiple accept="image/*,video/*" />
                  <button type="button" className="mt-2 text-blue-600 text-sm hover:text-blue-700">Choose Files</button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={5}
                  placeholder="Any additional information that might be helpful"
                ></textarea>
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
              className="px-6 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmergencyHotlines; 