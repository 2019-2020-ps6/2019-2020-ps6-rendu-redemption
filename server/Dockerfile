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
RUN chmod +x entrypoint.sh

# Expose the port that the app will use.
EXPOSE 3000

# Set the server in development mode.
ENV NODE_ENV="development"

ENTRYPOINT ["/bin/sh", "-c", "/usr/src/app/entrypoint.sh"]
