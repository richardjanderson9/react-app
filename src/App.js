/*
  Path: src/App.js.
  Description: Main App component for the React application.
  Author: Richard Anderson.
  Last Updated: 05-June-2025.
  Version: 1.0.0.
  Note: This file contains both AI-generated (Copilot -- Claude 3.7) and manually added comments for code clarity.
*/

// Assets Import! (React!).
import React from 'react';
import { useState, useEffect } from 'react'; // React Hooks Import!.

// Assets Import! (Custom React!).
// None currently needed.

// Assets Import! (Non-React!).
import logo from './assets/media/logo.svg'; // Logo Import!.
import './assets/css/App.css'; // CSS Import!.
import packageJson from '../package.json'; // Package JSON Import!.

// App Component Definition.
function App() {
  // State Initialization.
  const [appInfo, setAppInfo] = useState({ 
    version: '',
    name: '',
    loading: true,
    error: null 
  });

  // Effect Hook for Package Info.
  useEffect(() => {
    try {
      setAppInfo({
        version: packageJson.version,
        name: packageJson.name,
        loading: false,
        error: null
      });
    } catch (error) {
      setAppInfo(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to load app information'
      }));
    }
  }, []);

  // Conditional Rendering - Loading State.
  if (appInfo.loading) {
    return <div className="App">Loading...</div>;
  }

  // Conditional Rendering - Error State.
  if (appInfo.error) {
    return <div className="App">Error: {appInfo.error}</div>;
  }

  // Main Render.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Name: {appInfo.name}
          <br />
          Version: {appInfo.version}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Export Component.
export default App;