const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/videos', (req, res) => {
});

app.get('/api/posts', (req, res) => {
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 8000;
app.listen(port);

console.log(`AllAboutCovid19.com listening on ${port}`);
