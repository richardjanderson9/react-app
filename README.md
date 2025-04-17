# React App

A sample React application created with Create React App and deployed to Azure Static Web Apps.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.\
The project uses Jest and React Testing Library for testing.

### `npm run build`

Builds the app for production to the `build` folder.\
The build is minified and optimized for best performance.

## Deployment

This project is configured for automatic deployment to Azure Static Web Apps through GitHub Actions. The deployment workflow is defined in [`.github/workflows/azure-static-web-apps-salmon-sand-09e794203.yml`](.github/workflows/azure-static-web-apps-salmon-sand-09e794203.yml).

## Project Structure

- `public/` - Contains static assets and the main `index.html`
- `src/` - Contains the React application source code
  - `App.js` - Main application component
  - `index.js` - Application entry point
  - `reportWebVitals.js` - Performance measurement utilities

## Dependencies

- React 19.1.0
- React DOM 19.1.0
- React Scripts 5.0.1
- Testing Library (Jest DOM and React)
- Web Vitals

## Development Tools

- ESLint with React configuration
- Prettier for code formatting
- Husky for Git hooks
- Lint Staged for pre-commit linting

## Browser Support

### Production
- Market share > 0.2%
- Not dead
- Not Opera Mini

### Development
- Latest Chrome
- Latest Firefox
- Latest Safari

## Repository

For issues and source code, visit the [GitHub repository](https://github.com/richardjanderson9/react-app).