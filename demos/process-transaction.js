const crypto = require('crypto-js');
const sha256 = require('crypto-js/sha256');
//const nodeRSA = require('node-rsa');

const printTransaction = (transaction) => {
	console.log( `\nTime to Mine: ${Math.floor(transaction.timeTaken)} seconds\n`+
	`Sender: ${transaction.sender}\n`+`Reciever: ${transaction.reciever}\n`+
	`Amount: ${transaction.amount}\n`+`Date: ${transaction.date}\n`+
	`Nonse: ${transaction.nonse}\n`+`Hash: ${transaction.hash}\n`)
}
module.exports.processTransaction = (sender, reciever, amount) => {
	let nonse = 0, printIndex = 0, transaction = {}, ex = 10;
	const st = Date.now();
	while(1){
		let hash = sha256(nonse++ + sender + reciever + amount + new Date().toString())
			.toString(crypto.enc.hex);
		if(hash.substring(0,4) === '1999') {
			transaction={sender, reciever,amount,nonse,hash,
				date: new Date().toString(),isMined:true,
				timeTaken:(Date.now()-st)/1000};
			break;
		}
	}
	printTransaction(transaction);
}
