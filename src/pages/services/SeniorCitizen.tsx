import React from 'react';

interface SeniorCitizenProps {
  onBack: () => void;
}

const SeniorCitizen: React.FC<SeniorCitizenProps> = ({ onBack }) => {
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
            <h1 className="text-2xl font-bold text-gray-800">Senior Citizen Services</h1>
            <p className="text-gray-600">Access benefits and programs for senior citizens</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Benefits Overview */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Available Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">medication</span>
                <h3 className="font-semibold">Medicine Discount</h3>
              </div>
              <p className="text-sm text-gray-600">20% discount on medicines</p>
              <p className="text-sm text-blue-600 mt-2">With Senior ID</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">local_hospital</span>
                <h3 className="font-semibold">Medical Services</h3>
              </div>
              <p className="text-sm text-gray-600">Free medical check-ups</p>
              <p className="text-sm text-blue-600 mt-2">Monthly schedule</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">savings</span>
                <h3 className="font-semibold">Monthly Allowance</h3>
              </div>
              <p className="text-sm text-gray-600">Social pension for qualified seniors</p>
              <p className="text-sm text-blue-600 mt-2">₱500 monthly</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">local_activity</span>
                <h3 className="font-semibold">Recreational Activities</h3>
              </div>
              <p className="text-sm text-gray-600">Free fitness and social activities</p>
              <p className="text-sm text-blue-600 mt-2">Weekly programs</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">card_membership</span>
                <h3 className="font-semibold">ID Registration</h3>
              </div>
              <p className="text-sm text-gray-600">Free senior citizen ID processing</p>
              <p className="text-sm text-blue-600 mt-2">One-time registration</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">local_grocery_store</span>
                <h3 className="font-semibold">Grocery Discount</h3>
              </div>
              <p className="text-sm text-gray-600">5% discount on basic commodities</p>
              <p className="text-sm text-blue-600 mt-2">At partner stores</p>
            </div>
          </div>
        </div>

        {/* Registration Form */}
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Place of Birth</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter place of birth"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Civil Status</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="widowed">Widowed</option>
                  <option value="separated">Separated</option>
                </select>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Address</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your current address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter contact number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter emergency contact name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter emergency contact number"
                />
              </div>
            </div>
          </div>

          {/* Health Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Health Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Existing Medical Conditions</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="List any medical conditions"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Maintenance Medicines</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="List any maintenance medicines"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Required Documents */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Required Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <span className="material-icons text-gray-400 text-4xl mb-2">upload_file</span>
                <p className="text-sm text-gray-600">Birth Certificate</p>
                <input type="file" className="hidden" />
                <button type="button" className="mt-2 text-blue-600 text-sm hover:text-blue-700">Choose File</button>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <span className="material-icons text-gray-400 text-4xl mb-2">upload_file</span>
                <p className="text-sm text-gray-600">Valid ID</p>
                <input type="file" className="hidden" />
                <button type="button" className="mt-2 text-blue-600 text-sm hover:text-blue-700">Choose File</button>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <span className="material-icons text-gray-400 text-4xl mb-2">upload_file</span>
                <p className="text-sm text-gray-600">2x2 Photo</p>
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
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SeniorCitizen; 