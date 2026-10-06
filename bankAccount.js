// Define the class
export class BankAccount {

// Constructor initialises the account properties
constructor(accountNumber, accountHolder, balance){
  this.accountNumber = accountNumber;
  this.accountHolder = accountHolder;
  this.balance = balance;
}

//method to withdraw money
withdraw(amount){
  if (amount <= this.balance){
    this.balance -= amount;
    console.log('${amount} withdraw successfully.');
  } else{
    cnsole.log("Insufficient fund.");
  }
}

// method to check the current blance
checkBalance(){
  console.log('Current balance: ${this.balance}');
  }
}
