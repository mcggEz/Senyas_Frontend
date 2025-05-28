import { useState, useRef, useEffect } from 'react'

const Dashboard = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isStreaming, setIsStreaming] = useState(false)

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true,
        audio: false
      })
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setIsStreaming(true)
      }
    } catch (err) {
      console.error("Error accessing webcam:", err)
      alert("Could not access webcam")
    }
  }

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
      tracks.forEach(track => track.stop())
      videoRef.current.srcObject = null
      setIsStreaming(false)
    }
  }

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      stopCamera()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Sign Language Translator</h1>
        </div>
      </header>

      {/* Main Content - Split View */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Camera View */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Camera Input</h2>
            <div className="aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-4">
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

          {/* Right Side - Text Output */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Generated Text</h2>
            <div className="h-[300px] bg-gray-50 rounded-lg p-4 mb-4 overflow-y-auto">
              {/* Generated text will appear here */}
              <p className="text-gray-600">
                Translated text will appear here in real-time...
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                Copy Text
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg">
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Translation History */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Translations</h2>
          <div className="space-y-4">
            {/* Sample history items */}
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

export default Dashboard