/**
 * Browser compatibility and environment checks
 * Author: Richard Anderson
 * Last Updated: 07-June-2025
 * Version: 1.0.1
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
  
  // Check if we're in development mode
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  if (currentDomain === correctURL) {
    // Exact match
    isDomainValid = true;
  } else if (allowSubdomains && currentDomain.endsWith(`.${correctURL}`)) {
    // Subdomain check if enabled
    isDomainValid = true;
  } else if (currentDomain === 'localhost' || currentDomain === '0.0.0.0' || 
             currentDomain.match(/^\d+\.\d+\.\d+\.\d+$/) || isDevelopment) {
    // Allow localhost, IP addresses, and any domain in development
    isDomainValid = true;
  }

  // Handle the domain validation result
  if (!isDomainValid) {
    // Log a warning if the domain is unauthorized
    console.warn(`Unauthorized domain: ${currentDomain}`);
    
    // Only redirect in production
    if (enableRedirect && !isDevelopment) {
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