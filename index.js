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

// ✌✌✌  Mapping an Array ✌✌✌
mapNumbers = [1, 2, 3, 4, -5, 6, 7];

const mapItems = mapNumbers.map((n) => "<li>" + n + "</li>");
console.log(mapItems);

const items = mapNumbers.map((n) => {
  const obj = { value: n };
  return obj;
});
console.log(items);
/*
['<li>1</li>',
'<li>2</li>',
'<li>3</li>',
'<li>4</li>',
'<li>-5</li>',`
'<li>6</li>',
'<li>7</li>' ] */

// ✌✌✌  Reducing an Array ✌✌✌
const reduceArr = [1, -1, 2, 3, 4, 5];
let sum = 0;
for (let n of reduceArr) {
  sum += n;
}
console.log(sum); //14

const reduced = reduceArr.reduce((acc, curr) => {
  return (acc += curr);
}, 0);

console.log(reduced); //14

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Array from Range🏋️‍♂️🏋️‍♂️🏋️‍♂️

const rangeNumber = arrayFromRange(-11, 5);
console.log(rangeNumber);
function arrayFromRange(min, max) {
  let range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }
  return range;
}

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Includes🏋️‍♂️🏋️‍♂️🏋️‍♂️
const includeNumbers = [1, 2, 3, 4, 5, 7, 9];
function include(array, searchElement) {
  for (let i = 0; i < array.length; i++) {
    if (searchElement === i) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(include(includeNumbers, 16));

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Except🏋️‍♂️🏋️‍♂️🏋️‍♂️
const exceptNumbers = [1, 2, 3, 4];
function except(array, excluded) {
  const output = [];
  if (Array.isArray(excluded)) {
    for (let element of array)
      if (!excluded.includes(element)) {
        output.push(element);
      }
  } else {
    return "exluded is not array";
  }
  return output;
}
console.log(except(exceptNumbers, [3]));

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Moving an Element 🏋️‍♂️🏋️‍♂️🏋️‍♂️
const movingNumbers = [1, 2, 3, 4, 7];
const result = move(movingNumbers, 4, 1);
console.log(result);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length) {
    console.error("Invalid offset");
  } else {
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
  }
}

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Count Occurrences 🏋️‍♂️🏋️‍♂️🏋️‍♂️

const occurenceNumbers = [1, 2, 3, 3, 3, 4, 5];
const count = countOccurrences(occurenceNumbers, 3);
console.log(count);
function countOccurrences(array, searchElement) {
  // let count = 0;
  // for (let i = 0; i <= array.length; i++) {
  //   if (array[i] === searchElement) {
  //     count++;
  //   }
  // }
  // return count;
  return array.reduce((acc, curr) => {
    const occurence = curr === searchElement ? 1 : 0;
    return acc + occurence;
  }, 0);
}

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Get Max 🏋️‍♂️🏋️‍♂️🏋️‍♂️
const maxNumbers = [1, 2, 3, 3, 3, 4, 5, 6];
const max = getMax(maxNumbers);
console.log(max);

function getMax(array) {
  if (array.length === 0) {
    return undefined;
  }
  // let max = 0;
  // for (let i = 0; i <= array.length; i++) {
  //   if (max < array[i]) {
  //     max = array[i];
  //   }
  // }
  // return max;

  // let max = 0;
  // return array.reduce((acc, curr) => {
  //   max = curr > max ? curr : max;
  //   return (acc = max);
  // });

  return array.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
  });
}

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Movies 🏋️‍♂️🏋️‍♂️🏋️‍♂️

// All all movies in 2017 with rating  > 4
// Sort them by their rating
// Descending order
// Pick their title
const movies = [
  {
    title: "A",
    year: 2021,
    rating: 4.5,
  },
  {
    title: "B",
    year: 2017,
    rating: 4.8,
  },
  {
    title: "C",
    year: 2017,
    rating: 3,
  },
  {
    title: "D",
    year: 2017,
    rating: 4.5,
  },
  {
    title: "F",
    year: 2013,
    rating: 4.5,
  },
];

function moviesSort(movies) {
  const titles = movies
    .filter((movie) => movie.year === 2017 && movie.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map((m) => m.title);
  console.log(titles);
}

moviesSort(movies);
