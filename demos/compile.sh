#!/bin/bash

# this takes three arguments:
clear
menu(){
	echo "t - process transaction"
	echo "v - view pending transactions"
	echo "m - mine block"
	echo "b - view block chain"
	echo "c - clear transaction history"
	echo "h - help"
	echo "q - quit"
	echo
}
echo -n "(h for help) > "
read ch
echo
while [ 1 ]
do
	if [ -z "$ch" ]
	then
		echo "Command cannot be empty."
		echo
	elif [ $ch == 'clear' ]
	then
		clear
	elif [ $ch == 'h' ]
	then
		menu
	elif [ $ch == 'v' ]
	then
		less transaction-history.txt
	elif [ $ch == 'b' ]
	then
		less block-chain.txt
	elif [ $ch == 'm' ]
	then
		node mine-block.js >> block-chain.txt
		> transaction-history.txt
		echo "Block mining finished."
		echo "If transaction history was empty, no changes will have been made to the block chain."
		echo
	elif [ $ch == 't' ]
	then
		echo -n "Enter the sender: "
		read sender

		echo -n "Enter the reciever: "
		read reciever

		echo -n "Enter the amount: "
		read amount

		echo -n "Processing transaction, this may take a while..."

		node make-transaction.js $sender $reciever $amount >> transaction-history.txt

		echo "Finished processing transaction!"
		echo "Check transaction-history.txt for results."
		echo
	elif [ $ch == 'c' ]
	then
		echo -n "Are you sure? [ Y/n ] "
		read check
		if [[ $check == 'y' || $check == 'Y' ]]
		then
			> transaction-history.txt
		else
			echo -n
		fi
		echo
	elif [ $ch == 'q' ]
	then
		echo "Quitting..."
		exit 0
	else
		echo "Invalid input, please try again."
		echo
	fi
	echo -n "> "
	read ch
	echo
done
