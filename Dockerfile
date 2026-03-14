# Stage 1: Build
FROM node:22.14.0-alpine3.21 AS build

WORKDIR /app

# Install ALL dependencies (build tools are required to compile)
COPY package*.json ./
RUN npm ci && npm cache clean --force

# Copy source and build
COPY . .
RUN npm run build


# Stage 2: Production
FROM nginx:1.29.6-alpine3.23

# Patch Snyk zlib vulnerabilities
RUN apk add --no-cache --upgrade zlib

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built app
COPY --from=build /app/dist /usr/share/nginx/html

# Copy secure nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set up permissions for non-root Nginx
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

# Switch to non-root user
USER nginx

# Expose an unprivileged port instead of 80
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]