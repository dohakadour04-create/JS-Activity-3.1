// import te BankAccount class
import { BankAccount } from "./bankAccount.js";

//create the first bank account
const account1 = new BankAccount("1001", "Doha", 1000);

//create the second bank account
const account2 = new BankAccount("1002", "Eva", 500);

// test account 1
cnsole.log("Account 1:");
account1.checkBalance();

account1.deposit(200);
account1.checkBalance();

account1.withdraw(300);
account1.checkBalance();

//test account 2
console.log("Account 2:");
account2.ceckBalance();

account2.deposit(100);
account2.checkBalance();

account2.withdraw(700);
account2.checkBalance();
