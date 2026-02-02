import axios from 'axios';

  const nodeEnv = import.meta.env.VITE_ENV;
  const publicURL = import.meta.env.VITE_PUBLIC_URL;
  const apiURL = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  
  console.log('Node Environment:', nodeEnv);
  console.log('Public URL:', publicURL);
  console.log('API URL:', apiURL);
  console.log('API Key:', apiKey);


// Define the expected shape of the response data
interface AuthResponse {
  response: string;
  // ... other user info like username, email, etc.
}

export const login = async (email: string, password: string): Promise<AuthResponse | null> => {
  try {
    const response = await axios.post<AuthResponse>(apiURL + 'login', {
      email,
      password,
    });

    console.log("response.data:", response.data); 
    console.log("response.data.response:", response.data.response); 

    // Upon successful login, the server typically returns a JWT
    if (response.data.response) {
      // Store the token securely (e.g., in localStorage or an httpOnly cookie if possible)
      localStorage.setItem('token', response.data.response);
    }
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    // Handle specific error types as needed
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem('user_token');
};

export const getCurrentToken = (): string | null => {
  return localStorage.getItem('user_token');
};
