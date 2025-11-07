/**
 * @file Service 1 Express-server
 * @module service1-server
 */

const express = require('express');
const app = express();
const PORT = 3000;

/**
 * Root route.
 * Sends a greeting message.
 * 
 * @name GET /
 * @function
 * @param {express.Request} req - Express request object
 * @param {express.Response} res - Express response object
 */
app.get('/', (req, res) => {
    res.send('Hello from service 1!');
});

/**
 * Test error route.
 * Logs an error and responds with 500 status.
 * 
 * @name GET /test-error
 * @function
 * @param {express.Request} req - Express request object
 * @param {express.Response} res - Express response object
 */
app.get('/test-error', (req, res) => {
    console.error('TEST ERROR: Något gick fel');
    res.status(500).send('Test error triggered');
});

/**
 * Start the server.
 * Listens on the configured PORT and logs the URL.
 * 
 * @function
 */
app.listen(PORT, () => {
     console.log(`Server running on: http://localhost:${PORT}`);
});
