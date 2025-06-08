/*
  Path: src/assets/js/browserChecks/fingerprintChecks.jsx
  Description: Performs browser fingerprinting checks.
  Author: Richard Anderson
  Last Updated: 08-June-2025
  Version: 1.0.1
*/

// Import may be blocked by ad blockers or privacy browsers (Brave/Firefox).
const fpPromise = import('https://openfpcdn.io/fingerprintjs/v4')
  .then(FingerprintJS => FingerprintJS.load());

// Async function to properly handle the fingerprint promise
const fingerprintChecks = async () => {
  try {
    const fp = await fpPromise;
    const result = await fp.get();
    const visitorId = result.visitorId;
    
    console.log('Visitor ID:', visitorId);
    
    // Add validation logic here as needed
    // For now, we'll consider all fingerprints valid
    return true;
  } catch (error) {
    console.error('FingerprintJS error:', error);
    return false;
  }
};

export default fingerprintChecks;