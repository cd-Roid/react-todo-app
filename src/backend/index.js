const express = require('express');
const  _ = require('express-json');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use(_);
app.listen(port, () => {
  console.log(`Todo Backend listening at http://localhost:${port}`);
})