const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { readdirSync } = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());

//routes
readdirSync('./routes').map((route) => {
  app.use('/api', require('./routes/' + route));
});

//db
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log('Database Connected'))
  .catch((err) => {
    console.log(err);
  });
app.get('/', (req, res) => {
  res.send('Welcome to Cardboard');
});

//port
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is up and running om0
   ${PORT}`);
});
