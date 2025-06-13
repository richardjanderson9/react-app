/*
  Path: src/app.jsx
  Description: Main App component for the React application.
  Author: Richard Anderson.
  Last Updated: 13-June-2025.
  Version: 1.1.0.
  Note: This file contains both AI-generated (Copilot -- Claude 3.7) and manually added comments for code clarity.
*/

import React, { Suspense } from 'react';
import ErrorBoundary from './assets/js/ErrorBoundary.jsx'; // Updated import path
const UserInterface = React.lazy(() => import('./assets/js/userInterface.jsx'));

// App Component Definition.
function App() {
  // Render using the UserInterface component (UI logic moved to userInterface.jsx)
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <UserInterface />
      </Suspense>
    </ErrorBoundary>
  );
}

// Export Component.
export default App;