# React App

> A modern React application powered by Vite.

## Quick Start

```bash
npm install
npm start
```

## Scripts

- `npm start` – Start development server
- `npm test` – Run tests
- `npm run build` – Build for production

## Structure

```
src/        # Source code
public/     # Static files
```


## Configure Vultr Container Registry

To deploy or use this project with Vultr Container Registry, set the following secrets in your deployment environment or CI/CD pipeline:

- `VULTR_API_KEY` – Your Vultr API key
- `VULTR_REGISTRY_URL` – The URL of your Vultr container registry (e.g., `us-east1.vultrcr.com`)
- `VULTR_REGISTRY_NAME` – The name of your Vultr container registry (e.g., `my-registry`)
- `VULTR_USER` – Your Vultr username (format: UUID, e.g., `xxxx-xxxx-xxxx-xxxx`)

Ensure these secrets are securely stored and not committed to version control.

## Security

See [SECURITY.md](SECURITY.md) for security policy and supported versions.

## License

MIT – see LICENSE