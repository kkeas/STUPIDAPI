const express = require('express');
const fs = require('fs');

const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Endpoint to retrieve the sentences
app.get('/sentences', (req, res) => {
  fs.readFile('sentences.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading sentences.json:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const sentences = JSON.parse(data);
      res.status(200).json(sentences);
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
