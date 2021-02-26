const {processTransaction} = require('./process-transaction.js');
const sender = process.argv[2] ?? "Anonymous";
const reciever = process.argv[3] ?? "Anonymous";
const amount = process.argv[4] ?? "Undisclosed";
processTransaction(sender, reciever, amount);
