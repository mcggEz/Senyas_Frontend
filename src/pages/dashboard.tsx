import { useState, useEffect } from 'react'

import BarangayID from './services/BarangayID'
import Clearance from './services/Clearance'
import BusinessPermit from './services/BusinessPermit'
import VaccinationSchedule from './services/VaccinationSchedule'
import HealthCenter from './services/HealthCenter'
import MedicineAssistance from './services/MedicineAssistance'
import FinancialAid from './services/FinancialAid'
import EducationSupport from './services/EducationSupport'
import SeniorCitizen from './services/SeniorCitizen'
import EmergencyHotlines from './services/EmergencyHotlines'
import FirstResponse from './services/FirstResponse'
import DisasterResponse from './services/DisasterResponse'
import EventsCalendar from './services/EventsCalendar'
import SportsActivities from './services/SportsActivities'
import JobOpportunities from './services/JobOpportunities'
import Registration from './services/Registration'
import Complaints from './services/Complaints'
import DisputeResolution from './services/DisputeResolution'
import Officials from './services/Officials'
import { sendMessage, initializeChatSession } from '../services/chatService'
import type { ChatMessage } from '../services/chatService'

const Dashboard = () => {
  const [activePage, setActivePage] = useState<string | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [showChatbot, setShowChatbot] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)
  
  useEffect(() => {
    // Initialize chat session when component mounts
    initializeChatSession()
  }, [])

  const startVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Voice input is not supported in your browser. Please use Chrome or Edge.');
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = async (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputMessage(transcript);
      
      // Add user voice message
      const userMessage: ChatMessage = {
        id: Date.now(),
        text: transcript,
        sender: 'user',
        timestamp: new Date(),
        type: 'voice'
      };
      
      setMessages(prev => [...prev, userMessage]);
      setIsLoading(true);

      try {
        // Send voice message to backend
        const botResponse = await sendMessage(transcript, 'voice');
        setMessages(prev => [...prev, botResponse]);
      } catch (error) {
        console.error('Error in voice chat:', error);
        const errorMessage: ChatMessage = {
          id: Date.now(),
          text: 'Sorry, I encountered an error processing your voice message.',
          sender: 'bot',
          timestamp: new Date(),
          type: 'text'
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
      const errorMessage: ChatMessage = {
        id: Date.now(),
        text: 'Voice recognition error. Please try again.',
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, errorMessage]);
    };

    recognition.start();
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() && !isLoading) {
      try {
        setIsLoading(true)
        
        // Add user message to chat
        const userMessage: ChatMessage = {
          id: Date.now(),
          text: inputMessage,
          sender: 'user',
          timestamp: new Date(),
          type: 'text'
        }
        setMessages(prev => [...prev, userMessage])
        setInputMessage('')

        // Send message to API and get response
        const botResponse = await sendMessage(inputMessage)
        setMessages(prev => [...prev, botResponse])
      } catch (error) {
        console.error('Error in chat:', error)
        // Add error message to chat
        const errorMessage: ChatMessage = {
          id: Date.now(),
          text: 'Sorry, I encountered an error. Please try again.',
          sender: 'bot',
          timestamp: new Date(),
          type: 'text'
        }
        setMessages(prev => [...prev, errorMessage])
      } finally {
        setIsLoading(false)
      }
    }
  }

  const renderActivePage = () => {
    switch (activePage) {
      // Certificates & Permits
      case 'barangay-id':
        return <BarangayID onBack={() => setActivePage(null)} />
      case 'clearance':
        return <Clearance onBack={() => setActivePage(null)} />
      case 'business-permit':
        return <BusinessPermit onBack={() => setActivePage(null)} />
      
      // Health Services
      case 'vaccination':
        return <VaccinationSchedule onBack={() => setActivePage(null)} />
      case 'health-center':
        return <HealthCenter onBack={() => setActivePage(null)} />
      case 'medicine':
        return <MedicineAssistance onBack={() => setActivePage(null)} />
      
      // Social Services
      case 'financial-aid':
        return <FinancialAid onBack={() => setActivePage(null)} />
      case 'education':
        return <EducationSupport onBack={() => setActivePage(null)} />
      case 'senior':
        return <SeniorCitizen onBack={() => setActivePage(null)} />
      
      // Emergency Services
      case 'hotlines':
        return <EmergencyHotlines onBack={() => setActivePage(null)} />
      case 'first-response':
        return <FirstResponse onBack={() => setActivePage(null)} />
      case 'disaster':
        return <DisasterResponse onBack={() => setActivePage(null)} />
      
      // Community Programs
      case 'events':
        return <EventsCalendar onBack={() => setActivePage(null)} />
      case 'sports':
        return <SportsActivities onBack={() => setActivePage(null)} />
      case 'jobs':
        return <JobOpportunities onBack={() => setActivePage(null)} />
      
      // Resident Services
      case 'registration':
        return <Registration onBack={() => setActivePage(null)} />
      case 'complaints':
        return <Complaints onBack={() => setActivePage(null)} />
      case 'dispute':
        return <DisputeResolution onBack={() => setActivePage(null)} />
      case 'officials':
        return <Officials onBack={() => setActivePage(null)} />
        
      
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {/* Certificates & Permits */}
            <div className="bg-white rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="Certificates & Permits" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
                    <h3 className="text-2xl font-bold text-white text-center">Certificates & Permits</h3>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-sm text-gray-600 mb-4">Request official documents and permits quickly and efficiently.</p>
                <div className="space-y-2.5">
                  <button 
                    onClick={() => setActivePage('barangay-id')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
            
                    Barangay ID
                  </button>
                  <button 
                    onClick={() => setActivePage('clearance')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
               
                    Clearance
                  </button>
                  <button 
                    onClick={() => setActivePage('business-permit')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                  
                    Business Permit
                  </button>
                </div>
              </div>
            </div>

            {/* Health Services */}
            <div className="bg-white rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="Health Services" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
                    <h3 className="text-2xl font-bold text-white text-center">Health Services</h3>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-sm text-gray-600 mb-4">Access community health resources and medical assistance programs.</p>
                <div className="space-y-2.5">
                  <button 
                    onClick={() => setActivePage('vaccination')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                   
                    Vaccination
                  </button>
                  <button 
                    onClick={() => setActivePage('health-center')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                   
                    Health Center
                  </button>
                  <button 
                    onClick={() => setActivePage('medicine')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                   
                    Medicine
                  </button>
                </div>
              </div>
            </div>

            {/* Social Services */}
            <div className="bg-white rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="Social Services" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
                    <h3 className="text-2xl font-bold text-white text-center">Social Services</h3>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-sm text-gray-600 mb-4">Find information on community support programs and assistance.</p>
                <div className="space-y-2.5">
                  <button 
                    onClick={() => setActivePage('financial-aid')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                 
                    Financial Aid
                  </button>
                  <button 
                    onClick={() => setActivePage('education')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                  
                    Education
                  </button>
                  <button 
                    onClick={() => setActivePage('senior')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                   
                    Senior Citizen
                  </button>
                </div>
              </div>
            </div>

            {/* Emergency Services */}
            <div className="bg-white rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://pbs.twimg.com/media/E1csx_tVIAQVM2e?format=jpg&name=large" 
                  alt="Emergency Services" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
                    <h3 className="text-2xl font-bold text-white text-center">Emergency Services</h3>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-sm text-gray-600 mb-4">Access 24/7 emergency assistance, hotlines, and response teams.</p>
                <div className="space-y-2.5">
                  <button 
                    onClick={() => setActivePage('hotlines')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                   
                    Hotlines
                  </button>
                  <button 
                    onClick={() => setActivePage('first-response')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                   
                    First Response
                  </button>
                  <button 
                    onClick={() => setActivePage('disaster')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                    
                    Disaster Response
                  </button>
                </div>
              </div>
            </div>

            {/* Community Programs */}
            <div className="bg-white rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="Community Programs" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
                    <h3 className="text-2xl font-bold text-white text-center">Community Programs</h3>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-sm text-gray-600 mb-4">Join various community events, sports, and job programs.</p>
                <div className="space-y-2.5">
                  <button 
                    onClick={() => setActivePage('events')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                    
                    Events
                  </button>
                  <button 
                    onClick={() => setActivePage('sports')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                    
                    Sports
                  </button>
                  <button 
                    onClick={() => setActivePage('jobs')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                   
                    Job Programs
                  </button>
                </div>
              </div>
            </div>

            {/* Resident Services */}
            <div className="bg-white rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="Resident Services" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
                    <h3 className="text-2xl font-bold text-white text-center">Resident Services</h3>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-sm text-gray-600 mb-4">Access resident registration, submit complaints, and resolve disputes.</p>
                <div className="space-y-2.5">
                  <button 
                    onClick={() => setActivePage('registration')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                    
                    Registration
                  </button>
                  <button 
                    onClick={() => setActivePage('complaints')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                   
                    Complaints
                  </button>
                  <button 
                    onClick={() => setActivePage('dispute')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                 
                    Dispute Resolution
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header with Language Selection */}
      <header className="w-full flex-none bg-[#14274e] shadow-md">
        <nav className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src='/sigla.png' alt="SIGLA Logo" className="w-16 h-16 rounded-full bg-white/10 object-contain" />
              <div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                  <span className="text-blue-300">Barangay Info Hub</span>
                </h1>
                <p className="text-sm text-blue-100 mt-1 font-medium">Making Information Accessible for All</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowChatbot(!showChatbot)}
                className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 transition-all duration-200 font-medium shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                <span>{showChatbot ? 'Hide Chat' : 'Show Chat'}</span>
              </button>
              <button
                onClick={() => setActivePage('officials')}
                className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 transition-all duration-200 font-medium shadow-sm"
              >
                Officials
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Services Section (2/3 width when chatbot is visible, full width when hidden) */}
        <div className={`transition-all duration-300 p-6 px-4 lg:px-8 overflow-y-auto ${showChatbot ? 'w-2/3' : 'w-full'}`}>
          {renderActivePage()}
        </div>

        {/* Chatbot Section (1/3 width, hidden when showChatbot is false) */}
        {showChatbot && (
          <div className="w-1/3 border-l border-gray-200 bg-white flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-[#3b82f6]">
              <h2 className="text-lg font-semibold text-white">AI Assistant</h2>
              <p className="text-sm text-blue-100">Ask me anything about barangay services</p>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                    {message.mediaUrl && (
                      <div className="mt-2">
                        {message.type === 'voice' && (
                          <audio controls src={message.mediaUrl} className="w-full" />
                        )}
                        {message.type === 'video' && (
                          <video controls src={message.mediaUrl} className="w-full rounded" />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <button
                  onClick={startVoiceInput}
                  disabled={isLoading || isListening}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    isListening 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                  }`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" 
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
                  placeholder={isListening ? "Listening..." : "Type your message..."}
                  disabled={isLoading || isListening}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || isListening}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send'}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Dashboard
