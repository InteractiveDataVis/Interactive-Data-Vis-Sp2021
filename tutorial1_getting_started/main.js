
// This is a javascript script!

// <-- These imply comments. They will be ignored when the script is run in the browser.

/*  This is another way to do comments.
  It allows for multiline comments.
  Comments are a great way to write notes in the script for yourself or any future developers about what is happening and why.
  This demo branch will include lots of comments to guide you as you get comfortable with javascript.
*/

// this is a function!
function addition(a, b) {
  return a + b;
}

// this is nearly the exact same thing, but a different syntax, called an arrow function.
// it makes smaller functions easier to write. Notice we can ditch the curly braces and the return statement.
const arrowAddition = (a, b) => a + b;

// since we haven't introduced d3.js yet, lets just console log some fun things to see it in the browser.
console.log('hello world!') // notice the single quotes. this means you are printing a string to the console.
console.log('-----') // this is just for spacing to make it easier to read all the consoles we have below.

console.log('addition function:')
console.log(addition)
console.log('-----')

console.log('addition arrow function:')
console.log(arrowAddition)
console.log('-----')

console.log('4 + 5:')
console.log(addition(4, 5)) // our function in action!
console.log('-----')

console.log('4 + 5:')
console.log(4 + 5) // looks like addition just works in javascript, so we don't even need that function!
console.log('-----')

console.log('4 + 5:')
console.log('4' + '5') // hmmm.. but it didn't this time... can you figure out why?
console.log('-----')

// the above are logged in the console, so we can see them.
// but we can run functions without logging it, and just log the result.

const appendWahoo = (string) => string + ' wahoo!!!'

console.log(appendWahoo('I love this class'))
console.log(appendWahoo('javascript is so fun'))

// play around with this script yourself, but remember, at this point -- we can only see the things we log.
// soon, we'll use this script to 'grab' things on the screen and manipulate them!