import { useState } from 'react'
import Chatbot from '../components/Chatbot'
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

const Dashboard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const [activePage, setActivePage] = useState<string | null>(null)
  const toggleChat = () => setIsChatOpen(!isChatOpen)

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
      <header className="bg-white shadow-md w-full flex-none">
        <nav className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <div>
                <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                   <span className="text-blue-600">Barangay</span> Info Hub
                </h1>
                <p className="text-sm text-gray-600 mt-1 font-medium">Making Information Accessible for All</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setActivePage('officials')}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg flex items-center space-x-2 transition-all duration-200 font-medium shadow-sm"
              >
               
                Officials
              </button>

              <button
                onClick={toggleChat}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 transition-all duration-200 font-medium shadow-sm"
              >
                
                {isChatOpen ? 'Close Assistant' : 'Digital Assistant'}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Cards Section */}
        <div className={`${isChatOpen ? 'w-2/3' : 'w-full'} transition-all duration-300 p-6 px-4 lg:px-8 overflow-y-auto`}>
          {renderActivePage()}
        </div>

        {/* Chatbot Section */}
        <div className={`w-1/3 transition-all duration-300 ease-in-out ${
          isChatOpen 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-4 hidden'
        }`}>
          <div className="h-full bg-white shadow-lg  overflow-hidden">
            <Chatbot />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
