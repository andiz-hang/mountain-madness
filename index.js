const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.render('game');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});


// this sucks