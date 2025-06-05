/*
  Path: src/assets/js/reportWebVitals.js.
  Description: Performance monitoring utility for React application.
  Author: Richard Anderson.
  Last Updated: 05-June-2025.
  Version: 1.0.1.
  Note: This file contains both AI-generated (Copilot -- Claude 3.7) and manually added comments for code clarity.
*/

// Performance Metrics Function.
const reportWebVitals = onPerfEntry => {
  // Validate Function Parameter.
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically Import Web Vitals.
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Core Web Vitals.
      getCLS(onPerfEntry);    // Cumulative Layout Shift.
      getFID(onPerfEntry);    // First Input Delay.
      getFCP(onPerfEntry);    // First Contentful Paint.
      getLCP(onPerfEntry);    // Largest Contentful Paint.
      getTTFB(onPerfEntry);   // Time to First Byte.
    });
  }
};

// Export Function.
export default reportWebVitals;
