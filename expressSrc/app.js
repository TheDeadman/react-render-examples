const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Enable CORS
app.use(cors());

// GET endpoint for '/api/options'
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

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
