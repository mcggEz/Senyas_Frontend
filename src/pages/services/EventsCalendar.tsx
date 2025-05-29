import React from 'react';

interface EventsCalendarProps {
  onBack: () => void;
}

const EventsCalendar: React.FC<EventsCalendarProps> = ({ onBack }) => {
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
            <h1 className="text-2xl font-bold text-gray-800">Events Calendar</h1>
            <p className="text-gray-600">Stay updated with community events</p>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="space-y-6">
        {/* Featured Event */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="material-icons">event</span>
                <h2 className="text-xl font-bold">Barangay Fiesta</h2>
              </div>
              <p className="text-blue-100">Join us for our annual community celebration</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <span className="material-icons text-sm">calendar_today</span>
                  <span>May 15, 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="material-icons text-sm">location_on</span>
                  <span>Barangay Plaza</span>
                </div>
              </div>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Monthly Calendar */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">May 2024</h2>
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <span className="material-icons">chevron_left</span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <span className="material-icons">chevron_right</span>
              </button>
            </div>
          </div>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Week Days */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                {day}
              </div>
            ))}
            
            {/* Calendar Days */}
            {Array.from({ length: 31 }, (_, i) => (
              <button
                key={i + 1}
                className="aspect-square rounded-lg hover:bg-gray-50 flex items-center justify-center relative"
              >
                <span className="text-sm">{i + 1}</span>
                {[5, 15, 22].includes(i + 1) && (
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Event Cards */}
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors duration-200">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <span className="material-icons text-blue-600">celebration</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Community Clean-up Drive</h3>
                  <p className="text-sm text-gray-600 mt-1">May 5, 2024 • 7:00 AM</p>
                  <p className="text-sm text-gray-600 mt-2">Join us in keeping our community clean and green</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors duration-200">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-lg p-3">
                  <span className="material-icons text-purple-600">music_note</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Cultural Night</h3>
                  <p className="text-sm text-gray-600 mt-1">May 15, 2024 • 6:00 PM</p>
                  <p className="text-sm text-gray-600 mt-2">Experience local talents and cultural performances</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors duration-200">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-lg p-3">
                  <span className="material-icons text-green-600">park</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Tree Planting Activity</h3>
                  <p className="text-sm text-gray-600 mt-1">May 22, 2024 • 8:00 AM</p>
                  <p className="text-sm text-gray-600 mt-2">Help us grow a greener community</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors duration-200">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 rounded-lg p-3">
                  <span className="material-icons text-yellow-600">sports_soccer</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Youth Sports Festival</h3>
                  <p className="text-sm text-gray-600 mt-1">May 29, 2024 • 9:00 AM</p>
                  <p className="text-sm text-gray-600 mt-2">A day of sports and friendly competition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCalendar; 