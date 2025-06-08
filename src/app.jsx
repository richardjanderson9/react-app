/*
  Path: src/app.jsx
  Description: Main App component for the React application.
  Author: Richard Anderson.
  Last Updated: 07-June-2025.
  Version: 1.0.2.
  Note: This file contains both AI-generated (Copilot -- Claude 3.7) and manually added comments for code clarity.
*/

import React from 'react';
import UserInterface from './assets/js/userInterface.jsx';
import ErrorBoundary from './assets/js/ErrorBoundary.jsx'; // Updated import path

// App Component Definition.
function App() {
  // Render using the UserInterface component (UI logic moved to userInterface.jsx)
  return (
    <ErrorBoundary>
      <UserInterface />
    </ErrorBoundary>
  );
}

// Export Component.
export default App;