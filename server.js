const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes

app.get('/api/data', (req, res) => {
  // handle GET request
  res.send('Data from the Linux system');
});

app.post('/api/data', (req, res) => {
  // handle POST request
  res.send('Data changed successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
