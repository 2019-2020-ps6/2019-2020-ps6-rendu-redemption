#!/bin/sh

echo 'Downloading client dependencies...'
cd client
npm install

echo 'Downloading server dependencies...'
cd ../server
npm install

echo 'Starting the project...'
cd ..
sudo docker-compose up --build
