import React from 'react';

interface JobOpportunitiesProps {
  onBack: () => void;
}

const JobOpportunities: React.FC<JobOpportunitiesProps> = ({ onBack }) => {
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
            <h1 className="text-2xl font-bold text-gray-800">Job Opportunities</h1>
            <p className="text-gray-600">Find employment opportunities in our community</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Featured Job */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="material-icons">work</span>
                <h2 className="text-xl font-bold">Community Job Fair</h2>
              </div>
              <p className="text-indigo-100">Connect with local employers and find your next career opportunity</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <span className="material-icons text-sm">calendar_today</span>
                  <span>March 30, 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="material-icons text-sm">location_on</span>
                  <span>Barangay Multi-purpose Hall</span>
                </div>
              </div>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-2 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
              Register Now
            </button>
          </div>
        </div>

        {/* Job Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
            <span className="material-icons text-blue-600">business</span>
            <span className="font-medium text-gray-800">Office Work</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
            <span className="material-icons text-green-600">construction</span>
            <span className="font-medium text-gray-800">Skilled Labor</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-200">
            <span className="material-icons text-yellow-600">store</span>
            <span className="font-medium text-gray-800">Retail</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
            <span className="material-icons text-purple-600">school</span>
            <span className="font-medium text-gray-800">Education</span>
          </button>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Latest Job Openings</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="text-sm border border-gray-300 rounded-lg px-2 py-1">
                <option value="recent">Most Recent</option>
                <option value="salary">Salary</option>
                <option value="company">Company</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">Administrative Assistant</h3>
                  <p className="text-blue-600 text-sm">ABC Company</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">Full-time</span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="material-icons text-gray-400">location_on</span>
                  <span>Main Street, Barangay Center</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="material-icons text-gray-400">payments</span>
                  <span>₱18,000 - ₱22,000 monthly</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="material-icons text-gray-400">work</span>
                  <span>1-2 years experience</span>
                </div>
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Apply Now
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">Construction Worker</h3>
                  <p className="text-blue-600 text-sm">XYZ Construction</p>
                </div>
                <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">Contract</span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="material-icons text-gray-400">location_on</span>
                  <span>Construction Site, East District</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="material-icons text-gray-400">payments</span>
                  <span>₱500 - ₱800 daily</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="material-icons text-gray-400">work</span>
                  <span>No experience required</span>
                </div>
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Apply Now
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">Store Clerk</h3>
                  <p className="text-blue-600 text-sm">Local Supermarket</p>
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full">Part-time</span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="material-icons text-gray-400">location_on</span>
                  <span>Market Area, West District</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="material-icons text-gray-400">payments</span>
                  <span>₱12,000 - ₱15,000 monthly</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="material-icons text-gray-400">work</span>
                  <span>Entry level</span>
                </div>
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Apply Now
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">Daycare Teacher</h3>
                  <p className="text-blue-600 text-sm">Community Daycare Center</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">Full-time</span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="material-icons text-gray-400">location_on</span>
                  <span>Daycare Center, North District</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="material-icons text-gray-400">payments</span>
                  <span>₱20,000 - ₱25,000 monthly</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="material-icons text-gray-400">work</span>
                  <span>2+ years experience</span>
                </div>
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Job Application Form */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Job Application Form</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-800">Personal Information</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
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

              {/* Job Details */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-800">Job Details</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Position Applied For</label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select position</option>
                    <option value="admin">Administrative Assistant</option>
                    <option value="construction">Construction Worker</option>
                    <option value="clerk">Store Clerk</option>
                    <option value="teacher">Daycare Teacher</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expected Salary</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter expected salary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Available Start Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Employment Type</label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Experience and Education */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-800">Experience and Education</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work Experience</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Describe your work experience"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Educational Background</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Enter your educational background"
                ></textarea>
              </div>
            </div>

            {/* Documents */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-800">Required Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <span className="material-icons text-gray-400 text-4xl mb-2">upload_file</span>
                  <p className="text-sm text-gray-600">Resume/CV</p>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  <button type="button" className="mt-2 text-blue-600 text-sm hover:text-blue-700">Upload File</button>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <span className="material-icons text-gray-400 text-4xl mb-2">upload_file</span>
                  <p className="text-sm text-gray-600">Government ID</p>
                  <input type="file" className="hidden" accept="image/*,.pdf" />
                  <button type="button" className="mt-2 text-blue-600 text-sm hover:text-blue-700">Upload File</button>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <span className="material-icons text-gray-400 text-4xl mb-2">upload_file</span>
                  <p className="text-sm text-gray-600">Other Documents</p>
                  <input type="file" className="hidden" multiple />
                  <button type="button" className="mt-2 text-blue-600 text-sm hover:text-blue-700">Upload Files</button>
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
    </div>
  );
};

export default JobOpportunities; 