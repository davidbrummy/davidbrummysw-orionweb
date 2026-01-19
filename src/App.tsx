import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './components/HomePage'; // Create a simple Home component
import Login from './components/Login'; // Create a simple Login component
import Signup from './components/Signup'; // Create a simple Signup component


const App: React.FC = () => {
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
