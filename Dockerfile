# ----------- Stage 1: Build Stage -----------
FROM node:18-alpine AS builder

# Install bash (optional, good for debugging)
RUN apk add --no-cache bash

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy all source files
COPY . .

# Build the app (outputs to /app/dist by default for Vite)
RUN npm run build

# ----------- Stage 2: Production Stage -----------
FROM nginx:stable-alpine

# Remove default nginx website files
RUN rm -rf /usr/share/nginx/html/*

# Copy your custom nginx config file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built files from builder stage to nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# (Optional) Install bash and curl in production image for debugging
RUN apk add --no-cache bash curl

# Expose port 80 for HTTP
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

