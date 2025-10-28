# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.7.0] - 2025-10-28

### Security
- Updated dependencies and configurations to address security vulnerabilities.
- Performed general security hardening across the project.


## [0.6.0] - 2025-07-09

### Changed
- Streamlined project by removing all browser, URL, and fingerprint checks.
- Removed unused configuration files and related logic.
- Simplified `App` to render only the `UserInterface` component.
- Cleaned up and compressed CSS for UI.
- Updated README to show only folder structure.
- Removed all references to unused or deprecated files.
- Updated all version and date headers in changed files.

### Fixed
- Resolved issues with missing or broken imports due to removed checks.
- Fixed blank/white screen by removing references to non-existent files.

### Note
- This is the final version of the project. No further updates or support will be provided.

## [0.5.0] - 2025-07-09

### Added
- Dockerfile for containerized builds and deployment
- Nginx configuration for production deployments
- GitHub Actions workflow for Vultr Container Registry CI/CD
- Improved Azure Static Web Apps CI/CD workflow
- New browser fingerprinting checks using FingerprintJS
- JSON configuration for allowed domains and URLs
- ErrorBoundary component for robust error handling
- Enhanced UI with version, author, and repository info from package.json

### Changed
- Updated Vite config for custom build directory and improved dev server settings
- Refactored browser compatibility checks for easier overrides and future expansion
- Moved UI logic to a dedicated `userInterface.jsx` component
- Updated project structure documentation in README.md
- Improved CSS for UI consistency

### Fixed
- Corrected import paths and file extensions throughout the codebase
- Fixed issues with missing or incorrect repository URLs in the UI
- Improved error handling for browser and domain checks

### Security
- Maintained strict security policy and updated supported versions in SECURITY.md
- Added security-focused Nginx and CI/CD configurations

## [0.4.0] - 2025-06-13

### Added
- Enhanced security documentation
- Dependabot integration for automated dependency updates

### Changed
- Updated security policy to clearly indicate only version 0.4.x is supported
- Refined project structure documentation
- Improved README.md formatting and content organization

### Security
- Removed support for versions 0.2.x and 0.3.x
- Strengthened security update policies

## [0.3.0] - 2025-06-07

### Changed
- Converted all JavaScript files from .js extension to .jsx
- Updated file path references in all imports and comments
- Updated component version numbers
- Added version to vaildURL.json configuration
- Updated documentation to reflect the new file structure

### Fixed
- Consistent file extension usage across the application
- Standardized version numbering in components

## [0.2.0] - 2025-06-05

### Added
- Browser compatibility checking feature
- UI component separation (moved UI logic to userInterface.js)
- GitHub repository integration in the UI
- JSON configuration for valid URLs
- Code linting and formatting tools
- Git hooks with Husky
- Security policy documentation
- Comprehensive project configuration

### Changed
- Improved component architecture with separation of concerns
- Enhanced repository configuration in package.json
- Updated from alpha to stable release
- Reorganized file structure for better maintainability

### Fixed
- Improved error handling for missing repository URLs
- Added fallbacks for unavailable package.json values

## [0.1.0-alpha] - 2025-06-05

### Added
- Initial project setup with Create React App
- Basic React application structure
- Custom file organization for assets (css, js, media)
- Performance monitoring with Web Vitals
- Basic component structure with App.js
- Testing configuration with Jest and Testing Library
- Version display from package.json
- Loading and error states in App component

### Changed
- Moved static assets to organized directory structure
- Enhanced documentation and code comments
- Improved project organization

### Dependencies
- React ^19.1.0
- React DOM ^19.1.0
- Web Vitals ^5.0.2
- Testing Library React ^16.3.0

### Requirements
- Node >= 22.16.0
- NPM >= 10.9.2

## [0.0.0] - 2025-06-04
- Initial commit