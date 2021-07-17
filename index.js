const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/api', function (req, res) {
  let count = 0;

  for(let i = 0; i <= 5000000000; i++){
    count += i;
  }

  res.send(`Final count is ${count}`);
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})