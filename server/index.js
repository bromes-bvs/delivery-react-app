const mongoose = require('mongoose');
const server = require('./app');

const { DB_HOST, PORT } = process.env;

mongoose.set('strictQuery', true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    server.listen(PORT);
    console.log('Database connection successful');
  })
  .catch(err => {
    console.log(err.message);
    process.exit(1);
  });
