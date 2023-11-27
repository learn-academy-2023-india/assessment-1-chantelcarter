// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// input - 2 arrays that will be combined
// output - return the length of the variables
// ther are built in methods that i will have to go into the syllabus to look up because i can't remember them right off the top of my head.
// found .concat in arrays
console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)
// .concat joins the arrays but didn't give me the expected output of 9
// console.log(padres1984WorldSeriesRuns.length)
// adding .lenth to padres1984 only gives me the length of 1984 not both arrays together. so i'm going back to the syllabus. i think i have to somehow make 1984 and 1998 into a new variable?
//going to try and add .push to 1984 and put 1998 in parenthese.
// console.log(padres1984WorldSeriesRuns.push(padres1998WorldSeriesRuns))
// output changed to 6, and i'm assuming that's because it simply added "1998" to the end of the 1994 array instead of joining the values included in "1998"
// reached out the the group and was helped toward the answer. I didn't think that i could add an additional built-in method to the end.


// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code:
// input - string
// output - string reversed
// i can use a built in method to turn the string into and array and then reverse the array and turn the array back into a string to give me the expected output
// console.log(currentCohort.split("LEARN 2023"))
// output ----> [ '', '' ]
// console.log(currentCohort.split(LEARN 2023))
// output ----> SyntaxError: missing ) after argument list
// i thought that i would be able to remove "" for it to work
// just realized that i was overthinking once again and all i needed to do was pay attention tot he examples in the syllabus
// console.log(currentCohort.split(""))
// output ---->  [ 'L', 'E', 'A', 'R', 'N', ' ', '2', '0', '2', '3' ]
// console.log(currentCohort.reverse())
// output ----> TypeError: currentCohort.reverse is not a function
// might need to add just a regular console log first to see if the .split was permenant?
// console.log(currentCohort)
// output ---> LEARN 2023
// i really don't think that's what i need to do. gonna check the notes from when we actually did this problem in class
// it's in the array lecture notes. since i've already used .split, now i'll need to use .reverse
// currentCohort.reverse()
// console.log(currentCohort.reverse())
// ---> TypeError: currentCohort.reverse is not a function
// gonna try putting .reverse with the console.log the way i did with the first question.
// ---> TypeError: currentCohort.reverse is not a function
// console.log(currentCohort).reverse()
// ----> TypeError: Cannot read properties of undefined (reading 'reverse')
// i realized i didn't do it exactly the same way as it was in the notes so i'm going to try adding another const or var and see what happens
const stringToArray = currentCohort.split("")
console.log(stringToArray)
// ----> [
//   'L', 'E', 'A', 'R',
//   'N', ' ', '2', '0',
//   '2', '3'
// ]
stringToArray.reverse()
console.log(stringToArray)
// ----> [
//   '3', '2', '0', '2',
//   ' ', 'N', 'R', 'A',
//   'E', 'L'
// ]
console.log(stringToArray.join(""))
// ---> 3202 NRAEL

// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
// input - use a for loop
// output - odd numbers from array
// so i know that i'll have to make a for loop using conditonals. we've gone over a similar problem in class before so i'm going to look through the notes for loops.
// it's not exactly in the loops notes, so i'm having to switch from the functions, loops and arrays notes as well. and since i'm currnetly not using a function i can't use "return" so i'll be usuing a consol.log
// for(let i = 0; i < stockExchange.length; i++){
//     if(stockExchange[i] % !== 0){
//         console.log(stockExchange.push(stockExchange[i]))
//     }
// }
// ---> SyntaxError: Unexpected token '!=='
// i want to try and make a function link in the notes to see if that'll work?
// const stockExchange = (arrayOfNumbers) => {
//     let arrayOfOddNumbers = []
//     for(let index = 0; index < arrayOfNumbers.length; index++){
//       if(arrayOfNumbers[index] % 2 !== 0){
//         arrayOfOddNumbers.push(arrayOfNumbers[index])
//       }
//     }
//     return arrayOfOddNumbers
//   }
//   console.log(stockExchange())
  // ----> SyntaxError: Identifier 'stockExchange' has already been declared
  // going to see if i can get any other ideas from chatgpt
  // chatgpt said i was missing the 2 -_____-
  // ps. i am very sorry i used chatgpt
//   for(let i = 0; i < stockExchange.length; i++){
//     if(stockExchange[i] % 2 !== 0){
//         console.log(stockExchange.push(stockExchange[i]))
//     }
// }
// -----> got the endless loop of doom
// going to watch some of the lecture videos on arrays and loops
// i don't think i need to add .push to the console log because i'm not adding anything to the array
// for(let i = 0; i < stockExchange.length; i++){
//   if(stockExchange[i] % 2 !== 0){
//       console.log(stockExchange)
//   }
// }
// ----> [
//   13, 34, -4, 42,  5,
//   -5, 10, 27, 42, 10
// ]
// [
//   13, 34, -4, 42,  5,
//   -5, 10, 27, 42, 10
// ]
// [
//   13, 34, -4, 42,  5,
//   -5, 10, 27, 42, 10
// ]
// [
//   13, 34, -4, 42,  5,
//   -5, 10, 27, 42, 10
// ]
// i think i need to indecate that i want the [i] to get the output that i want.
for(let i = 0; i < stockExchange.length; i++){
  if(stockExchange[i] % 2 !== 0){
      console.log(stockExchange[i])
  }
}
// ----> 13
// 5
// -5
// 27