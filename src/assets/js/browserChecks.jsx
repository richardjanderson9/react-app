/*
  Path: src/assets/js/browserChecks.jsx
  Description: UI components separated from main App logic.
  Author: Richard Anderson
  Last Updated: 13-June-2025
  Version: 1.0.4
*/

// Assets Import! (Custom React!).
import urlChecks from './browserChecks/urlChecks.jsx'; // Import URL checks.
import fingerprintChecks from './browserChecks/fingerprintChecks.jsx'; // Import fingerprint checks.

const browserChecks = () => {
  // Call the URL checks function
  const urlCheckResult = urlChecks(); // Perform URL checks to ensure accessable domain is not azure default domain. Forces custom domain usage.
  const fingerprintCheckResult = fingerprintChecks(); // Perform fingerprint checks to ensure the browser is not a bot or malicious.
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