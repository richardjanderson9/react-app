/**
 * Browser compatibility and environment checks
 * Author: Richard Anderson
 * Last Updated: 05-June-2025
 * Version: 1.0.0
 */

// Import the configuration from JSON file
import validURLConfig from '../../../assets/json/vaildURL.json';

// Function to verify if the current domain is allowed
const urlChecks = () => {
  // Get the current domain from the browser's window object
  const currentDomain = window.location.hostname;
  // Get the allowed domain from config
  const correctURL = validURLConfig.correctURL;
  const allowSubdomains = validURLConfig.subdomain;
  const enableRedirect = validURLConfig.enableRedirect;
  
  // Check if domain is valid
  let isDomainValid = false;
  
  if (currentDomain === correctURL) {
    // Exact match
    isDomainValid = true;
  } else if (allowSubdomains && currentDomain.endsWith(`.${correctURL}`)) {
    // Subdomain check if enabled
    isDomainValid = true;
  } else if (currentDomain === 'localhost') {
    // Always allow localhost for development
    isDomainValid = true;
  }

  // Handle the domain validation result
  if (!isDomainValid) {
    // Log a warning if the domain is unauthorized
    console.warn(`Unauthorized domain: ${currentDomain}`);
    
    // Redirect if enabled in config
    if (enableRedirect) {
      window.location.href = `https://${correctURL}`;
    }
  } else {
    // Log a success message if the domain is verified
    console.log(`Domain verified: ${currentDomain}`);
  }
  
  // Return the validation result
  return isDomainValid;
};

// Export the urlChecks function as the default export
export default urlChecks;