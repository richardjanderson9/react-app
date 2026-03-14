# Stage 1: Build
# Pinning to a specific Alpine 3.21/3.23 compatible node image
FROM node:22.14.0-alpine3.21 AS build
WORKDIR /app
COPY package*.json ./
# Clean install to match your package-lock exactly
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production
# Upgrading to the version Snyk recommended: nginx:1.29.6-alpine3.23
FROM nginx:1.29.6-alpine3.23
# Note: React 'npm run build' usually outputs to 'dist' in Vite. 
# Double check if your folder is /app/build or /app/dist
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]