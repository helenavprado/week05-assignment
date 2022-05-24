/*
In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.

Change Calculator
We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

Instruction
Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)
*/

const calculateChange = function(total, cash) {
let twenty = 0;
let ten = 0;
let five = 0;
let toonie = 0;
let loonie = 0;
let quarter = 0;
let dime = 0;
let nickel = 0;
let penny = 0
let change = cash - total;
let newChange = change/100;

if (newChange >= 20) {
  twenty = Math.floor(newChange / 20);
  newChange = newChange % 20;
}
if (newChange >= 10) {
  ten = Math.floor(newChange / 10);
  newChange = newChange % 10;
}
if (newChange >= 5) {
  five = Math.floor(newChange /5);
  newChange = newChange % 5;
}
if (newChange >= 2) {
  toonie = Math.floor(newChange / 2);
  newChange = newChange % 2;
}
if (newChange >= 1) {
  loonie = Math.floor(newChange / 1);
  newChange = newChange % 1;
}
if (newChange >= 0.25) {
  quarter = Math.floor(newChange / 0.25);
  newChange = newChange % 0.25;
}
if (newChange >= 0.10) {
  dime = Math.floor(newChange / 0.10);
  newChange = newChange % 0.10;
}
if (newChange >= 0.05) {
  nickel = Math.floor(newChange / 0.05);
  newChange = newChange % 0.05;
}
if (newChange > 0.009) { //arrendondar pra duas casas decimais
  penny = Math.round(newChange / 0.01); 
}

return `{ten: ${ten}, one: ${loonie}, Toonie: ${toonie}, dime: ${dime}, quarter: ${quarter}, penny: ${penny}} `

};

console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }



