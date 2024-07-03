const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, welcome to the fish server!');
});

app.get('/about', (req, res) => {
    res.send('This is a simple fish server built with Express.');
});

app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});