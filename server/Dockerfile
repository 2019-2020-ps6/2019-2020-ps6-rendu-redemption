# Get the Node LTS image.
FROM node:lts-alpine

# Create the directory where the app will be stored.
RUN mkdir -p /usr/src/app

# Change the directory to run next commands.
WORKDIR /usr/src/app

# Copy the dependency definitions.
COPY package.json /usr/src/app/

# Install the dependencies.
RUN npm install --silent --no-progress --no-audit --no-optional --no-fund

# Copy the code.
COPY . /usr/src/app/

# Setup the entrypoint.
RUN dos2unix entrypoint.sh
RUN chmod +x entrypoint.sh
COPY entrypoint.sh /usr/local/bin/

# Expose the port that the app will use.
EXPOSE 3000

# Serve the app.
# CMD ["npm", "run", "dev"]
ENTRYPOINT ["./entrypoint.sh"]
