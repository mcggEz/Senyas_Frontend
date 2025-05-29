interface ApiConfig {
  CHAT: string;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
 
export const API_ENDPOINTS: ApiConfig = {
  CHAT: `${BASE_URL}/api/chat`,
}; 