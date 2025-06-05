/*
  Path: src/assets/js/userInterface.js.
  Description: UI components separated from main App logic.
  Author: Richard Anderson.
  Last Updated: 05-June-2025.
  Version: 1.0.2.
  Note: Contains the UI design moved from App.js
*/

import React from 'react'; // React Import!
import logo from '../media/logo.svg'; // Adjusted path for logo
import '../css/index.css'; // CSS Import
import '../css/userInterface.css'; // Specific UI styles
import packageJson from '../../../package.json'; // Package JSON Import!.

const UserInterface = () => {
  const repositoryUrl = packageJson?.repository?.url2;

  // Main Render.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <u>Welcome to the React App!</u>
          <br />
          Application Name: {packageJson?.name || 'N/A'}
          <br />
          Version: {packageJson?.version || 'N/A'}
          <br />
          Author: {packageJson?.author?.name || 'N/A'}
        </p>
        <button
          className="App-button"
          onClick={() => {
            if (repositoryUrl) {
              window.open(repositoryUrl, "_blank");
            } else {
              console.error("Cannot open link: Repository URL (packageJson.repository.url2) is not defined or accessible.");
              alert("GitHub repository URL is not configured correctly. Please check package.json.");
            }
          }}
          disabled={!repositoryUrl} // Disable button if URL is not available
        >
          View Github!
        </button>
        {!repositoryUrl && (
          <p style={{ color: 'red', marginTop: '10px' }}>
            Note: GitHub link is disabled because the repository URL (url2) is missing in package.json.
          </p>
        )}
      </header>
    </div>
  );
};

export default UserInterface;