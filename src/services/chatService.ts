import { API_ENDPOINTS } from '../config/api';

export interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatResponse {
  response: string;
  error?: string;
}

export const sendMessage = async (message: string): Promise<ChatMessage> => {
  try {
    const response = await fetch(API_ENDPOINTS.CHAT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      credentials: 'include', // Include cookies if needed
      body: JSON.stringify({ message }),
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
    };
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}; 