// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 12
// b) Verify and explain: it doesn't log anything because the string is not inside of an array.
// *** i forgot to save the code so it wasn't logging anything. i forgot to save it until question 4 so my explanations from 1-3 will change now
// b-2) Verify and explain: logs 10, it's the length of the characters inside of the string when i originally thought that it would log 12 because i thought it would include the quotation marks.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: i don't think it will log anything
// b) Verify and explain: it didn't log anything because using [] indicates that you are pulling a value from an array and since the string is not part of an array or each character is not part of an array [4] will log nothing.
// b-2) Verify and explain: logs --->  o <--- because 'o' is at the index of [4]

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: i think it's going to log "Ruby"
// b) Verify and explain: it didn't log anything because there's nothing that connects index to language. no built in method was used. also, i think it didn't log anything because the 1 wasn't in brackets. 
// b-2) Verify and explain: it loggedd Ruby because Ruby is at the index of [1], and since the index was in brackets inside of the console log it indcated that the 1 index was being called on and would change depending on what data was being assigned to "index"

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: 'SATURDAY' 'SUNDAY'
// b) Verify and explain: 'TypeError: weekendDays.toUpperCase is not a function' because .toUpperCase doesn't work on an array data type. would have to "iterate" over an array using a for loop.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: array
// b) Verify and explain: logs number because .length will give you the number of vaules in the array making the data type a number. ".length is an informational command that returns the number of elements in the array. The length is the always the last index of the array plus one."
