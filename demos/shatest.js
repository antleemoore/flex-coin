const crypto = require('crypto-js');
const sha256 = require('crypto-js/sha256');
const readline = require('readline');
	const input = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
const nodeRSA = require('node-rsa');

const printTransactions = () => {
	for(let transaction of transactions)
		console.log( `\nTime to Mine: ${transaction.timeTaken}\n`+
				`Sender: ${transaction.sender}\n`+
				`Reciever: ${transaction.reciever}\n`+
				`Amount: ${transaction.amount}\n`+
				`Date: ${transaction.date}\n`+
				`Nonse: ${transaction.nonse}\n`+
				`Hash: ${transaction.hash}\n`)
}

let transactions = [];

module.exports.processTransaction = () => {
	input.question('Press t to process a transaction, p to print all transactions, or q to quit: ', c => {
		if(c === 'q'){ console.log('quitting...'); input.close(); process.exit() }
		else if(c === 'p') { console.log('printing...'); input.close(); printTransactions();}
		else if(c === 't'){
			input.question('Enter the name of the sender: ', sender => {
				input.question('Enter the name of the reciever: ', reciever => {
					input.question('Enter the amount: ', amount => {
						console.log('\nMining transaction, this may take a while...');
							let nonse = 0;
							let transaction = {
								sender:  null, reciever: null, amount: 0, date: new Date().toString(),
								hash: null, nonse: 0, isMined: false, timeTaken: 0,
							};
							const st = Date.now();
							do{
								let hash = sha256(nonse + sender + reciever + amount + transaction.date).toString(crypto.enc.hex);
								if(hash.substring(0,6) === 'ef1c59') {
									const et = Date.now();
									transaction.sender = sender;
									transaction.reciever = reciever;
									transaction.amount = amount;
									transaction.nonse = nonse;
									transaction.hash = hash;
									transaction.isMined = true;
									transaction.timeTaken = (et - st) / 1000;
									transactions.push(transaction);
									break;
								}
								else nonse++;
							} while(1);
							printTransactions();
							input.close();
					})
				})
			})
		}
		else console.log('Invalid input. Try again.');
	})
}
