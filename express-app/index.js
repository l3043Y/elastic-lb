const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const containerId = os.hostname(); // Get the container ID (hostname)
  res.send(`<h1>Container ID: ${containerId}</h1>`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
