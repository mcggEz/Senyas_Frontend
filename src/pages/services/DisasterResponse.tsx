import React from 'react';

interface DisasterResponseProps {
  onBack: () => void;
}

const DisasterResponse: React.FC<DisasterResponseProps> = ({ onBack }) => {
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
            <h1 className="text-2xl font-bold text-gray-800">Disaster Response</h1>
            <p className="text-gray-600">Emergency protocols and disaster preparedness</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Alert Status */}
        <div className="bg-green-50 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Current Alert Status</h2>
              <p className="text-gray-600">Last updated: {new Date().toLocaleString()}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons text-green-600">check_circle</span>
              <span className="font-medium text-green-600">Normal</span>
            </div>
          </div>
        </div>

        {/* Emergency Protocols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="material-icons text-blue-600">flood</span>
              <h3 className="text-lg font-semibold text-gray-800">Flood Response</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="material-icons text-gray-400 text-sm">chevron_right</span>
                <span>Move to higher ground immediately</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="material-icons text-gray-400 text-sm">chevron_right</span>
                <span>Avoid walking through flood waters</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="material-icons text-gray-400 text-sm">chevron_right</span>
                <span>Listen to evacuation orders</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="material-icons text-gray-400 text-sm">chevron_right</span>
                <span>Keep emergency kit ready</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="material-icons text-blue-600">storm</span>
              <h3 className="text-lg font-semibold text-gray-800">Typhoon Protocol</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="material-icons text-gray-400 text-sm">chevron_right</span>
                <span>Secure loose objects outside</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="material-icons text-gray-400 text-sm">chevron_right</span>
                <span>Stay indoors during strong winds</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="material-icons text-gray-400 text-sm">chevron_right</span>
                <span>Monitor weather updates</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="material-icons text-gray-400 text-sm">chevron_right</span>
                <span>Prepare emergency supplies</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="material-icons text-blue-600">public</span>
              <h3 className="text-lg font-semibold text-gray-800">Earthquake Safety</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="material-icons text-gray-400 text-sm">chevron_right</span>
                <span>Drop, Cover, and Hold On</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="material-icons text-gray-400 text-sm">chevron_right</span>
                <span>Stay away from windows</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="material-icons text-gray-400 text-sm">chevron_right</span>
                <span>Check for injuries and damage</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="material-icons text-gray-400 text-sm">chevron_right</span>
                <span>Be prepared for aftershocks</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Evacuation Centers */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Evacuation Centers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">Barangay Covered Court</h3>
              <p className="text-sm text-gray-600 mt-1">Main Street, Near Town Hall</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="material-icons text-green-600 text-sm">check_circle</span>
                <span className="text-sm text-green-600">Available</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">Community Center</h3>
              <p className="text-sm text-gray-600 mt-1">East District, Behind Church</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="material-icons text-green-600 text-sm">check_circle</span>
                <span className="text-sm text-green-600">Available</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">Public School</h3>
              <p className="text-sm text-gray-600 mt-1">West District, School Zone</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="material-icons text-green-600 text-sm">check_circle</span>
                <span className="text-sm text-green-600">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Kit Checklist */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Emergency Kit Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Basic Supplies</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-gray-600">Water (1 gallon per person)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-gray-600">Non-perishable food</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-gray-600">First aid kit</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-gray-600">Flashlight and batteries</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Documents</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-gray-600">ID and important papers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-gray-600">Emergency contacts list</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-gray-600">Insurance documents</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-gray-600">Medical records</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Additional Items</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-gray-600">Change of clothes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-gray-600">Basic toiletries</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-gray-600">Portable radio</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-gray-600">Cash</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="tel:911" className="flex items-center space-x-3 bg-red-50 p-4 rounded-lg">
              <span className="material-icons text-red-600">emergency</span>
              <div>
                <p className="font-medium text-gray-800">Emergency Hotline</p>
                <p className="text-red-600">911</p>
              </div>
            </a>
            <a href="tel:+639123456789" className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
              <span className="material-icons text-blue-600">local_police</span>
              <div>
                <p className="font-medium text-gray-800">Disaster Response Team</p>
                <p className="text-blue-600">(0912) 345-6789</p>
              </div>
            </a>
            <a href="tel:+639123456789" className="flex items-center space-x-3 bg-green-50 p-4 rounded-lg">
              <span className="material-icons text-green-600">medical_services</span>
              <div>
                <p className="font-medium text-gray-800">Medical Response</p>
                <p className="text-green-600">(0912) 345-6789</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisasterResponse; 