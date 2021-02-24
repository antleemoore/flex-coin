const Transaction = require('../models/Transaction');

module.exports.allTransactions = async (req, res) => {
   try {
      const all = await Transaction.find({});
      res.send(all);
   } catch (e) {
      console.log(e);
   }
};

module.exports.createTransaction = async (req, res) => {
   try {
      const { sender, reciever, amount } = req.body;
      const transaction = new Transaction({
         sender,
         reciever,
         amount,
         pending: true,
      });
      await transaction.save();
      res.send(transaction);
   } catch (e) {
      console.log(e);
   }
};

module.exports.mineTransactions = async (req, res) => {
   try {
   } catch (e) {
      console.log(e);
   }
};
