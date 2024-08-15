// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import Dashboard from './Components/Dashboard';
import { BookProvider } from "./Components/BookContext";
 
 

function App() {
  return (
    <BookProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </BookProvider>
  );
}

export default App;



