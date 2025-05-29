import React from 'react';

interface HealthCenterProps {
  onBack: () => void;
}

const HealthCenter: React.FC<HealthCenterProps> = ({ onBack }) => {
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
            <h1 className="text-2xl font-bold text-gray-800">Health Center Services</h1>
            <p className="text-gray-600">Access medical services and schedule consultations</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Services Overview */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Available Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">medical_services</span>
                <h3 className="font-semibold">General Consultation</h3>
              </div>
              <p className="text-sm text-gray-600">Basic health check-ups and medical consultations</p>
              <p className="text-sm text-blue-600 mt-2">Available: Mon-Fri, 8AM-5PM</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">pregnant_woman</span>
                <h3 className="font-semibold">Maternal Care</h3>
              </div>
              <p className="text-sm text-gray-600">Pre and post-natal care services</p>
              <p className="text-sm text-blue-600 mt-2">Available: Mon-Fri, 8AM-3PM</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">child_care</span>
                <h3 className="font-semibold">Child Health</h3>
              </div>
              <p className="text-sm text-gray-600">Pediatric consultations and immunizations</p>
              <p className="text-sm text-blue-600 mt-2">Available: Mon-Fri, 8AM-5PM</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">medication</span>
                <h3 className="font-semibold">Pharmacy</h3>
              </div>
              <p className="text-sm text-gray-600">Free and discounted medicines</p>
              <p className="text-sm text-blue-600 mt-2">Available: Mon-Sat, 8AM-5PM</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">science</span>
                <h3 className="font-semibold">Laboratory</h3>
              </div>
              <p className="text-sm text-gray-600">Basic laboratory tests and services</p>
              <p className="text-sm text-blue-600 mt-2">Available: Mon-Fri, 8AM-3PM</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-blue-600">elderly</span>
                <h3 className="font-semibold">Senior Care</h3>
              </div>
              <p className="text-sm text-gray-600">Specialized care for elderly residents</p>
              <p className="text-sm text-blue-600 mt-2">Available: Tue & Thu, 8AM-3PM</p>
            </div>
          </div>
        </div>

        {/* Consultation Booking Form */}
        <form className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-800">Schedule a Consultation</h2>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your age"
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

            {/* Appointment Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Appointment Details</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select service</option>
                  <option value="general">General Consultation</option>
                  <option value="maternal">Maternal Care</option>
                  <option value="child">Child Health</option>
                  <option value="senior">Senior Care</option>
                  <option value="laboratory">Laboratory Services</option>
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
                  <option value="">Select time slot</option>
                  <option value="8am">8:00 AM - 9:00 AM</option>
                  <option value="9am">9:00 AM - 10:00 AM</option>
                  <option value="10am">10:00 AM - 11:00 AM</option>
                  <option value="11am">11:00 AM - 12:00 PM</option>
                  <option value="1pm">1:00 PM - 2:00 PM</option>
                  <option value="2pm">2:00 PM - 3:00 PM</option>
                  <option value="3pm">3:00 PM - 4:00 PM</option>
                  <option value="4pm">4:00 PM - 5:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          {/* Reason for Visit */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Reason for Visit</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Symptoms or Concerns</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                placeholder="Describe your symptoms or reasons for consultation"
              ></textarea>
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
              Book Consultation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HealthCenter; 