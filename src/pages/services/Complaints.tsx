import React from 'react';

interface ComplaintsProps {
  onBack: () => void;
}

const Complaints: React.FC<ComplaintsProps> = ({ onBack }) => {
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
            <h1 className="text-2xl font-bold text-gray-800">File a Complaint</h1>
            <p className="text-gray-600">Submit your concerns to the barangay</p>
          </div>
        </div>
      </div>

      {/* Complaint Form */}
      <form className="space-y-6">
        {/* Complaint Details */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Complaint Details</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select category</option>
                <option value="noise">Noise Disturbance</option>
                <option value="sanitation">Sanitation Issue</option>
                <option value="safety">Safety Concern</option>
                <option value="public">Public Nuisance</option>
                <option value="business">Business Violation</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brief description of the complaint"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Detailed Description</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Provide detailed information about your complaint..."
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location of Incident</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter the location where this occurred"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date and Time of Incident</label>
              <input
                type="datetime-local"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Complainant Information */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Your Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
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
                placeholder="Enter your email address"
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
        </div>

        {/* Evidence Upload */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Supporting Evidence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <span className="material-icons text-gray-400 text-4xl mb-2">photo_camera</span>
              <p className="text-sm text-gray-600">Photos/Videos</p>
              <input type="file" className="hidden" multiple accept="image/*,video/*" />
              <button type="button" className="mt-2 text-blue-600 text-sm hover:text-blue-700">Upload Media</button>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <span className="material-icons text-gray-400 text-4xl mb-2">upload_file</span>
              <p className="text-sm text-gray-600">Other Documents</p>
              <input type="file" className="hidden" multiple accept=".pdf,.doc,.docx" />
              <button type="button" className="mt-2 text-blue-600 text-sm hover:text-blue-700">Upload Files</button>
            </div>
          </div>
        </div>

        {/* Submit Buttons */}
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
            Submit Complaint
          </button>
        </div>
      </form>
    </div>
  );
};

export default Complaints; 