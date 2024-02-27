const express = require('express');

const app = express();
const port = 1245;

app.get('/', (_req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`This app listening on port ${port}`);
});

module.exports = app;
