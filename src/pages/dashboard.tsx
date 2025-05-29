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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {/* Certificates & Permits */}
            <div className="bg-white rounded-xl shadow-sm p-5 transition-all duration-300 ease-in-out hover:shadow-md flex flex-col">
              <div className="flex-none">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4 mx-auto">
                  <span className="material-icons text-blue-600 text-2xl">description</span>
                </div>
                <h3 className="text-lg font-bold text-center text-gray-800 mb-3">Certificates & Permits</h3>
                <p className="text-sm text-gray-600 text-center mb-4 hidden sm:block">Request official documents and permits</p>
              </div>
              <div className="flex-1 flex flex-col justify-end">
                <div className="space-y-2.5">
                  <button 
                    onClick={() => setActivePage('barangay-id')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                    <span className="material-icons mr-2 text-sm">badge</span>
                    <span className="truncate">Barangay ID</span>
                  </button>
                  <button 
                    onClick={() => setActivePage('clearance')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                    <span className="material-icons mr-2 text-sm">verified</span>
                    <span className="truncate">Clearance</span>
                  </button>
                  <button 
                    onClick={() => setActivePage('business-permit')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                  >
                    <span className="material-icons mr-2 text-sm">business</span>
                    <span className="truncate">Business Permit</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Health Services */}
            <div className="bg-white rounded-xl shadow-sm p-5 transition-all duration-300 ease-in-out hover:shadow-md flex flex-col">
              <div className="flex-none">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4 mx-auto">
                  <span className="material-icons text-blue-600 text-2xl">local_hospital</span>
                </div>
                <h3 className="text-lg font-bold text-center text-gray-800 mb-3">Health Services</h3>
                <p className="text-sm text-gray-600 text-center mb-4 hidden sm:block">Access community health resources</p>
              </div>
              <div className="flex-1 flex flex-col justify-end">
                <div className="space-y-2.5">
                  <button 
                    onClick={() => setActivePage('vaccination')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    <span className="material-icons mr-2 text-sm">vaccines</span>
                    <span className="truncate">Vaccination Schedule</span>
                  </button>
                  <button 
                    onClick={() => setActivePage('health-center')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    <span className="material-icons mr-2 text-sm">medical_services</span>
                    <span className="truncate">Health Center</span>
                  </button>
                  <button 
                    onClick={() => setActivePage('medicine')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    <span className="material-icons mr-2 text-sm">medication</span>
                    <span className="truncate">Medicine Assistance</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Social Services */}
            <div className="bg-white rounded-xl shadow-sm p-5 transition-all duration-300 ease-in-out hover:shadow-md flex flex-col">
              <div className="flex-none">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4 mx-auto">
                  <span className="material-icons text-blue-600 text-2xl">diversity_3</span>
                </div>
                <h3 className="text-lg font-bold text-center text-gray-800 mb-3">Social Services</h3>
                <p className="text-sm text-gray-600 text-center mb-4 hidden sm:block">Community support programs</p>
              </div>
              <div className="flex-1 flex flex-col justify-end">
                <div className="space-y-2.5">
                  <button 
                    onClick={() => setActivePage('financial-aid')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    <span className="material-icons mr-2 text-sm">volunteer_activism</span>
                    <span className="truncate">Financial Aid</span>
                  </button>
                  <button 
                    onClick={() => setActivePage('education')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    <span className="material-icons mr-2 text-sm">school</span>
                    <span className="truncate">Education Support</span>
                  </button>
                  <button 
                    onClick={() => setActivePage('senior')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    <span className="material-icons mr-2 text-sm">elderly</span>
                    <span className="truncate">Senior Citizen</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Emergency Services */}
            <div className="bg-white rounded-xl shadow-sm p-5 transition-all duration-300 ease-in-out hover:shadow-md flex flex-col">
              <div className="flex-none">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4 mx-auto">
                  <span className="material-icons text-blue-600 text-2xl">emergency</span>
                </div>
                <h3 className="text-lg font-bold text-center text-gray-800 mb-3">Emergency Services</h3>
                <p className="text-sm text-gray-600 text-center mb-4 hidden sm:block">24/7 emergency assistance</p>
              </div>
              <div className="flex-1 flex flex-col justify-end">
                <div className="space-y-2.5">
                  <button 
                    onClick={() => setActivePage('hotlines')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    <span className="material-icons mr-2 text-sm">phone_in_talk</span>
                    <span className="truncate">Emergency Hotlines</span>
                  </button>
                  <button 
                    onClick={() => setActivePage('first-response')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    <span className="material-icons mr-2 text-sm">health_and_safety</span>
                    <span className="truncate">First Response</span>
                  </button>
                  <button 
                    onClick={() => setActivePage('disaster')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    <span className="material-icons mr-2 text-sm">flood</span>
                    <span className="truncate">Disaster Response</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Community Programs */}
            <div className="bg-white rounded-xl shadow-sm p-5 transition-all duration-300 ease-in-out hover:shadow-md flex flex-col">
              <div className="flex-none">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4 mx-auto">
                  <span className="material-icons text-blue-600 text-2xl">groups</span>
                </div>
                <h3 className="text-lg font-bold text-center text-gray-800 mb-3">Community Programs</h3>
                <p className="text-sm text-gray-600 text-center mb-4 hidden sm:block">Join community activities</p>
              </div>
              <div className="flex-1 flex flex-col justify-end">
                <div className="space-y-2.5">
                  <button 
                    onClick={() => setActivePage('events')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    <span className="material-icons mr-2 text-sm">event</span>
                    <span className="truncate">Events Calendar</span>
                  </button>
                  <button 
                    onClick={() => setActivePage('sports')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    <span className="material-icons mr-2 text-sm">sports</span>
                    <span className="truncate">Sports Activities</span>
                  </button>
                  <button 
                    onClick={() => setActivePage('jobs')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    <span className="material-icons mr-2 text-sm">work</span>
                    <span className="truncate">Job Programs</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Resident Services */}
            <div className="bg-white rounded-xl shadow-sm p-5 transition-all duration-300 ease-in-out hover:shadow-md flex flex-col">
              <div className="flex-none">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4 mx-auto">
                  <span className="material-icons text-blue-600 text-2xl">account_circle</span>
                </div>
                <h3 className="text-lg font-bold text-center text-gray-800 mb-3">Resident Services</h3>
                <p className="text-sm text-gray-600 text-center mb-4 hidden sm:block">Access resident information</p>
              </div>
              <div className="flex-1 flex flex-col justify-end">
                <div className="space-y-2.5">
                  <button 
                    onClick={() => setActivePage('registration')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    <span className="material-icons mr-2 text-sm">how_to_reg</span>
                    <span className="truncate">Registration</span>
                  </button>
                  <button 
                    onClick={() => setActivePage('complaints')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    <span className="material-icons mr-2 text-sm">report_problem</span>
                    <span className="truncate">Complaints</span>
                  </button>
                  <button 
                    onClick={() => setActivePage('dispute')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    <span className="material-icons mr-2 text-sm">gavel</span>
                    <span className="truncate">Dispute Resolution</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header with Language Selection */}
      <header className="bg-white shadow-lg w-full flex-none">
        <nav className="container mx-auto pl-8 lg:pl-16 py-5">
          <div className="flex justify-between items-center pr-8 lg:pr-16">
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
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2.5 rounded-lg flex items-center space-x-2 transition-colors duration-200 font-medium"
              >
      
                <span>Officials</span>
              </button>

              <button
                onClick={toggleChat}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 transition-colors duration-200 font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                <span>{isChatOpen ? 'Close Assistant' : 'Digital Assistant'}</span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center space-x-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-4 py-2.5 hover:bg-gray-100 transition-colors duration-200 font-medium"
                >
                  <span>English</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isLangDropdownOpen ? 'transform rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isLangDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10 border border-gray-100">
                    <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">English</a>
                    <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">Tagalog</a>
                    <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">Cebuano</a>
                    <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">Ilocano</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden">
        {/* Cards Section */}
        <div className={`${isChatOpen ? 'w-2/3' : 'w-full'} transition-all duration-300 p-6 px-8 lg:px-16 overflow-y-auto`}>
          {renderActivePage()}
        </div>

        {/* Chatbot Section */}
        <div className={`w-1/3 transition-all duration-300 ease-in-out ${
          isChatOpen 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-4 hidden'
        }`}>
          <div className="h-full">
            <Chatbot />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
