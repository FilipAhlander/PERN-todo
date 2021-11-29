const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

app.use(cors());
app.use(express.json());

app.post('/todos', async (req, res) => {
  try {
    
  } catch (err) {
    console.err(err.message);
  }
});

app.listen(5000, () => {
    console.log('Listening on port 5000');
})