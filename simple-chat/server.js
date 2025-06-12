const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post('/ask', (req, res) => {
  const userInput = req.body.message;
  res.send({ reply: `You said: "${userInput}". It works!` });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
