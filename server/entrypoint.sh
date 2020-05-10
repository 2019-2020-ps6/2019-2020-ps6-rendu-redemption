#!/bin/sh

# Wait for database to be ready.
until nc -z -v -w60 postgres 5432
do
  echo 'Waiting for database connection...'
  sleep 5
done

# Run migrations and seeds.
npx sequelize db:migrate:undo:all
npx sequelize db:migrate
npx sequelize db:seed:all

# Run the server.
npm run dev
