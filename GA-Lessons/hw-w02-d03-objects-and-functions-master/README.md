# JavaScript Objects

![Programming](https://media.makeameme.org/created/javascript-javascript-everywhere.jpg)

## Learning Objectives:
- JavaScript Objects
- JavaScript Object Methods

## Setup
Enter your solutions in the included `starter.js` file

## Completion
Parts 1 through 4 are required

## Part 1 - Movie Database

Create your own JavaScript object representing your favorite movie.

  > Example:

  > ```javascript
  > var battlefieldEarth = {
  >   title: 'Battlefield Earth',
  >   director: 'Roger Christian',
  >   actors: ['John Travolta', 'Forest Whitaker', 'Barry Pepper'],
  >   releaseYear: 2000,
  >   duration: 118
  > }
  > ```

  1. After you have created your movie object, print the title of your movie using `dot notation`
  2. Print the director's name
  3. Print the release year
  4. Maybe your favorite movie came with an extended director's cut - write a statement that increases your movie object's duration by 25 minutes
  5. How would you print each Actor's name? You could `console.log` each name in the actor array manually like this:
  ```javascript
  console.log(battlefieldEarth.actors[0]);
  console.log(battlefieldEarth.actors[1]);
  console.log(battlefieldEarth.actors[2]);
  ```
 
  But this isn't very clever and it's not a programmatic solution because it requires that you know how long the array is ahead of time. Instead, try writing a `for` loop to `console.log` each actor name in your movie object.

  6. I'll admit, I've actually never seen your favorite movie. Can you visit [rotten tomatoes](https://www.rottentomatoes.com/m/battlefield_earth/) and then using dot notation, add the rating from your favorite movie to the movie object? I'm sure it's probably 99%

## Part 2 - Reading List

  So far you've seen arrays that hold primitive datatypes such as:

  > #### Example:

  > ```javascript
  > var numbers = [5, 8, 1, 20, 16, 9];
  > ```
  > ```javascript
  > var instructors = ['Tims', 'Rafa', 'Jared', 'Matt', 'Trevor'];
  > ```

  Let's try combining arrays and objects. Create your own reading list `array` containing **book** `objects`. Make sure your reading list contains at least three **book** `objects`.

  > #### Example

  > ```javascript
  > var readingList = [
  >   {
  >     title: 'The Fellowship of the Ring',
  >     author: 'J.R.R. Tolkien',
  >     alreadyRead: false
  >   },
  >   {
  >     title: 'Carrie',
  >     author: 'Stephen King',
  >     alreadyRead: true
  >   },  
  >   {
  >     title: 'The Winds of Winter',
  >     author: 'George R.R. Martin',
  >     alreadyRead: false
  >    }
  > ];
  > ```

  1. Use a `forEach` loop to iterate through your `readingList` array and print the **title** of each book
  2. Iterate through the `readingList` again, for each book log the book title and book author like so: **"The Fellowship of the Ring by J.R.R. Tolkien"**
  3. Now write a function that returns an output depending on whether you read it yet or not. If you read it, log a string like **'You already read "Carrie" by Stephen King'**, and if not, log a string like **'You still need to read "The Winds of Winter" by George R.R. Martin. Someday...'**

## Part 3 - Functions inside of objects (Methods)
Let's take a look at an object with built in functions. Actually, when functions are sitting inside of an object they are referred to as **methods**.

  ![Tom Brady](https://i.imgur.com/uJec9uJ.gif)

Given the following **Tom Brady** object

  ```javascript
  var tomBrady = {
    firstName: 'Tom',
    lastName: 'Brady',
    height: [6, 4],
    weight: 225,
    specialSkills: 'Cultivating Falcon tears'
    teammates: [
      {
        firstName: 'Rob',
        lastName: 'Gronkowski',
        age: 27,
      },
      {
        firstName: 'Julian',
        lastName: 'Edelman',
        age: 30
      },
      {
        firstName: 'Dion',
        lastName: 'Lewis',
        age: 26
      }
    ],
    superBowlRings: 5,
    throwFootball: function() {
      return 'Touchdown!';
    },
    introduce: function() {
      console.log(`I am ${this.firstName} ${this.lastName}`);
    }
  };
  ```

  1. Using dot notation, try accessing both `tomBrady` **methods**. Don't forget to include `()`!
  2. Using the `tomBrady` object, use dot notation to add a new method that prints a sentence bragging about how many Super Bowl Rings Tom Brady has - Don't forget about the `this` keyword
  3. Use dot notation to add a new method that iterates through his `teammates` array and prints a sentence like **'Hey Rob Gronkowski, are you ready to score some touchdowns?!'**

## Part 4 - AirBNB JavaScript Style Guide
We want to stress the importance of formatting and spacing your code neatly and consistently. At some point in time we have all written some pretty ugly looking code that didn't follow any convention, but now is a good chance to start tidying up our code. Please read through sections 1 through 14 of [AirBNB's Style Guide](https://github.com/airbnb/javascript/tree/es5-deprecated/es5#type-casting--coercion). You can read beyond that if you have extra time, but feel free to stop after the section on **Semicolons**. Tomorrow's morning exercise will build on this.

## Homework Submission
Please submit your assignment **tonight** by **11:00PM**

Follow the instructions in the homework submission how-to located [in our wiki](https://git.generalassemb.ly/wdi-nyc-1-30/syllabus/wiki/Homework-Submission).
