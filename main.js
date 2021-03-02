/* This assignment will give you some practice with creating arrays and using their methods. */

// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];

for (const student of students){
  console.log(student);
}


// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value.
// 64 should be printed first and 100 last.

const grades = [100, 80, 110, 75, 83, 64];

for (const grade of grades.reverse()){
  console.log(grade);
}


// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

for(const num of positiveNumbers){
  if (num % 2 === 0){
    console.log(num);
  }
}

// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. 
// There should be four total printings.

const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

for (const num of mixedSignNumbers){
  if(num % 2 === 0){
    console.log(num)
  }
}


// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, 
// simply by deleting them in the following line. Then console.log out each value individually.

const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
let caps = symmetricalCapitals.slice(2, 10);

for (const cap of caps){
  console.log(cap);
}

// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) 
// to the end simply by adding them in the following line, and then console.log out each 
// value individually.

const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];

fibonacciNumbers.push(21, 34);
fibonacciNumbers.unshift(0, 0)

for (const num of fibonacciNumbers){
  console.log(num);
}


// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the array creation 
// from the previous 6 challenges; that is, every value should be placed within the square brackets.  
// Now console.log out each value individually.

const arr = [1, 2, 3, 4, 5];

for (const num of arr){
  console.log(num);
}

// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND 
// .unshift, and then console.log out each value individually.

let arr2 = [];
arr2.push(1, 2, 3);
arr2.unshift(4,5);

for (const num of arr2){
  console.log(num);
}


// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at 
// index 10 (INCLUSIVE), logging out each value individually.

for (let i = 3; students[i] !== students[10]; i++){
  console.log(students[i]);
}

// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting 
// at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; 
// create a new array, loop through the old one, and put values from the original in the 
// new one. Then log out each value of the copy individually.

let newArray = [];

for (let i = 3; students[i] !== students[10]; i++){
  newArray.push(students[i]);
}

for (const student of newArray){
  console.log(student);
}

// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at 
// index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each 
// value of the original array. Notice that the original array didn't get any values taken 
// out of it, because `slice` does NOT modify the original array.

let studentArray = students.slice(3, 10);

for (const student of students){
  console.log(student);
}

for (const student of studentArray){
  console.log(student);
}

// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), 
// then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.

const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

const dinoArray = dinosaurs.splice(4, 6);
dinoArray;

for (const dinosaur of dinosaurs){
  console.log(dinosaur);
}

for (const dino of dinoArray){
  console.log(dino);
}

// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' 
// string as the "separator". Then console.log out that string.

const oneString = dinosaurs.join('*');

console.log(oneString);

// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES 
// change the original array.

for(const dinosaur of dinosaurs){
  console.log(dinosaur);
}

dinosaurs.reverse();

for(const dinosaur of dinosaurs){
  console.log(dinosaur);
}

// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS 
// an array). Then console.log out each value of that new array individually. Now console.log 
// both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.

const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];

const colors = primaries.concat(secondaries);

for (const primary of primaries){
  console.log(primary);
}

for (const secondary of secondaries){
  console.log(secondary);
}

for (const color of colors){
  console.log(color);
}