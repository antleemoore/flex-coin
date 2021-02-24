const express = require('express');
const router = express.Router();
const {
   allTransactions,
   createTransaction,
   mineTransactions,
} = require('../controllers/transactions');

router.get('/', allTransactions);
router.post('/', createTransaction);
router.put('/', mineTransactions);
module.exports = router;
