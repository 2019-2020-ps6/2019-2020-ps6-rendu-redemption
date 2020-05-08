# Get the Node LTS image.
FROM node:lts-alpine

# Create the directory where the app will be stored.
RUN mkdir -p /usr/src/app

# Change the directory to run next commands.
WORKDIR /usr/src/app

# Copy the dependency definitions.
COPY package*.json /usr/src/app/

# Install the dependencies.
RUN npm install

# Copy the code.
COPY . /usr/src/app/

# Expose the port that the app will use.
EXPOSE 4200

# Serve the app.
CMD ["npm", "start"]
