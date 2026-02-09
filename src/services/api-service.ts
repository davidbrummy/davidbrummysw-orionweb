import axios from 'axios';
import { generateRequestId } from '../utils/request-id-generator';

  const nodeEnv = import.meta.env.VITE_ENV;
  const publicURL = import.meta.env.VITE_PUBLIC_URL;
  const apiURL = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  
  console.log('Node Environment:', nodeEnv);
  console.log('Public URL:', publicURL);
  console.log('API URL:', apiURL);
  console.log('API Key:', apiKey);

const api = axios.create({
  baseURL: apiURL, // Use the API URL from environment variables
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add the request ID header to all requests
api.interceptors.request.use(
  (config) => {
    const requestId = generateRequestId();
    // Use a common header name like 'X-Request-Id'
    config.headers['X-Request-Id'] = requestId; 
    console.log(`Request ID for ${config.url}: ${requestId}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Example API call function
export const fetchData = async () => {
  try {
    const response = await api.get('/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};