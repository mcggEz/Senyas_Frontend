import React from 'react';

interface SportsActivitiesProps {
  onBack: () => void;
}

const SportsActivities: React.FC<SportsActivitiesProps> = ({ onBack }) => {
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
            <h1 className="text-2xl font-bold text-gray-800">Sports Activities</h1>
            <p className="text-gray-600">Join community sports and fitness programs</p>
          </div>
        </div>
      </div>

      {/* Featured Program */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-6 text-white mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="material-icons">sports_basketball</span>
              <h2 className="text-xl font-bold">Summer Sports League</h2>
            </div>
            <p className="text-green-100">Join our community basketball and volleyball tournaments</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <span className="material-icons text-sm">calendar_today</span>
                <span>Starting June 1, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="material-icons text-sm">location_on</span>
                <span>Community Sports Complex</span>
              </div>
            </div>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors duration-200">
            Register Now
          </button>
        </div>
      </div>

      {/* Sports Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center space-x-3 mb-3">
            <span className="material-icons text-blue-600">sports_basketball</span>
            <h3 className="font-semibold text-gray-800">Team Sports</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Basketball League</li>
            <li>Volleyball Tournament</li>
            <li>Football Club</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center space-x-3 mb-3">
            <span className="material-icons text-purple-600">fitness_center</span>
            <h3 className="font-semibold text-gray-800">Fitness Classes</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Morning Zumba</li>
            <li>Evening Aerobics</li>
            <li>Senior Fitness</li>
          </ul>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="flex items-center space-x-3 mb-3">
            <span className="material-icons text-orange-600">child_care</span>
            <h3 className="font-semibold text-gray-800">Youth Programs</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Summer Sports Camp</li>
            <li>Swimming Classes</li>
            <li>Martial Arts</li>
          </ul>
        </div>
      </div>

      {/* Upcoming Activities */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Upcoming Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-green-500 transition-colors duration-200">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 rounded-lg p-3">
                <span className="material-icons text-blue-600">sports_basketball</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">3x3 Basketball Tournament</h3>
                <p className="text-sm text-gray-600 mt-1">June 5, 2024 • 8:00 AM</p>
                <p className="text-sm text-gray-600 mt-2">Open for ages 15-18. Registration required.</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:border-green-500 transition-colors duration-200">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 rounded-lg p-3">
                <span className="material-icons text-purple-600">sports_volleyball</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Volleyball Clinic</h3>
                <p className="text-sm text-gray-600 mt-1">June 12, 2024 • 9:00 AM</p>
                <p className="text-sm text-gray-600 mt-2">Learn from professional coaches. All skill levels welcome.</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:border-green-500 transition-colors duration-200">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 rounded-lg p-3">
                <span className="material-icons text-green-600">pool</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Swimming Lessons</h3>
                <p className="text-sm text-gray-600 mt-1">June 15, 2024 • 7:00 AM</p>
                <p className="text-sm text-gray-600 mt-2">Beginner-friendly swimming classes for kids.</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:border-green-500 transition-colors duration-200">
            <div className="flex items-start space-x-4">
              <div className="bg-red-100 rounded-lg p-3">
                <span className="material-icons text-red-600">sports_martial_arts</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Taekwondo Classes</h3>
                <p className="text-sm text-gray-600 mt-1">June 20, 2024 • 4:00 PM</p>
                <p className="text-sm text-gray-600 mt-2">Learn self-defense and discipline.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsActivities; 