// Require necessary dependencies: Express for creating the server,
// Morgan for logging HTTP requests, and Body Parser for parsing request bodies.
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Create an Express application instance.
const app = express();

// Middleware: Morgan middleware for logging HTTP requests in development mode.
app.use(morgan('dev'));

// Middleware: Body Parser middleware to parse JSON bodies and URL-encoded bodies.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route: Responds with a simple message when accessing the root URL ('/').
app.get('/', (req, res) => {
    res.send('Hello, welcome to the fish server!');
});

// Route: Responds with a simple message when accessing the '/about' URL.
app.get('/about', (req, res) => {
    res.send('This is a simple fish server built with Express.');
});

// Middleware: Handles requests that do not match any defined routes,
// responding with a 404 Not Found error.
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

// Defines the port number on which the server will listen for incoming requests.
const PORT = 3000;

// Starts the Express server, listening on the defined port.
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
