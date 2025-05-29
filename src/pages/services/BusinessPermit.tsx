import React from 'react';

interface BusinessPermitProps {
  onBack: () => void;
}

const BusinessPermit: React.FC<BusinessPermitProps> = ({ onBack }) => {
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
            <h1 className="text-2xl font-bold text-gray-800">Business Permit Application</h1>
            <p className="text-gray-600">Apply for or renew your barangay business permit</p>
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
              <span>DTI Business Registration or SEC Registration</span>
            </li>
            <li className="flex items-start">
              <span className="material-icons text-blue-600 mr-2">check_circle</span>
              <span>Valid government-issued ID of the business owner</span>
            </li>
            <li className="flex items-start">
              <span className="material-icons text-blue-600 mr-2">check_circle</span>
              <span>Proof of business location (lease contract or proof of ownership)</span>
            </li>
            <li className="flex items-start">
              <span className="material-icons text-blue-600 mr-2">check_circle</span>
              <span>Community tax certificate (CEDULA)</span>
            </li>
            <li className="flex items-start">
              <span className="material-icons text-blue-600 mr-2">check_circle</span>
              <span>Processing fee (varies based on business type)</span>
            </li>
          </ul>
        </div>

        {/* Application Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Business Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Business Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter business name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select business type</option>
                  <option value="retail">Retail Store</option>
                  <option value="food">Food/Restaurant</option>
                  <option value="service">Service Provider</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Address</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter business address"
                />
              </div>
            </div>

            {/* Owner Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Owner Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Owner's Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter owner's name"
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter email address"
                />
              </div>
            </div>
          </div>

          {/* Business Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Business Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Employees</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter number of employees"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Area (sqm)</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter business area"
                />
              </div>
            </div>
          </div>

          {/* Document Upload */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Required Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <span className="material-icons text-gray-400 text-4xl mb-2">upload_file</span>
                <p className="text-sm text-gray-600">DTI/SEC Registration</p>
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
                <p className="text-sm text-gray-600">Proof of Location</p>
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

export default BusinessPermit; 