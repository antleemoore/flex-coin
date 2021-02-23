#!/bin/bash

# this takes three arguments:
clear
menu(){
	echo "t - process transaction"
	echo "v - view transaction history"
	echo "c - clear transaction history"
	echo "q - quit"
	echo -n "Choice: "
}
menu
read ch
echo
while [ 1 ]
do
	if [ -z "$ch" ]
	then
		echo "Command cannot be empty."
	elif [ $ch == 'v' ]
	then
		less transaction-history.txt
	elif [ $ch == 't' ]
	then
		echo -n "Enter the sender: "
		read sender

		echo -n "Enter the reciever: "
		read reciever

		echo -n "Enter the amount: "
		read amount

		echo -n "Mining transaction, this may take a while..."

		node mine.js $sender $reciever $amount >> transaction-history.txt

		echo "Finished mining transaction!"
		echo "Check transaction-history.txt for results."
	elif [ $ch == 'c' ]
	then
		> transaction-history.txt
	elif [ $ch == 'q' ]
	then
		echo "Quitting..."
		exit 0
	else
		echo "Invalid input, please try again."
	fi
	menu
	read ch
	echo
done
