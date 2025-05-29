import React from 'react';

interface SportsProgramsProps {
  onBack: () => void;
}

const SportsPrograms: React.FC<SportsProgramsProps> = ({ onBack }) => {
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
            <h1 className="text-2xl font-bold text-gray-800">Sports Programs</h1>
            <p className="text-gray-600">Join our community sports activities and tournaments</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Featured Program */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="material-icons">sports_basketball</span>
                <h2 className="text-xl font-bold">Summer Sports Festival</h2>
              </div>
              <p className="text-green-100">Multi-sport tournament and activities for all ages</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <span className="material-icons text-sm">calendar_today</span>
                  <span>April - May 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="material-icons text-sm">location_on</span>
                  <span>Barangay Sports Complex</span>
                </div>
              </div>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-2 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors duration-200">
              Join Now
            </button>
          </div>
        </div>

        {/* Sports Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200">
            <span className="material-icons text-orange-600">sports_basketball</span>
            <span className="font-medium text-gray-800">Basketball</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
            <span className="material-icons text-blue-600">sports_volleyball</span>
            <span className="font-medium text-gray-800">Volleyball</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
            <span className="material-icons text-green-600">sports_soccer</span>
            <span className="font-medium text-gray-800">Football</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
            <span className="material-icons text-purple-600">fitness_center</span>
            <span className="font-medium text-gray-800">Fitness</span>
          </button>
        </div>

        {/* Active Programs */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Active Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img
                  src="/images/basketball-league.jpg"
                  alt="Basketball League"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">Basketball League</h3>
                <p className="text-sm text-gray-600 mt-1">Inter-barangay basketball tournament</p>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="material-icons text-gray-400 text-sm">group</span>
                    <span className="text-sm text-gray-600">Ages 16-35</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="material-icons text-gray-400 text-sm">schedule</span>
                    <span className="text-sm text-gray-600">Weekends, 2 PM - 6 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="material-icons text-gray-400 text-sm">location_on</span>
                    <span className="text-sm text-gray-600">Main Basketball Court</span>
                  </div>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Register Team
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img
                  src="/images/volleyball-clinic.jpg"
                  alt="Volleyball Clinic"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">Volleyball Clinic</h3>
                <p className="text-sm text-gray-600 mt-1">Learn and improve your volleyball skills</p>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="material-icons text-gray-400 text-sm">group</span>
                    <span className="text-sm text-gray-600">Ages 12-18</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="material-icons text-gray-400 text-sm">schedule</span>
                    <span className="text-sm text-gray-600">Mon/Wed/Fri, 4 PM - 6 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="material-icons text-gray-400 text-sm">location_on</span>
                    <span className="text-sm text-gray-600">Volleyball Court</span>
                  </div>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Join Clinic
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img
                  src="/images/fitness-class.jpg"
                  alt="Fitness Class"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">Community Fitness</h3>
                <p className="text-sm text-gray-600 mt-1">Group exercise and fitness training</p>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="material-icons text-gray-400 text-sm">group</span>
                    <span className="text-sm text-gray-600">All ages welcome</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="material-icons text-gray-400 text-sm">schedule</span>
                    <span className="text-sm text-gray-600">Daily, 6 AM - 7 AM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="material-icons text-gray-400 text-sm">location_on</span>
                    <span className="text-sm text-gray-600">Community Park</span>
                  </div>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Join Class
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Program Schedule */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Time</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Monday</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Tuesday</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Wednesday</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Thursday</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Friday</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Saturday</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Sunday</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-600">6 AM - 7 AM</td>
                  <td className="px-4 py-2 text-sm text-green-600">Fitness</td>
                  <td className="px-4 py-2 text-sm text-green-600">Fitness</td>
                  <td className="px-4 py-2 text-sm text-green-600">Fitness</td>
                  <td className="px-4 py-2 text-sm text-green-600">Fitness</td>
                  <td className="px-4 py-2 text-sm text-green-600">Fitness</td>
                  <td className="px-4 py-2 text-sm text-green-600">Fitness</td>
                  <td className="px-4 py-2 text-sm text-green-600">Fitness</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-600">4 PM - 6 PM</td>
                  <td className="px-4 py-2 text-sm text-blue-600">Volleyball</td>
                  <td className="px-4 py-2 text-sm text-orange-600">Basketball</td>
                  <td className="px-4 py-2 text-sm text-blue-600">Volleyball</td>
                  <td className="px-4 py-2 text-sm text-orange-600">Basketball</td>
                  <td className="px-4 py-2 text-sm text-blue-600">Volleyball</td>
                  <td className="px-4 py-2 text-sm text-gray-400">-</td>
                  <td className="px-4 py-2 text-sm text-gray-400">-</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-600">7 PM - 9 PM</td>
                  <td className="px-4 py-2 text-sm text-orange-600">Basketball</td>
                  <td className="px-4 py-2 text-sm text-blue-600">Volleyball</td>
                  <td className="px-4 py-2 text-sm text-orange-600">Basketball</td>
                  <td className="px-4 py-2 text-sm text-blue-600">Volleyball</td>
                  <td className="px-4 py-2 text-sm text-orange-600">Basketball</td>
                  <td className="px-4 py-2 text-sm text-gray-400">-</td>
                  <td className="px-4 py-2 text-sm text-gray-400">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Program Registration</h2>
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Program Details */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Program</label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Choose a program</option>
                    <option value="basketball">Basketball League</option>
                    <option value="volleyball">Volleyball Clinic</option>
                    <option value="fitness">Community Fitness</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Medical Conditions</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    placeholder="List any medical conditions or allergies"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="space-y-4">
              <h3 className="text-md font-medium text-gray-800">Emergency Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter emergency contact name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter emergency contact number"
                  />
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
    </div>
  );
};

export default SportsPrograms; 