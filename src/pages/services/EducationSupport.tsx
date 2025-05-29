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
            <span className="material-icons text-gray-600">arrow_back</span>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Education Support Programs</h1>
            <p className="text-gray-600">Access educational assistance and scholarship opportunities</p>
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
                <span className="material-icons text-blue-600">school</span>
                <h3 className="font-semibold">College Scholarship</h3>
              </div>
              <p className="text-sm text-gray-600">Full scholarship for college students</p>
              <p className="text-sm text-blue-600 mt-2">Up to ₱30,000 per semester</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">auto_stories</span>
                <h3 className="font-semibold">High School Support</h3>
              </div>
              <p className="text-sm text-gray-600">Assistance for high school students</p>
              <p className="text-sm text-blue-600 mt-2">School supplies and allowance</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">computer</span>
                <h3 className="font-semibold">Technical-Vocational</h3>
              </div>
              <p className="text-sm text-gray-600">Support for TESDA courses</p>
              <p className="text-sm text-blue-600 mt-2">Full course coverage</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">menu_book</span>
                <h3 className="font-semibold">Educational Materials</h3>
              </div>
              <p className="text-sm text-gray-600">Free textbooks and school supplies</p>
              <p className="text-sm text-blue-600 mt-2">Per academic year</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">directions_bus</span>
                <h3 className="font-semibold">Transportation Allowance</h3>
              </div>
              <p className="text-sm text-gray-600">Monthly transportation support</p>
              <p className="text-sm text-blue-600 mt-2">₱1,000 per month</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">laptop</span>
                <h3 className="font-semibold">Digital Learning</h3>
              </div>
              <p className="text-sm text-gray-600">Support for online education</p>
              <p className="text-sm text-blue-600 mt-2">Device and internet support</p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Student Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter student's full name"
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
                <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter school name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Grade Level/Year Level</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter grade/year level"
                />
              </div>
            </div>

            {/* Program Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Program Details</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type of Support</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select program</option>
                  <option value="college">College Scholarship</option>
                  <option value="highschool">High School Support</option>
                  <option value="tesda">Technical-Vocational</option>
                  <option value="materials">Educational Materials</option>
                  <option value="transport">Transportation Allowance</option>
                  <option value="digital">Digital Learning Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Academic Performance</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter GWA/GPA"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Family Income</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter monthly family income"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter parent/guardian name"
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Complete Address</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter complete address"
                />
              </div>
            </div>
          </div>

          {/* Required Documents */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Required Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <span className="material-icons text-gray-400 text-4xl mb-2">upload_file</span>
                <p className="text-sm text-gray-600">Report Card/TOR</p>
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
                <p className="text-sm text-gray-600">School ID/Enrollment Form</p>
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

export default EducationSupport; 