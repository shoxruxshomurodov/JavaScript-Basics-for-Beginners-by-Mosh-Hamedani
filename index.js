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
console.log(nums.indexOf("1"));
console.log(nums.lastIndexOf(1));
console.log(nums.indexOf(1) !== -1);
console.log(nums.includes(1));
console.log("first");
//✌✌✌ Finding Elements (Reference Types) ✌✌✌

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Prime Numbers🏋️‍♂️🏋️‍♂️🏋️‍♂️
function findOccurrences(array, searchElement) {
  let occurence = 0;
  array.reduce((acc, curr) => {
    occurence = curr === searchElement ? 1 : 0;
    return (occurence = +curr);
  }, 0);
  return occurence;
}
console.log(findOccurrences([1, 2, 3, 1, 1, 4], 1));
