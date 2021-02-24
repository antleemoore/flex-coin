const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const transactionRoutes = require('./routes/transactions');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/tony-coin', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
   console.log('Connected to localhost db');
});

app.use('/transactions', transactionRoutes);

app.listen(port, () => {
   console.log('Listening on port: 3000');
});
