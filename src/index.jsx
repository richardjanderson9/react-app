/*
  Path: src/index.jsx
  Description: Entry point for the React application.
  Author: Richard Anderson.
  Last Updated: 07-June-2025.
  Version: 1.0.2.
  Note: This file contains both AI-generated (Copilot -- Claude 3.7) and manually added comments for code clarity.
*/

// Assets Import! (React!).
import React from 'react';
import ReactDOM from 'react-dom/client';
//import { useState, useEffect } from 'react'; // React Hooks Import!.

// Assets Import! (Custom React!).
import reportWebVitals from './assets/js/analytics/reportWebVitals.jsx';
import App from './app.jsx';
import browserChecks from './assets/js/browserChecks.jsx';

// Assets Import! (Non-React!).
import './assets/css/index.css';

// Initialize React Root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Check browser compatibility before rendering
root.render(
  browserChecks() ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <div className="browser-not-supported">
      <h1>Browser Not Supported</h1>
      <p>Please use a modern browser to access this application.</p>
    </div>
  )
);

// Performance Monitoring.
reportWebVitals();
