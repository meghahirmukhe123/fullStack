const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser'); // Adding body-parser for parsing JSON
const jwt = require('jsonwebtoken'); // Adding JWT for token generation

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'] // Add any other headers your frontend uses
})); // Allow all origins for testing purposes, you can set specific origins as needed
app.use(bodyParser.json()); // Use body-parser middleware for parsing JSON

const SECRET_KEY = '5367566B59703373367639792F423F4528482B4D6251655468576D5A71347437'; // Replace with your actual secret key

// Sample route for generating a token
app.post('/auth/token', (req, res) => {
  const { username, password } = req.body;

  // Simulate user authentication (replace this with your actual authentication logic)
  if (username === 'username' && password === 'password') {
    // Generate a new token for the user
    const token = jwt.sign({ username }, SECRET_KEY);

    res.json({ token });
  } else {
    res.status(403).json({ message: 'Invalid credentials' });
  }
});

// Other routes and middleware can be added here

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

