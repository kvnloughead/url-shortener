require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Url = require('./models/url');

app.use(express.json());
app.use(express.urlencoded());
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/shorturl');

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/shorturl', (req, res) => {
  const { url } = req.body;
  Url.create({ original_url: url }, (err, doc) => {
    if (err) return res.send(err);
    return res.json(doc);
  })
});

app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
