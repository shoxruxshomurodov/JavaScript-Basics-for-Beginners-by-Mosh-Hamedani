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
//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Prime Numbers🏋️‍♂️🏋️‍♂️🏋️‍♂️
