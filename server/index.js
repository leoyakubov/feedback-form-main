const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./config/connectdb');

const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.post('/store-data', (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };
  const sql = 'INSERT INTO users SET ?';

  connection.query(sql, data, (err) => {
    if (err) {
      res.status(400).send('Error');
    } else {
      res.status(200).send('Saved');
    }
  });
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on ${port}`);
});
