/*
  Path: src/assets/js/browserChecks.js
  Description: UI components separated from main App logic.
  Author: Richard Anderson
  Last Updated: 05-June-2025
  Version: 1.0.2
*/

// Assets Import! (Custom React!).
import urlChecks from './browserChecks/urlChecks'; // Import URL checks.

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