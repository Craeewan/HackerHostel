# Homework - JavaScript Challenge!

![Challenge Accepted](https://media.giphy.com/media/1zTqgW6bS2jWU/giphy.gif)

## Setup
Let's start by forking the homework (hw-w02-d02) to our own accounts and then
cloning the homework into ~/code/wdi/homeworks/. This should create an hw-w02-d02
folder. Inside, you will find a 'script.js' file. Please enter your answers into
this file.

## Part 1 - Objects
Given the following objects:
```javascript
var matt = {
  name: "Matt Gershowitz",
  nickname: "the Gersh",
  age: 12,
  weight: 90,
  favoriteThings: {
    movie: "The Net",
    food: "Lasagna",
    website: "www.github.com",
    hat: "red hat"
  },
  hobbies: [
    "bird watching",
    "ceramics",
    "fashion photography"
  ]
}
```
1. `console.log` Matt's nickname
> Hint: Use dot notation. Matt's name is accessed with `matt.name`

2. `console.log` Matt's age

3. `console.log` Matt's favorite movie

4. `console.log` Matt's first hobby
> Hint: `hobbies` is an array. Elements in an array are accessed with bracket notation. `myArray[0]` gives the first element in the array.

5. Matt has been eating a lot of Shake Shack recently and he's gained 5 lbs. Change Matt's weight to reflect this and then `console.log` his new weight.

## Part 2 - Functions
Let's practice writing some functions.

1. Write a function called `multiply` that takes 2 numbers as parameters and returns the product of those 2 numbers.

2. Write a function called `maxOfThree` that takes 3 numbers as parameters and returns the largest number of the three.

3. Remember that Killer Caffeine problem from hw-w01-d04? Let's turn it into a function. Write a function called `howMuchCoffeeWillEndMe` that takes a single parameter, bodyweight, and returns how many cups of coffee will kill you.

4. Let's consider lexical scoping.  What's that?  Read about it [here](http://www.w3schools.com/js/js_scope.asp)
a) Given the following JavaScript snippet, what will output to the console and why? Write your answer as a comment.
```javascript
var x = 7;
function foo() {
  var x = 3;
}
foo();
console.log(x);
```
b)
What if we changed the snippet to this? What will output and why?
```javascript
var x = 7;
function foo() {
  x = 3;
}
foo();
console.log(x);
```
c) One last time, if we changed the snippet to this, what will output and why? Please write your answer as a JavaScript comment.
```javascript
var x = 7;
function foo(x) {
  x = 3;
}
foo(5);
console.log(x);
```

5. Given the following snippet

```javascript
function foo(a, b) {
  console.log(a + b);
}

function bar(a, b) {
  return a + b;
}

function baz(a, b) {
  var c = a + b;
  return;
}

var x = foo(10, 30);
var y = bar(7,10);
var z = baz(80,20);

console.log(x, y, z);
```
What is the output of this snippet?



## Homework Submission
Please submit your assignment **tonight** by **11:00PM**

Follow the instructions in the homework submission how-to located [in our wiki](https://git.generalassemb.ly/wdi-nyc-1-30/syllabus/wiki/Homework-Submission).
