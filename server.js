const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Mock database
const users = [];

// Routes
app.post('/api/greet', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  // Store user in mock database
  users.push({ name, email });

  // Respond with a greeting message
  res.json({ message: `Hello ${name}, welcome to the Full Stack App!` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
