//🧐🧐🧐 Control Flow 🧐🧐🧐
/*
Conditionals:
    if...else
    switch case
*/
//✌✌✌ If...else✌✌✌

//Hour
//If hour is between 6am and 12pm: Good Morning!
//If hour is between 12pm and 6pm: Good Afternoon!
//Otherwise: Good Evening!
let hour = 19;
if (hour >= 6 && hour < 12) {
  console.log("Good Morning!");
}
if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon!");
} else {
  console.log("Good Evening!");
}

//✌✌✌ Switch and case✌✌✌
let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator User");
    break;
  default:
    console.log("Unknown User");
    break;
}

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Execise Swaping Variables 🏋️‍♂️🏋️‍♂️🏋️‍♂️
