const express = require('express');
require('./config/db');
const cors = require('cors');
const transactions = require('./routes/transactions');
const app = express();
app.use(cors());
app.use(express.json());
app.use(transactions);
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});