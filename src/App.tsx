import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './components/HomePage'; // Create a simple Home component
import Login from './components/Login'; // Create a simple Login component
import Signup from './components/Signup'; // Create a simple Signup component

//  readonly NODE_ENV: 'development' | 'production' | 'test';
//    readonly PUBLIC_URL: string;
//    readonly API_URL: string;
//    readonly API_KEY: string;

const App: React.FC = () => {
  // Access the environment variables
  const nodeEnv = import.meta.env.VITE_ENV;
  const publicURL = import.meta.env.VITE_PUBLIC_URL;
  const apiURL = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  
  console.log('Node Environment:', nodeEnv);
  console.log('Public URL:', publicURL);
  console.log('API URL:', apiURL);
  console.log('API Key:', apiKey);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
