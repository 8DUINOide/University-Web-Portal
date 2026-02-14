const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the root folder
app.use(express.static(__dirname));

// Route to serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});