# Base build image
FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Then copy the rest
COPY . .

# Build the application
RUN npm run build

# Production image
FROM nginx:alpine

# Adjust Nginx configuration to run as the non-root user (if necessary, typically Nginx alpine handles this)
# Note: Default nginx:alpine config usually runs as nginx user, but explicitly setting USER is good practice.
# If you have custom Nginx config, ensure its worker_processes run as 'nginx' or the user you define.

# Start nginx
CMD ["nginx", "-g", "daemon off;"]