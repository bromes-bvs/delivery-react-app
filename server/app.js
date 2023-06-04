require('dotenv').config();
const express = require('express');
const cors = require('cors');

const productsRouter = require('./routes/products');
const userRouter = require('./routes/users');

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.static('public'));

app.use('/api/users', userRouter);
app.use('/api/products', productsRouter);
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(err.status).json({ message: err.message });
});

module.exports = app;
