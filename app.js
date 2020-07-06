require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'what-can-i-make', 'build')));

// create a GET route
app.get('/express_backend', (req, res) => {
	res.json({ key: process.env.API_KEY });
});

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'what-can-i-make', 'build', 'index.html'));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
