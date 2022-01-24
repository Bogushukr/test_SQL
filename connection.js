import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
const { DB_HOST, DB_PORT, DB_USER, MYSQL_ROOT_PASSWORD, MYSQL_DATABASE } = process.env;

export default mysql.createConnection({
    host: DB_HOST,
    port: Number(DB_PORT),
    database: MYSQL_DATABASE,
    user: DB_USER,
    password: MYSQL_ROOT_PASSWORD
});
