# PS6 Redemption : Back-End Application
## Project Structure
- /app : The application folder.
    - /config : The configuration files.
    - /controllers : The logic of the application.
    - /migrations : The migrations of the database.
    - /models : The models of the application.
    - /routes : The routes of the application.
    - /utils : The utilities of the application.
        - /errors : The custom errors.
        - /handlers : The custom error handlers.
    - index.js : The application entry point.

## Dependencies
- [Express](https://www.npmjs.com/package/express) : Framework for building web applications and APIs.
- [Body Parser](https://www.npmjs.com/package/body-parser) : Middleware for parsing request bodies.
- [Morgan](https://www.npmjs.com/package/morgan) : Middleware for logging requests.
- [CORS](https://www.npmjs.com/package/cors) : Middleware for enabling cross origin headers.
- [Sequelize](https://www.npmjs.com/package/sequelize) : Library for managing SQL databases.
- [PG](https://www.npmjs.com/package/pg) : PostgreSQL client.
- [PG Hstore](https://www.npmjs.com/package/pg-hstore) : Library for managing Hstore format.
