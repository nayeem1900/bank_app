class BankAccount {
    constructor(accountNumber, ownerName, balance) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount} into account ${this.accountNumber}`);
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient funds");
      } else {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this.accountNumber}`);
      }
    }
  
    getBalance() {
      return this.balance;
    }
  
    displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      console.log(`Balance: ${this.balance}`);
    }
  }
  
  // Example usage:
  const account1 = new BankAccount(10001, "Harun Or Rashid", 1000);
  account1.deposit(500);
  account1.withdraw(200);
  account1.displayAccountInfo();
  
  
  /*let n1 = 16;
  let n2 = 4;
  let sum = n1+n2;
  console.log(sum);
  */
