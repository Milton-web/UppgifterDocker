/**
 * @file Service 2 Express-server
 * @module service2-server
 */

const express = require('express');
const app = express();
const PORT = 4000;

/**
 * Root route.
 * Sends a greeting message for Service 2.
 * 
 * @name GET /
 * @function
 * @param {express.Request} req - Express request object
 * @param {express.Response} res - Express response object
 */
app.get('/', (req, res) => {
    res.send('Hello from service 2!');
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
