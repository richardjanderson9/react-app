/*
  Path: src/assets/js/browserChecks.jsx
  Description: UI components separated from main App logic.
  Author: Richard Anderson
  Last Updated: 07-June-2025
  Version: 1.0.3
*/

// Assets Import! (Custom React!).
import urlChecks from './browserChecks/urlChecks.jsx'; // Import URL checks.

const browserChecks = () => {
  // Call the URL checks function
  const urlCheckResult = urlChecks();
  //console.log('URL Check Result:', urlCheckResult);
  
  // Other browser compatibility checks can be added here
  // - Browser versions
  // - Required features support
  // - Screen dimensions
  // - Device capabilities
  
  // Return the URL check result
  // Later we can expand this to: urlCheckResult && otherChecks
  return urlCheckResult;
};

export default browserChecks;