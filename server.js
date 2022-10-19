const express = require('express');
const mongoose = require('mongoose');
const dotnev = require('dotenv').config();
const cors = require('cors');
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

const tourRoute = require('./routes/tour.route');
//server
const port = process.env.PORT || 5000;
//DB CONNECTION
const DATABASE_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.l2jwh.mongodb.net/admin`;

mongoose
  .connect(DATABASE_URL, {
    dbName: 'tour-management-system',
  })
  .then(() => {
    console.log('Database connected successfully');
  });


//routes
app.use('/api/v1/tour', tourRoute);
app.get('/', (req, res) => {3
  res.send('API Route is working');
});

app.listen(port, () => {
  console.log('Express is running at port', port);
});
