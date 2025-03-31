// Import the express module
const express = require('express');

// Create an instance of the express app
const app = express();

// Set up a basic route for the homepage (root route)
app.get('/', (req, res) => {
  res.send('Welcome to the Conference!');
});

// Start the server and listen on port 8080
app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
