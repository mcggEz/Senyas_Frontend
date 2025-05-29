interface ApiConfig {
  CHAT: string;
}

// Update this to your backend server URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
 
export const API_ENDPOINTS: ApiConfig = {
  CHAT: `${BASE_URL}/api/chat`,
}; 