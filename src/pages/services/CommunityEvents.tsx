import React from 'react';

interface CommunityEventsProps {
  onBack: () => void;
}

const CommunityEvents: React.FC<CommunityEventsProps> = ({ onBack }) => {
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
            <h1 className="text-2xl font-bold text-gray-800">Community Events</h1>
            <p className="text-gray-600">Upcoming events and activities in our barangay</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Featured Event */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="material-icons">event</span>
                <h2 className="text-xl font-bold">Barangay Fiesta 2024</h2>
              </div>
              <p className="text-blue-100">Join us for our annual community celebration!</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <span className="material-icons text-sm">calendar_today</span>
                  <span>March 15-17, 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="material-icons text-sm">location_on</span>
                  <span>Barangay Plaza</span>
                </div>
              </div>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              Register Now
            </button>
          </div>
        </div>

        {/* Event Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
            <span className="material-icons text-blue-600">celebration</span>
            <span className="font-medium text-gray-800">Cultural</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
            <span className="material-icons text-green-600">sports_basketball</span>
            <span className="font-medium text-gray-800">Sports</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-200">
            <span className="material-icons text-yellow-600">school</span>
            <span className="font-medium text-gray-800">Educational</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
            <span className="material-icons text-purple-600">volunteer_activism</span>
            <span className="font-medium text-gray-800">Community Service</span>
          </button>
        </div>

        {/* Upcoming Events */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img
                  src="/images/basketball-tournament.jpg"
                  alt="Basketball Tournament"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">Summer Basketball League</h3>
                <p className="text-sm text-gray-600 mt-1">Inter-barangay basketball tournament</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <span className="material-icons text-gray-400 text-sm">calendar_today</span>
                    <span className="text-sm text-gray-600">April 1-30, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="material-icons text-gray-400 text-sm">location_on</span>
                    <span className="text-sm text-gray-600">Sports Complex</span>
                  </div>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Join Tournament
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img
                  src="/images/cleanup-drive.jpg"
                  alt="Cleanup Drive"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">Community Cleanup Drive</h3>
                <p className="text-sm text-gray-600 mt-1">Let's make our barangay clean and green</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <span className="material-icons text-gray-400 text-sm">calendar_today</span>
                    <span className="text-sm text-gray-600">March 23, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="material-icons text-gray-400 text-sm">location_on</span>
                    <span className="text-sm text-gray-600">Barangay Hall</span>
                  </div>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Volunteer Now
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img
                  src="/images/youth-workshop.jpg"
                  alt="Youth Workshop"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">Youth Leadership Workshop</h3>
                <p className="text-sm text-gray-600 mt-1">Empowering the next generation</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <span className="material-icons text-gray-400 text-sm">calendar_today</span>
                    <span className="text-sm text-gray-600">April 5, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="material-icons text-gray-400 text-sm">location_on</span>
                    <span className="text-sm text-gray-600">Community Center</span>
                  </div>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Event Calendar */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Event Calendar</h2>
          <div className="grid grid-cols-7 gap-2">
            {/* Calendar Header */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                {day}
              </div>
            ))}
            {/* Calendar Days */}
            {Array.from({ length: 31 }, (_, i) => (
              <div
                key={i}
                className={`text-center py-2 rounded-lg ${
                  i + 1 === 15
                    ? 'bg-blue-600 text-white'
                    : i + 1 === 23 || i + 1 === 5
                    ? 'bg-blue-100 text-blue-600'
                    : 'hover:bg-gray-100'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Event Registration */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Event Registration</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
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
              </div>

              {/* Event Details */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Event</label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Choose an event</option>
                    <option value="fiesta">Barangay Fiesta 2024</option>
                    <option value="basketball">Summer Basketball League</option>
                    <option value="cleanup">Community Cleanup Drive</option>
                    <option value="workshop">Youth Leadership Workshop</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number of Participants</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter number of participants"
                    min="1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    placeholder="Any special requests or requirements"
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
                Register for Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommunityEvents;
