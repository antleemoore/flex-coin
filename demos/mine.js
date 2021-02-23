const {mineTransaction} = require('./shatest.js');
const sender = process.argv[2];
const reciever = process.argv[3];
const amount = process.argv[4];
mineTransaction(sender, reciever, amount);
