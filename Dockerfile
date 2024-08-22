# Use an official Node.js image.
FROM node:20-alpine

# Set the working directory inside the container.
WORKDIR /app

# Copy package.json and yarn.lock files.
COPY package.json yarn.lock ./

# Install dependencies.
RUN yarn install

# Copy the rest of the application code.
COPY . .

# Build the Next.js application.
RUN yarn build

# Expose the port the app runs on.
EXPOSE 3000

# Start the application.
CMD ["yarn", "start"]
