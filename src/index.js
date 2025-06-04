/*
  Path: src/index.js.
  Description: Entry point for the React application.
  Author: Richard Anderson.
  Last Updated: 05-June-2025.
  Version: 1.0.0.
  Note: This file contains both AI-generated (Copilot -- Claude 3.7) and manually added comments for code clarity.
*/

// Assets Import! (React!).
import React from 'react';
import ReactDOM from 'react-dom/client';
//import { useState, useEffect } from 'react'; // React Hooks Import!.

// Assets Import! (Custom React!).
import App from './App';
import reportWebVitals from './assets/js/reportWebVitals';

// Assets Import! (Non-React!).
import './assets/css/index.css';

// Initialize React Root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render App Component.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance Monitoring.
reportWebVitals();
