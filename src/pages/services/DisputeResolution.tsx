import React from 'react';

interface DisputeResolutionProps {
  onBack: () => void;
}

const DisputeResolution: React.FC<DisputeResolutionProps> = ({ onBack }) => {
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
            <h1 className="text-2xl font-bold text-gray-800">Dispute Resolution</h1>
            <p className="text-gray-600">File a case for mediation and resolution</p>
          </div>
        </div>
      </div>

      {/* Dispute Form */}
      <form className="space-y-6">
        {/* Case Information */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Case Information</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type of Dispute</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select dispute type</option>
                <option value="neighbor">Neighbor Dispute</option>
                <option value="property">Property Dispute</option>
                <option value="noise">Noise Complaint</option>
                <option value="family">Family Matter</option>
                <option value="business">Business Conflict</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description of the Issue</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Please provide details about the dispute..."
              ></textarea>
            </div>
          </div>
        </div>

        {/* Involved Parties */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Involved Parties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Complainant Information */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-800">Complainant Details</h3>
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
            </div>

            {/* Respondent Information */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-800">Respondent Details</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter respondent's name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address/Location</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter respondent's address"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Evidence and Documents */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Supporting Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <span className="material-icons text-gray-400 text-4xl mb-2">upload_file</span>
              <p className="text-sm text-gray-600">Evidence Documents</p>
              <input type="file" className="hidden" multiple accept="image/*,.pdf" />
              <button type="button" className="mt-2 text-blue-600 text-sm hover:text-blue-700">Upload Files</button>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <span className="material-icons text-gray-400 text-4xl mb-2">photo_camera</span>
              <p className="text-sm text-gray-600">Photos/Videos</p>
              <input type="file" className="hidden" multiple accept="image/*,video/*" />
              <button type="button" className="mt-2 text-blue-600 text-sm hover:text-blue-700">Upload Media</button>
            </div>
          </div>
        </div>

        {/* Preferred Resolution */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Preferred Resolution</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">What outcome are you seeking?</label>
            <textarea
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe your preferred resolution..."
            ></textarea>
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
            Submit Case
          </button>
        </div>
      </form>
    </div>
  );
};

export default DisputeResolution; 