// app.js
const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => {
  res.send('Hello, Swagger!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});