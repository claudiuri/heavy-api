const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.get('/', (_, res) => {
  res.send('Hello World!');
})

app.get('/api', (_, res) => {
  let count = 0.0001;

  for(let i = 0; i <= 1000000; i++){
    count += Math.sqrt(i);
  }

  res.send(`Final count is ${count}`);
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})