const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes
app.get('/', (req, res) => {
  res.send('Homepage');
});


app.listen(PORT, () => {
  console.log(`Server listening on the port ${PORT}`);
});
