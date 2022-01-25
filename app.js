import express from 'express';
import helmet from 'helmet';
import errors from 'http-errors';
import connection from './connection.js';
const app = express();

app.use(helmet());
app.use(express.json({ limit: 200000 }));

app.get('/users', async (_, response, next) => {
    try {
        const [data] = await connection.query('SELECT * FROM users');
        return response.status(200).json(data);
    } catch (error) {
        return next(new errors.InternalServerError());
    }
});

app.post('/user', async (request, response, next) => {
    const { userId } = request.body;
    try {
        if (userId && typeof userId === 'number') {
            const data = await connection.query(`SELECT * FROM users WHERE id = ?`, [userId]);
            if (data.length === 0) {
                return response.status(400).json(new errors.BadRequest());
            }
            return response.status(200).json(...data);
        } else {
            return response.status(400).json(new errors.BadRequest());
        }
    } catch (error) {
        return next(new errors.InternalServerError());
    }
});

app.put('/user', async (request, response, next) => {
    const { userName } = request.body;
    try {
        if (userName && typeof userName === 'string') {
            const [{ insertId: userId }] = await connection.query(
                `INSERT INTO users (userName) VALUES ("${userName}")`
            );
            return response.status(201).json({ userId, status: 201 });
        } else {
            return response.status(400).json(new errors.BadRequest());
        }
    } catch (error) {
        return next(new errors.InternalServerError());
    }
});

export default app;
