//🧐🧐🧐 Operators 🧐🧐🧐
/*

 Arithmetic
 Assignment
 Comparison
 Logical
 Bitwise

*/
//✌✌✌ Arithmetic Operators✌✌✌
let x = 12;
let y = 3;

console.log(x + y); //Addition
console.log(x - y); //Subtraction
console.log(x * y); //Multiplication
console.log(x / y); //Division
console.log(x % y); //Remainder
console.log(x ** y); //Exponentiation

//Increment (++)
// console.log(++x); //13
console.log(x++); //12
console.log(x); //13

// Decrement (--)
// console.log(--y) //2
console.log(y--);
console.log(y);

// Assignment Operators✌✌✌
let number = 22;

//The Same
number++;
number = number + 1;

//The Same
number += 5;
number = number + 5;

//The Same
number *= 5;
number = number * 5;

//Comparison  Operators ✌✌✌

let k = 12;

//Relational
console.log(k > 11); //true
console.log(k >= 12); //true
console.log(k < 11); //false

//Equality
console.log(k === 12); //true
console.log(k !== 12); //false

//Strict Equality (TYPE + VALUE) ===
console.log(1 === 1); //true
console.log(1 === "1"); //false

//Lose Equality (VALUE) ==
console.log(1 == 1); //true
console.log(1 == "1"); //true

//✌✌✌Ternary  Operators ✌✌✌
/*
If  customer has more than 100 points, they are a 'gold' customer,
otherwise, they are 'silver' customer
*/

let points = 110;
let type = points > 100 ? "gold" : "silver";
console.log(type + " " + "customer");

//Logical Operators ✌✌✌
//&& AND
//|| OR
//! NOT

//Logical AND (&&)
//Returns TRUE if both operands are TRUE☝☝☝

console.log(true && true); //true
console.log(true && false); //false
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log("eligibleForLoan", eligibleForLoan); //true
highIncome = false;
goodCreditScore = true;
eligibleForLoan = highIncome && goodCreditScore;
console.log("eligibleForLoan", eligibleForLoan); //false

//Logical OR (||)
//Returns TRUE if one of the operands are TRUE☝☝☝
console.log(true || true); //true
console.log(true || false); //false
highIncome = false;
goodCreditScore = true;
eligibleForLoan = highIncome || goodCreditScore;
console.log("eligibleForLoan", eligibleForLoan); //true

//Logical NOT (!)
let eligiblle = !eligibleForLoan;
console.log("eligiblle", eligiblle); //false

let applicationRefuse = !eligiblle;
console.log("applicationRefuse", eligibleForLoan);

//Falsy (false)
//undefined
//null
//0
//false
//empty string ""
//NaN

//Anything that is not Falsy => Truthy
console.log(false || "Shoxrux"); // Shoxrux

//Short-circuting
console.log(false || 1 || 2); // 1
let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log("currentColor", currentColor); //red

//✌✌✌Bitwise Operators ✌✌✌

//1=00000001
//2=00000010
//3=00000011

console.log(1 | 2); //3 //Bitwise OR
console.log(1 & 2); //0 //Bitwise AND

//Read, Write , Execute
//00000100
//00000010
//00000001
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | executePermission;
console.log("myPermission", myPermission);

let message = myPermission & readPermission ? "YES" : "NOT";
console.log(message);

//✌✌✌Operators Precedence✌✌✌

let l = 2 + 3 * 4;
console.log(l); //14

let i = (2 + 3) * 4;
console.log(i); //20

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Execise Swaping Variables 🏋️‍♂️🏋️‍♂️🏋️‍♂️
let a = "red";
let b = "blue";
let c = a;
a = b;
b = c;
console.log("A=", a);
console.log("B=", b);
