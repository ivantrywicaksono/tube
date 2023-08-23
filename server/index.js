const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const pool = require('./db');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes
app.get('/', async (req, res) => {
  res.send({ page: 'homepage' });
});

app.post('/transaction', async (req, res) => {
  const { date, name, category, nominal, quantity } = req.body;
});

app.listen(PORT, () => {
  console.log(`Server listening on the port ${PORT}`);
});
