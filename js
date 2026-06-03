class Bank{
    constructor(amount){
        this.amount = amount;
    }
    getBalance(){
        console.log("Balance is: " + this.amount)
    }
    deposite(amount){
        if(amount > 10000){
            this.amount = this.amount;
            console.log("you can not deposite certain amount");
        }
        else{
            this.amount = this.amount + amount;
        }
    }
    withdraw(amount){
        if(this.amount < amount - 2000)
            this.amount = this.amount - amount;
            console.log("you can not withdraw that amount account balance minimum is 2000");
            console.log("");
    }
}
var myobj = new Bank(25000);
myobj.deposite(10000);
myobj.getBalance()
myobj.withdraw((35000))
myobj.getBalance()