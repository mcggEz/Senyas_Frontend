import { API_ENDPOINTS } from '../config/api';

export interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type: 'text' | 'voice' | 'video';
  mediaUrl?: string;
}

export interface ChatRequest {
  message: string;
  type: 'text' | 'voice' | 'video';
  mediaUrl?: string;
}

export interface ChatResponse {
  response: string;
  error?: string;
  type: 'text' | 'voice' | 'video';
  mediaUrl?: string;
}

export const sendMessage = async (message: string, type: 'text' | 'voice' | 'video' = 'text', mediaUrl?: string): Promise<ChatMessage> => {
  try {
    const payload: ChatRequest = {
      message,
      type,
      mediaUrl
    };

    const response = await fetch(API_ENDPOINTS.CHAT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(errorData.error || `Error: ${response.status}`);
    }

    const data: ChatResponse = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }

    return {
      id: Date.now(),
      text: data.response,
      sender: 'bot',
      timestamp: new Date(),
      type: data.type,
      mediaUrl: data.mediaUrl
    };
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

// Helper function to initialize chat session
export const initializeChatSession = () => {
  if (!sessionStorage.getItem('chatSessionId')) {
    sessionStorage.setItem('chatSessionId', Date.now().toString());
  }
  if (!sessionStorage.getItem('chatHistory')) {
    sessionStorage.setItem('chatHistory', '[]');
  }
  if (!sessionStorage.getItem('userPreferences')) {
    sessionStorage.setItem('userPreferences', '{}');
  }
}; 