import React from 'react';

interface FirstResponseProps {
  onBack: () => void;
}

const FirstResponse: React.FC<FirstResponseProps> = ({ onBack }) => {
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
            <h1 className="text-2xl font-bold text-gray-800">First Response Guidelines</h1>
            <p className="text-gray-600">Emergency first aid and response procedures</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Quick Actions */}
        <div className="bg-red-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Emergency Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-red-600">medical_services</span>
                <h3 className="font-semibold">CPR Guide</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>1. Check responsiveness</li>
                <li>2. Call for help</li>
                <li>3. Check breathing</li>
                <li>4. Begin chest compressions</li>
                <li>5. Give rescue breaths</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-red-600">healing</span>
                <h3 className="font-semibold">Bleeding Control</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>1. Apply direct pressure</li>
                <li>2. Elevate the injury</li>
                <li>3. Clean the wound</li>
                <li>4. Apply bandage</li>
                <li>5. Seek medical help</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-red-600">local_fire_department</span>
                <h3 className="font-semibold">Burns Treatment</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>1. Cool the burn</li>
                <li>2. Remove jewelry</li>
                <li>3. Cover with gauze</li>
                <li>4. Don't break blisters</li>
                <li>5. Get medical attention</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-red-600">emergency</span>
                <h3 className="font-semibold">Choking Response</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>1. Identify choking signs</li>
                <li>2. Give back blows</li>
                <li>3. Perform Heimlich</li>
                <li>4. Continue until cleared</li>
                <li>5. Call emergency if needed</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-red-600">psychology</span>
                <h3 className="font-semibold">Seizure Care</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>1. Clear the area</li>
                <li>2. Protect from injury</li>
                <li>3. Time the seizure</li>
                <li>4. Don't restrain</li>
                <li>5. Recovery position</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-red-600">medication</span>
                <h3 className="font-semibold">Allergic Reaction</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>1. Identify symptoms</li>
                <li>2. Remove trigger</li>
                <li>3. Use EpiPen if available</li>
                <li>4. Call emergency</li>
                <li>5. Monitor breathing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* First Aid Kit */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Essential First Aid Kit Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Bandages</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Adhesive bandages</li>
                <li>• Gauze pads</li>
                <li>• Elastic bandage</li>
                <li>• Medical tape</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Medications</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pain relievers</li>
                <li>• Antihistamines</li>
                <li>• Antacids</li>
                <li>• Hydrocortisone cream</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Tools</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Scissors</li>
                <li>• Tweezers</li>
                <li>• Safety pins</li>
                <li>• Disposable gloves</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Other Items</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Antiseptic wipes</li>
                <li>• Emergency blanket</li>
                <li>• Instant cold pack</li>
                <li>• First aid manual</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Training */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Emergency Response Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-gray-700">Available Training Programs</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="material-icons text-green-600">check_circle</span>
                  <p className="text-sm text-gray-600">Basic First Aid Certification</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="material-icons text-green-600">check_circle</span>
                  <p className="text-sm text-gray-600">CPR and AED Training</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="material-icons text-green-600">check_circle</span>
                  <p className="text-sm text-gray-600">Emergency Response Workshop</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="material-icons text-green-600">check_circle</span>
                  <p className="text-sm text-gray-600">Disaster Preparedness Course</p>
                </div>
              </div>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Register for Training
              </button>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-gray-700">Training Schedule</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-700">Basic First Aid</p>
                    <p className="text-sm text-gray-600">Every Saturday, 9 AM - 12 PM</p>
                  </div>
                  <span className="text-blue-600 text-sm">Available</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-700">CPR Training</p>
                    <p className="text-sm text-gray-600">Every Sunday, 2 PM - 5 PM</p>
                  </div>
                  <span className="text-blue-600 text-sm">Available</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-700">Emergency Response</p>
                    <p className="text-sm text-gray-600">Monthly, First Monday</p>
                  </div>
                  <span className="text-blue-600 text-sm">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Reminders */}
        <div className="bg-yellow-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Important Reminders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-yellow-600">warning</span>
                <h3 className="font-semibold">When to Call Emergency</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Unconsciousness or altered mental state</li>
                <li>• Difficulty breathing or chest pain</li>
                <li>• Severe bleeding or head injury</li>
                <li>• Signs of stroke or heart attack</li>
                <li>• Severe allergic reactions</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <span className="material-icons text-yellow-600">info</span>
                <h3 className="font-semibold">General Guidelines</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Stay calm and assess the situation</li>
                <li>• Ensure your own safety first</li>
                <li>• Call for help before providing aid</li>
                <li>• Only move victims if necessary</li>
                <li>• Document all actions taken</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstResponse; 