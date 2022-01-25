import dotenv from 'dotenv';

import app from './app.js';
import connection from './connection.js';

dotenv.config();

const { SERVER_PORT = 3000, DB_HOST, DB_PORT } = process.env;
(async () => {
    try {
        await connection;

        console.info(`Connected to database ${DB_HOST}:${DB_PORT}!`);
        app
            .listen(SERVER_PORT, () => {
                console.info(`Server start running on port ${SERVER_PORT}!`);
            })
            .on('error', error => {
                console.error(
                    `Server can\'t start on port ${SERVER_PORT}! Reason: ${error}`
                );
                process.exit(1);
            });
    } catch (error) {
        console.error(`Can\'t connect to database ${DB_HOST}:${DB_PORT}!\nReason: ${error}`);
    }
})();
