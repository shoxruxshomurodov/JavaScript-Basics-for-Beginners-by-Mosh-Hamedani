//🧐🧐🧐 Arrays 🧐🧐🧐

//✌✌✌ Introduction ✌✌✌
//Adding new elements
//Finding elements
//Removing elements
//Splitting arrays
//Combining arrays

//✌✌✌ Adding  Elements ✌✌✌
const numbers = [3, 4];
//End
numbers.push(5, 6);
//Begin
numbers.unshift(1, 2);
//Middle
numbers.splice(1, 0, 8);
console.log(numbers);

//✌✌✌ Finding Elements (Primitives) ✌✌✌
const nums = [1, 2, 3, 1, 4];
console.log(nums.indexOf(2));
console.log(nums.lastIndexOf(1));
console.log(nums.indexOf(1) !== -1);
console.log(nums.includes(1));

//✌✌✌ Finding Elements (Reference Types) ✌✌✌
const courses = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "Node" },
  { id: 3, name: "React" },
];
// const course = courses.find(function (course) {
//   return course.name === "Javascript";
// });
// const courseIndex = courses.findIndex(function (course) {
//   return course.name === "Node";
// });
// console.log(course); //{id: 1, name: 'Javascript'}
// console.log(courseIndex); //1

//✌✌✌ Arrow Functions ✌✌✌

const course = courses.find((course) => {
  return course.name === "Javascript";
});
const courseIndex = courses.findIndex((course) => {
  return course.name === "Node";
});
console.log(course); //{id: 1, name: 'Javascript'}
console.log(courseIndex); //1

//✌✌✌ Removing Elements ✌✌✌
const numbersRemoving = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Adding elements
numbersRemoving.push(); //last
numbersRemoving.unshift(); //beginning
numbersRemoving.slice(); //somewhere

//Removing elements
numbersRemoving.pop(); //last
console.log(numbersRemoving); // [1, 2, 3, 4, 5, 6, 7, 8, 9 ]
numbersRemoving.shift(); //beginning
console.log(numbersRemoving); // [ 2, 3, 4, 5, 6, 7, 8, 9 ]
numbersRemoving.splice(2, 1); //somewhere
console.log(numbersRemoving); // [ 2, 3, 5, 6, 7, 8, 9 ]

//✌✌✌ Emptying an Array ✌✌✌

let numbersEmpty = [1, 2, 3, 4, 5, 6, 7, 8];
let anotherNumbers = numbersEmpty;

// Solution 1
// numbersEmpty = [];
// console.log(numbersEmpty); // []
// console.log(anotherNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]

// Solution 2
// numbersEmpty.length = 0;
// console.log(numbersEmpty); // []
// console.log(anotherNumbers); // []

// Solution 3
// numbersEmpty.splice(0, numbersEmpty.length);
// console.log(numbersEmpty); //[]
console.log(anotherNumbers); //[1, 2, 3, 4, 5, 6, 7, 8]

// Solution 4
while (numbersEmpty.length > 0) {
  numbersEmpty.pop();
}
console.log(numbersEmpty); // []
console.log(anotherNumbers); // []

//✌✌✌ Combining and Slicing Arrays ✌✌✌
const first = [1, 2, 3];
const second = [4, 5, 6, 7];
//Concat
const concated = first.concat(second);
console.log(concated); // [1, 2, 3, 4, 5, 6, 7]
//Slice
// const slice = concated.slice(2, 4);
// console.log(slice); // [3, 4]

const slice = concated.slice(2);
console.log(slice); // [3, 4 , 5, 6, 7]

//✌✌✌ The Spread Operator ✌✌✌
const a = [1, 2, 3, 4, 5, 6, 7];
const b = [8, 9, 10];
const spread = [...a, ...b];
console.log(spread); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//✌✌✌  Iterating an Array ✌✌✌
const iterate = [1, 2, 3, 4, 5, 6, 7];
for (let number of iterate) {
  console.log(number); // 1, 2, 3, 4, 5, 6, 7
}

iterate.forEach((number) => {
  console.log(number); // 1, 2, 3, 4, 5, 6, 7
});

iterate.map((number) => {
  console.log(number); // 1, 2, 3, 4, 5, 6,
});

//✌✌✌ Joining Arrays ✌✌✌
//join() return string
const numberJoin = [1, 2, 3, 4, 5, 6, 7];
const joined = numberJoin.join(",");
console.log(joined); // 1, 2, 3, 4, 5, 6

const message = "this is my first message";
const parts = message.split(" ");
console.log(parts); // 0 : "this", 1 : "is", 2 : "my", 3 : "first", 4 : "message"
const partsJoin = parts.join("-");
console.log(partsJoin); //this-is-my-first-message

//✌✌✌ Sorting Arrays ✌✌✌
const sortedArrays = [1, 7, 3, 4, 2];
sortedArrays.sort();
console.log(sortedArrays); // [ 1, 2, 3, 4, 7 ]

//A > a , B > b
const coursess = [
  {
    id: 1,
    name: "Node JS",
  },
  {
    id: 2,
    name: "Javascript",
  },
];

coursess.sort(function (a, b) {
  if (a.name < b.name) return -1;
  else if (a.name > b.name) return 1;
  return 0;
});

console.log(coursess); //[ { id: 2, name: 'Javascript' }, { id: 1, name: 'Node JS' } ]

//✌✌✌ Testing the Elements of an Array ✌✌✌
const testingNumbers = [1, 2, 3, -4, 5, 6];
const allPositive = testingNumbers.every(function (value) {
  return value >= 0;
});
console.log(allPositive); // false

const atLeastOnePositive = testingNumbers.some(function (value) {
  return value >= 0;
});

console.log(atLeastOnePositive); // true

//✌✌✌  Filtering an Array ✌✌✌

const filterNumber = [1, 2, 3, 4, -5, 6, 7];
const filtered = filterNumber.filter((value) => {
  return value >= 0;
});
console.log(filtered); // [ 1, 2, 3, 4, 6, 7 ]

mapNumbers = [1, 2, 3, 4, -5, 6, 7];

const mapItems = mapNumbers.map((n) => "<li>" + n + "</li>");
console.log(mapItems);
/*
['<li>1</li>',
'<li>2</li>',
'<li>3</li>',
'<li>4</li>',
'<li>-5</li>',
'<li>6</li>',
'<li>7</li>' ] */

// ✌✌✌  Mapping an Array ✌✌✌
//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Prime Numbers🏋️‍♂️🏋️‍♂️🏋️‍♂️
