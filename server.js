const express = require('express');
const path = require('path');

const app = express();

app.get('/search', (req, res) => {
  console.log(req.query);
  const { query } = req.query;
  if (query === 'none') {
    res.json([]);
    return;
  }
  const options = [
    `${query} - Option 1`,
    `${query} - Option 2`,
    `${query} - Option 3`,
    `${query} - Option 4`,
    `${query} - Option 5`,
    `${query} - Option 6`
  ];
  res.json(options);
});

// Serve the static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));


// Catch-all route to serve `index.html` for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
