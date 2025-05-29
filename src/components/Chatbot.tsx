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
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
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
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
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
        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
      >
        <div
          className={`max-w-[80%] rounded-2xl px-4 py-2 ${
            message.sender === 'user'
              ? 'bg-blue-600 text-white rounded-br-none'
              : 'bg-gray-100 text-gray-800 rounded-bl-none'
          }`}
        >
          {message.type === 'text' && <p className="text-sm">{message.text}</p>}
          {message.type === 'voice' && (
            <div className="flex items-center space-x-2">
              <span className="material-icons text-xl">mic</span>
              <p className="text-sm">{message.text}</p>
            </div>
          )}
          {message.type === 'video' && message.mediaUrl && (
            <div className="space-y-2">
              <video src={message.mediaUrl} controls className="rounded-lg max-w-full" />
              <p className="text-sm">{message.text}</p>
            </div>
          )}
          <p className={`text-xs mt-1 ${
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
        <div className="absolute inset-0 bg-blue-600 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 relative">
              <div className="absolute inset-0 border-4 border-white rounded-full animate-ping"></div>
              <div className="absolute inset-0 border-4 border-white rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-icons text-4xl text-white">chat</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Barangay Info Hub</h2>
            <p className="text-blue-100">Your Digital Assistant</p>
          </div>
        </div>
      )}
      <div className="bg-white shadow-sm h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex-none">
          <div className="flex items-center space-x-3">
            <div>
              <h3 className="font-semibold text-gray-800">Digital Assistant</h3>
              <p className="text-sm text-gray-500">Ask specific questions about our community</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
        >
          {messages.map(renderMessage)}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none px-4 py-2">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 flex-none">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={handleASLToggle}
              className={`${
                isASLActive ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-600 hover:bg-blue-700'
              } text-white rounded-lg px-4 py-2 transition-colors duration-200 flex items-center justify-center`}
              title="American Sign Language"
              disabled={isLoading}
            >
              <span className="material-icons text-xl">sign_language</span>
            </button>
            <button
              type="button"
              onClick={handleVoiceInput}
              className={`${
                isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
              } text-white rounded-lg px-4 py-2 transition-colors duration-200 flex items-center justify-center`}
              disabled={isLoading}
            >
              <span className="material-icons text-xl">mic</span>
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center disabled:bg-blue-400"
              disabled={isLoading || !inputMessage.trim()}
            >
              <span className="material-icons text-xl">send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;