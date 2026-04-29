FROM node:22-alpine
WORKDIR /app
COPY . .
CMD ["echo", "Hello from Docker"]
