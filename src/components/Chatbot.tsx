import { useState, useRef, useEffect } from 'react'
import { sendMessage, type ChatMessage } from '../services/chatService';

// Extend the Window interface to include SpeechRecognition properties
interface CustomWindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
}

declare let window: CustomWindow;

const Chatbot = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [showSplash, setShowSplash] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hello! I'm your Barangay Info Hub assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isASLActive, setIsASLActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTop = scrollHeight - clientHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.lang = 'en-US';
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
        // Add a visual indicator that we're listening
        const listeningMessage: ChatMessage = {
          id: Date.now(),
          text: "Listening...",
          sender: 'bot',
          timestamp: new Date(),
          type: 'text'
        };
        setMessages(prev => [...prev, listeningMessage]);
      };

      recognition.onresult = async (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0].transcript)
          .join('');
        
        // Only process final results
        if (event.results[0].isFinal) {
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
            const errorMessage: ChatMessage = {
              id: Date.now(),
              text: "I'm sorry, I'm having trouble processing your voice message. Please try again.",
              sender: 'bot',
              timestamp: new Date(),
              type: 'text'
            };
            setMessages(prev => [...prev, errorMessage]);
          } finally {
            setIsLoading(false);
          }
        }
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        // Add error message to chat
        const errorMessage: ChatMessage = {
          id: Date.now(),
          text: "Voice recognition error. Please try again.",
          sender: 'bot',
          timestamp: new Date(),
          type: 'text'
        };
        setMessages(prev => [...prev, errorMessage]);
      };

      recognition.onend = () => {
        setIsListening(false);
        // Add a message indicating that voice input has ended
        const endMessage: ChatMessage = {
          id: Date.now(),
          text: "Voice input ended.",
          sender: 'bot',
          timestamp: new Date(),
          type: 'text'
        };
        setMessages(prev => [...prev, endMessage]);
      };

      recognition.start();
    } else {
      alert('Speech recognition is not supported in your browser.');
    }
  };

  const handleASLToggle = () => {
    setIsASLActive(!isASLActive);
    if (!isASLActive) {
      // Here you would typically start video capture for ASL
      alert('ASL recognition feature coming soon! This will enable sign language interaction.');
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    // Add user text message
    const userMessage: ChatMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Get bot response from backend
      const botResponse = await sendMessage(inputMessage.trim(), 'text');
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: Date.now(),
        text: "I'm sorry, I'm having trouble connecting to the server. Please try again later.",
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = (message: ChatMessage) => {
    return (
      <div
        key={message.id}
        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
      >
        <div
          className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
            message.sender === 'user'
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-none shadow-sm'
              : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
          }`}
        >
          {message.type === 'text' && <p className="text-sm leading-relaxed">{message.text}</p>}
          {message.type === 'voice' && (
            <div className="flex items-center space-x-2">
              <svg 
                className="w-5 h-5 text-gray-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" 
                />
              </svg>
              <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
          )}
          {message.type === 'video' && message.mediaUrl && (
            <div className="space-y-2">
              <video src={message.mediaUrl} controls className="rounded-lg max-w-full" />
              <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
          )}
          <p className={`text-xs mt-1.5 ${
            message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
          }`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="relative h-full">
      {showSplash && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 relative">
              <div className="absolute inset-0 border-4 border-white rounded-full animate-ping"></div>
              <div className="absolute inset-0 border-4 border-white rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/sigla.png"
                  alt="SIGLA Logo"
                  className="w-20 h-20 object-contain rounded-full shadow-lg"
                  style={{ background: 'white', padding: '8px' }}
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Barangay Info Hub</h2>
            <p className="text-blue-100">Your Digital Assistant</p>
          </div>
        </div>
      )}
      <div className="bg-white h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex-none bg-gradient-to-r from-[#14274e] to-[#1a3a6e]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg 
                className="w-6 h-6 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white">Digital Assistant</h3>
              <p className="text-sm text-blue-100">Ask specific questions about our community</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 bg-gray-50"
        >
          {messages.map(renderMessage)}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 rounded-2xl rounded-bl-none px-4 py-2 shadow-sm">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 flex-none bg-white">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={handleASLToggle}
              className={`${
                isASLActive ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-600 hover:bg-blue-700'
              } text-white rounded-xl px-4 py-2.5 transition-all duration-200 flex items-center justify-center shadow-sm`}
              title="American Sign Language"
              disabled={isLoading}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" 
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleVoiceInput}
              className={`${
                isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
              } text-white rounded-xl px-4 py-2.5 transition-all duration-200 flex items-center justify-center shadow-sm`}
              disabled={isLoading}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" 
                />
              </svg>
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-xl px-4 py-2.5 hover:bg-blue-700 transition-all duration-200 flex items-center justify-center disabled:bg-blue-400 shadow-sm"
              disabled={isLoading || !inputMessage.trim()}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;