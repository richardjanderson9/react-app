// filepath: /home/pi/vscode/react-app/src/assets/js/browserChecks/urlChecks.jsx
/*
  Path: src/assets/js/browserChecks/urlChecks.jsx
  Description: URL validation checks
  Author: Richard Anderson
  Last Updated: 08-June-2025
  Version: 1.0.3
*/

// Import the correctly named JSON file
import validURLs from '../../json/validURL.json'; // Renamed from vaildURL.json

const urlChecks = () => {
  // Get the current URL
  const currentURL = window.location.hostname;

  // Check if the current URL matches the correctURL
  let isCorrectURL = currentURL === validURLs.correctURL;

  // If testing, check if the current URL is in the allowedDomains list
  if (import.meta.env.VITE_IS_TESTING === 'true') {
    isCorrectURL = isCorrectURL || validURLs.allowedDomains.includes(currentURL);
  }

  return isCorrectURL;
};

export default urlChecks;