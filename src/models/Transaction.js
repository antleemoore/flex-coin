const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const TransactionSchema = new Schema(
   {
      sender: { type: String, required: true },
      reciever: { type: String, required: true },
      amount: { type: Number, required: true },
      pending: { type: Boolean, required: true, default: true },
      hash: String,
   },
   { timestamps: true }
);

module.exports = model('Transaction', TransactionSchema);
