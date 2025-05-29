import React from 'react';

interface VaccinationScheduleProps {
  onBack: () => void;
}

const VaccinationSchedule: React.FC<VaccinationScheduleProps> = ({ onBack }) => {
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
            <h1 className="text-2xl font-bold text-gray-800">Vaccination Schedule</h1>
            <p className="text-gray-600">View and schedule your vaccination appointments</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Available Vaccines Section */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Available Vaccines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">vaccines</span>
                <h3 className="font-semibold">COVID-19 Vaccine</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">Available doses: Pfizer, Moderna, Sinovac</p>
              <p className="text-sm text-gray-600">Next schedule: Daily</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">vaccines</span>
                <h3 className="font-semibold">Flu Vaccine</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">Seasonal flu vaccination</p>
              <p className="text-sm text-gray-600">Next schedule: Every Wednesday</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">vaccines</span>
                <h3 className="font-semibold">Child Immunization</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">Regular childhood vaccines</p>
              <p className="text-sm text-gray-600">Next schedule: Every Monday</p>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your contact number"
                />
              </div>
            </div>

            {/* Vaccination Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Vaccination Details</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vaccine Type</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select vaccine type</option>
                  <option value="covid">COVID-19 Vaccine</option>
                  <option value="flu">Flu Vaccine</option>
                  <option value="child">Child Immunization</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (1:00 PM - 5:00 PM)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Medical History */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Medical History</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Do you have any allergies?</label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="radio" name="allergies" id="allergies-yes" />
                    <label htmlFor="allergies-yes">Yes</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" name="allergies" id="allergies-no" />
                    <label htmlFor="allergies-no">No</label>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Previous Vaccinations</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="List any previous vaccinations and dates"
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
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Schedule Vaccination
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VaccinationSchedule; 