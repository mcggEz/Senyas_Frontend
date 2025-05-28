// Import necessary hooks from React
import { useState, useRef, useEffect } from 'react'

// Define the Dashboard component
const Dashboard = () => {
  // Create a reference to the video element
  const videoRef = useRef<HTMLVideoElement>(null)
  // State to track if the camera is streaming
  const [isStreaming, setIsStreaming] = useState(false)

  // Function to start the camera
  const startCamera = async () => {
    try {
      // Request access to the user's webcam
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true,
        audio: false
      })
      
      // If the video element is available, set its source to the webcam stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setIsStreaming(true) // Update the state to indicate streaming has started
      }
    } catch (err) {
      // Handle errors (e.g., user denies access to the webcam)
      console.error("Error accessing webcam:", err)
      alert("Could not access webcam")
    }
  }

  // Function to stop the camera
  const stopCamera = () => {
    // Check if the video element and its source are available
    if (videoRef.current && videoRef.current.srcObject) {
      // Stop all tracks of the media stream
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
      tracks.forEach(track => track.stop())
      videoRef.current.srcObject = null // Clear the video source
      setIsStreaming(false) // Update the state to indicate streaming has stopped
    }
  }

  // Effect to clean up the camera stream when the component unmounts
  useEffect(() => {
    return () => {
      stopCamera() // Stop the camera when the component is removed
    }
  }, [])

  // Render the component
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header section */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Sign Language Translator</h1>
        </div>
      </header>

      {/* Main content area with a split view for camera and text output */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side: Camera view */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Camera Input</h2>
            <div className="aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden">
              {/* Video element to display the webcam feed */}
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-4">
              {/* Button to start the camera */}
              <button 
                onClick={startCamera}
                disabled={isStreaming}
                className={`px-4 py-2 rounded-lg ${
                  isStreaming 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600'
                } text-white`}
              >
                Start Camera
              </button>
              {/* Button to stop the camera */}
              <button 
                onClick={stopCamera}
                disabled={!isStreaming}
                className={`px-4 py-2 rounded-lg ${
                  !isStreaming 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-red-500 hover:bg-red-600'
                } text-white`}
              >
                Stop Camera
              </button>
            </div>
          </div>

          {/* Right side: Text output */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Generated Text</h2>
            <div className="h-[300px] bg-gray-50 rounded-lg p-4 mb-4 overflow-y-auto">
              {/* Placeholder for translated text */}
              <p className="text-gray-600">
                Translated text will appear here in real-time...
              </p>
            </div>
            <div className="flex space-x-4">
              {/* Button to copy the translated text */}
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                Copy Text
              </button>
              {/* Button to clear the translated text */}
              <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg">
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Section for displaying recent translations */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Translations</h2>
          <div className="space-y-4">
            {/* Example of a recent translation item */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-800">Hello, how are you?</p>
              <p className="text-sm text-gray-500 mt-1">2 minutes ago</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-800">Thank you</p>
              <p className="text-sm text-gray-500 mt-1">5 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Export the Dashboard component as the default export
export default Dashboard