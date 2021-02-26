const fs = require('fs');
const crypto = require('crypto-js');
const sha256 = require('crypto-js/sha256');

let transactionHistory;
try{
	transactionHistory = fs.readFileSync('transaction-history.txt','utf-8');
} catch(e){
	console.log('Error reading transaction history');
}

let nonse = 0;
if(transactionHistory != ""){
	while(1){
		let hash = sha256(transactionHistory + nonse++).toString(crypto.enc.hex);
		if(hash.substring(0,5) === '081be') {
			console.log(`Block: ${hash}\n|`);
			break;
		}
	}
}
