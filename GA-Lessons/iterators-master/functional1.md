# Basic Array Methods and Functional Programming

This document provides a preliminary introduction to functional programming, and three important functional array methods: `map`, `filter`, and `reduce`.

## Imperative and Functional Programming Styles

A distinction is often drawn between __imperative__ and __declarative__ styles of programming. This distinction is often explained as the difference between saying _how_ to do something (imperative), and _what_ it is that one wants done (declarative). In many cases the line between "what" and "how" is both fuzzy and prone to shift as computers become more complex and powerful. Object-oriented programming is usually considered an example of imperative programming, functional programming is usually considered an example of declarative programming. On a practical level, the most important difference between the two styles is their varying approach to _change_.

The __imperative__ style of programming considers computation as a series of changes to particular things or locations in memory, including variables, objects, and arrays. From this perspective a program is best considered as a series of instructions that the machine systematically works its way through, repeatedly modifying values at particular places in memory. If I put an object in two places in memory (two arrays, for instance), changes to the object in one place will be reflected immediately in the other:

```javascript
var obj = {state: "start"}; // make an object
var ar1 = [obj]; // put it somewhere
var ar2 = [obj]; // put it somewhere else

ar1[0].state = "finish"; // change a property of the object in one place
console.log(ar2[0].state); // check the property in another place
// => finish
```

Compare this to how numbers, rather than objects, work:

```javascript
var num = 100; // start with a number
var ar1 = [num]; // put it somewhere
var ar2 = [num]; // put it somewhere else

ar1[0]++; // looks like we're changing the number in one place, as we did with the object above
console.log(ar1[0]);
// => 101
console.log(ar2[0]); // check the number in another place
// => 100 // nothing changed!
```

Used carefully, this capability \- the ability to change \- can be extremely powerful, and is sometimes unavoidable. Direct mutation can be very fast, since it may not require the computer to allocate any new places in memory, and enables a form of instantaneous communication between parts of the program via shared references. In certain contexts (such as physics simulation), imperative code also appealingly resembles the hurly-burly of the external, physical world, in which objects change as time passes. Here, change means that a _single thing_ may have _different properties_ at _different times_. A dropped rock falls but remains itself, despite its new position. A balloon is the same balloon after it inflates. A shirt is the same shirt even after wine has been spilled on it.

Abstract and mathematical entities behave differently. The number 32 is 32 forever; the date November 1 2016 _itself_ will remain November 1 2016 forever. The very idea of these changing in time seems nonsensical. If an integer is between 32 and 34, it can only be 33. It is defined exactly, uniquely, and eternally by its mathematical properties; anything with those properties must be 32, and can be nothing else. Similarly, we cannot modify the set of odd numbers itself; if we "add" or "remove" something from this set, we actually get a _different_ set. Changeable things can be in more than one state, eternal things like numbers and dates cannot. I can drop rocks, inflate balloons, and besmirch shirts with wine; I cannot drop the number 42, I cannot inflate zero, I cannot spill wine on the set of all even integers. Even when I _add_ 3 to 42, I have altered neither 3 nor 42, but merely evaluated an expression `3 + 42` to derive another number 45. If I subtract 1 from 34, then add 1 to 32, I have not somehow produced two new 33's, whatever that would mean, but instead arrived at the single number 33 in two different ways.

In programming, entities that can _change_, like objects, variables, and arrays, are called __mutable__, and the action of changing them is called __mutation__. Entities like numbers and strings, that _cannot change_, are called __immutable__. Most mutable entities can have the same content, but still not be equal each other:

```javascript
var arrayA = ["b", "l", "a"];
var arrayB = ["b", "l", "a"]; // same contents as arrayA
console.log(arrayA === arrayB);
// => false
```

By contrast, most immutable entities equal each other if they mean the same thing:

```javascript
var stringA = "bla";
var stringB = "bla"; // same content as stringA: the characters "b", "l", and "a" together as a string
console.log(stringA === stringB);
// => false
```

The __functional__ style of programming focuses on this more abstract or mathematical kind of entity, and tends to avoid observable mutation as much as possible; that is, changes to things that might be visible in other parts of the program. Where imperative programming considers computation as a series of mutations, functional programming instead emphasizes _deriving_ new data from old, without changing the old. We can derive the circumference of a circle from its radius without changing the radius. We can derive the number of Labrador Retrievers in a neighborhood from a dataset of all neighborhood pets without changing that dataset. Functional programming is based on the observation that most, if not all, tasks in a program can be accomplished by this sort of non-destructive derivation.

These derivations or transformations are naturally expressed as functions. Imperative programming tends to employ functions primarily as [subroutines](https://en.wikipedia.org/wiki/Subroutine): chunks of code that can be conveniently jumped to in a program, thereby reducing repetition. Functional programming also implements functions as subroutines, but with much more emphasis on the return value, and strives to avoid mutating things that are accessible outside the function's scope. Ideally, the effect of a function in a program should be describable purely in terms of its arguments and return value.

A _mathematical_ function always gives the same output for the same input, and does nothing else. In math, if we define f(x) := x + 1, f(3) will always equal 4. A _programmatic_ function with this property of always giving the same result for the same input, and doing nothing else, is called a [pure function](https://en.wikipedia.org/wiki/Pure_function). For example, if we define `var f = function(x){return x + 1;}`, `f(3)` will always equal `4`, so `f` here is a pure function. Programs that consist of expressions built from pure functions are called 'purely functional', and in fact are themselves pure functions: such a program will yield the same result every time it is executed with the same input. Pure functions are desirable because their effect is entirely localized and predictable on the basis of their arguments.

Functional programming is considered a form of __declarative__, as opposed to imperative, programming. Rather than specifying all the physical changes in memory the machine must go through to arrive at some result, the programmer just describes the desired result in terms of well-named combinations of functions (so, _what_ rather than _how_). Advocates of functional programming hold that such a program is more clear, and easier to debug, and easier to make important assumptions about, than the complex knots of mutation characterizing imperative code.

Object-oriented styles of programming have some declarative features, but tend to rely heavily on mutation, and are therefore considered imperative. The idea in object-oriented programming is to leverage encapsulation and [polymorphism](https://en.wikipedia.org/wiki/Polymorphism_%28computer_science%29#Subtyping) in the form of inheritance to mitigate the confusing aspects of imperative code, while preserving its performance benefits and intuitive appeal.

Javascript arrays are mutable, and therefore don't support equality comparisons by contents, or the guarantees provided by immutable collections. However, many benefits of the functional approach can still be recovered by simply not mutating arrays. The array methods covered here introduce some nice ways to use arrays and first-class functions without observable mutation.

## Preliminaries

To show how the array methods `map` and `filter` work, we'll start by defining some very simple functions we can use with them.

The function `plusOne` just adds one to the number it's fed:

```javascript
var plusOne = function(num){return num + 1;};
```

So `plusOne(0)` evaluates to `1`, `plusOne(1)` evaluates to `2`, `plusOne(plusOne(0))` evaluates to `2`, etc.

## map

All arrays have a `map` method that takes some function (of one argument) as a parameter, and returns a new array containing the results of calling that function on every element of the original array.

```javascript
var ar1 = [1, 2, 3];
var ar2 = ar.map(plusOne);
console.log(ar2);
```

prints (something like):

```javascript
[2, 3, 4]
```

The `map` method above _made a new array_ (`ar2`) rather than _changing the original array_ (`ar1`); so

```javascript
console.log(ar1);
```

still prints:

```javascript
[1, 2, 3]
```

In other words, `[1, 2, 3].map(plusOne)` takes us from `[1, 2, 3]` to `[plusOne(1), plusOne(2), plusOne(3)]`.

`map` is useful for implementing tasks that derive or extract some data from every element of another set of data. For example, let's say we have an array representing some properties of various [biomes](https://en.wikipedia.org/wiki/Biome):

```javascript
var biomes =
      [{name: "swamp",
	temperature: "warm",
	humidity: "high"},
       {name: "tundra",
	temperature: "cold",
	humidity: "low"},
       {name: "jungle",
	temperature: "hot",
	humidity: "high"},
       {name: "forest",
	temperature: "medium",
	humidity: "medium"}];
```

`map` makes it easy to select any of these properties from `biomes`. Let's get an array of all biome names, in order:

```javascript
biomes.map(function(biome){return biome.name;})
```

evaluates to:

```javascript
["swamp", "tundra", "jungle", "forest"]
```

Now let's get an array of all temperatures, in order:

```javascript
biomes.map(function(biome){return biome.temperature;})
```

evaluates to:

```javascript
["warm", "cold", "hot", "medium"]
```

We can do more complex transformations than just accessing single properties of the array elements. Let's get an array of sentences describing the biomes:

```javascript
	biomes.map(function(biome){
  return "The " + biome.name + " biome has a " + biome.temperature + " temperature and a " + biome.humidity + " humidity";});
```

evaluates to:

```javascript
[ 'The swamp biome has a warm temperature and a high humidity',
  'The tundra biome has a cold temperature and a low humidity',
  'The jungle biome has a hot temperature and a high humidity',
  'The forest biome has a medium temperature and a medium humidity' ]
```

Recall that function invocations can be nested to repeat their logic: `plusOne(plusOne(0))` evaluates to `2`, `plusOne(plusOne(plusOne(0)))` evaluates to `3`, etc. Since `plusOne` takes a number as an argument and returns a number, we know we can keep nesting its invocations like this indefinitely. If we had defined `plusTwo`, `plusThree`, and `timesFour` in the way their names suggest, they could also be nested with each other indefinitely (eg `plusTwo(timesFour(timesFour(plusThree(plusOne(0)))))`).

`map` has a similar and related property. Let `nums` be an array of numbers:

```javascript
var nums = [1, 2, 3];
```

then:

```javascript
nums.map(plusOne).map(plusOne).map(plusOne)

```
evaluates to:

```javascript
[ 4, 5, 6 ]
```

This is the same as:

```javascript
[ plusOne(plusOne(plusOne(1))),
  plusOne(plusOne(plusOne(2))),
  plusOne(plusOne(plusOne(3))) ]
```

`map` is implemented as a method of arrays, but we could write our own version as follows:

```javascript
// ourMap takes a function f and an array arr as its parameters
// ourMap(plusOne, [1, 2, 3]) is the same as [1, 2, 3].map(plusOne)
var ourMap = function(f, arr){
  var resultArray = []; // initialize a new array, to be returned at the end of this function
  for(var i = 0; i < arr.length; i++){ // loop over all elements of arr
    var arrElement = arr[i]; // get the element at index i of arr
    var processedElement = f(arrElement); // **call f on it to get some result**
    resultArray.push(processedElement); // push the result to the end of the new array
  }
  return resultArray; // return the new array
};
```

so:
```javascript
ourMap(plusOne, [1, 2, 3]);
// result:
// [2, 3, 4]
```

This implementation does mutate the array `resultArray`, but since `resultArray` is created and mutated within the body of `ourMap`, we have encapsulated that mutation locally. We aren't changing data some other part of the program has a reference to, because no other part of the program can have a reference to `resultArray` before we create it. We can therefore consider `ourMap` a pure function, although, strictly speaking, if `f` changes something elsewhere in the program, calls to `ourMap(f, arr)` would change that thing as well.

## filter

`filter` selects elements from the invoking array that meet some condition. Like `map`, filter returns a new array.

We express this condition as a function that is successively applied to every element of the invoking array. For an array `arr` and condition function `f`, `arr.filter(f)` evaluates to a new array containing just those elements `x` of `arr` for which `f(x)` returns a [truthy](https://www.sitepoint.com/javascript-truthy-falsy/) value. To avoid confusion, it's best to use condition functions that return either `true` or `false`. Such functions are sometimes called ['predicates'](https://en.wikipedia.org/wiki/Predicate_(mathematical_logic)).

Let's say we have a function that returns true if its argument is odd, and even otherwise:

```javascript
var isOdd = function(n){
  return !(n % 2 === 0);
};
```

```javascript
[1, 2, 3].filter(isOdd);
```

evaluates to:

```javascript
[1, 3]
```

Here we have selected only those elements of the array for which isOdd returns true.

As with `map`, the return value of `filter` is a _new array_; it is therefore a non-destructive operation, since it doesn't modify the original array.

Using the `biome` data defined above, we can easily select just those biomes that have high humidity:

```javascript
biomes.filter(function(biome){
  return biome.humidity === "high";
})
```

evaluates to:

```javascript
[ { name: 'swamp', temperature: 'warm', humidity: 'high' },
  { name: 'jungle', temperature: 'hot', humidity: 'high' } ]
```

If we want to select those biomes with both high humidity and hot temperature , we can do so by changing the condition function:

```javascript
biomes.filter(function(biome){
  return biome.humidity === "high" && biome.temperature === "hot";
});

// result:
// [ { name: 'jungle', temperature: 'hot', humidity: 'high' } ]
```

We can make exactly the same selection by chaining simpler filters:

```javascript
biomes
  .filter(function(biome){return biome.humidity === "high";})
  .filter(function(biome){return biome.temperature === "hot";})

// same result:
// [ { name: 'jungle', temperature: 'hot', humidity: 'high' } ]
```

`filter` chains can be reordered without changing their result. If we rearrange the filter calls of the previous example, like so:

```javascript
biomes
  .filter(function(biome){return biome.temperature === "hot";})
  .filter(function(biome){return biome.humidity === "high";})

// we still get:
// [ { name: 'jungle', temperature: 'hot', humidity: 'high' } ]

```

`map` operations, by contrast, frequently _cannot_ be reordered to obtain an equivalent result; in fact, for any array `arr` and functions `f` and `g`, `arr.map(f).map(g)` will only return an equivalent result to `arr.map(g).map(f)` if, for any element `x` in `arr`, `g(f(x))` returns an equivalent result to `f(g(x))`.

`map` and `filter` work well together. Often we start with some data, and want to get some more data that is the result of both transforming and selecting from the original data.

Say we want the names of all high-humidity biomes:

```javascript
biomes
  .filter(function(biome){return biome.humidity === "high";}) // select high-humidity biomes
  .map(function(biome){return biome.name;}) // get their names

// result:
// [ 'swamp', 'jungle' ]
```  
Compare this to the for-loop equivalent:

```javascript
var result = [];
for(var i = 0; i < biomes.length; i++){
  var biome = biomes[i];
  if(biome.humidity === "high"){
    var name = biome.name;
    result.push(name);
  }
}
```

Notice that we cannot in general reorder these chained calls. For example, if we switch the `map` and the `filter` calls in the previous example, we get a completely different result:

```javascript
biomes
  .map(function(biome){return biome.name;}) // each step returns a string
  .filter(function(biome){return biome.humidity === "high";}) // each step expects a biome object

// now the result is just:
// []
```

As with `map`, we can implement `filter` ourselves:

```javascript

var ourFilter = function(pred, arr){
  var resultArray = []; // initialize a new array, to be returned at the end of this function
  for(var i = 0; i < arr.length; i++){ // loop over all elements of arr
    var arrElement = arr[i]; // get the element at index i of arr
    if(pred(arrElement)){ // if pred(arrElement) returns true...
      resultArray.push(arrElement); // push arrElement to the end of the new array
    }
  }
  return resultArray; // return the new array.
};


ourFilter(isOdd, [1, 2, 3, 4]);
// result:
// [1, 3]

```

As an exercise, try writing a function 'remove' that is the reverse of `filter`; that is, it _removes_ all the elements `filter` keeps. So:

```javascript
remove(isOdd, [1, 2, 3, 4]);
// result:
// [2, 4]

```

# reduce

A common pattern in a loop is to iterate over all the values in an array while building up some other, accumulated value. For example, to sum all the elements of an array using `for` loops, we might write something like this:

```javascript
var arr = [3, 16, 8, 9];
var sum = 0;
for(var i = 0; i < arr.length; i++){
  sum += arr[i];
}
// sum is now 36
```

In this example, we iterate through `arr`, adding the value of each element to `sum` at each step, then printing out the result.

Another simple example is finding the largest element of an array:

```javascript
var arr = [3, 16, 8, 9];
// Negative infinity is a real javascript value.
// Its salient feature is that it's less than every other value.
var greatest = -Infinity;
for(var i = 0; i < arr.length; i++){
  if (greatest < arr[i]){
    greatest = arr[i];
  }
}
// greatest is now 16
```

Here we start with `greatest` set to a value guaranteed to be less than every other possible value, then move over every element in the array `arr`, setting `greatest` to that element if it is greater than the current value of `greatest`. When we're done looping over every element, `greatest` will be set to the greatest of these values.

As a final example, consider the implementation of `map` we made above:

```javascript
// ourMap takes a function f and an array arr as its parameters
var ourMap = function(f, arr){
  var resultArray = [];
  for(var i = 0; i < arr.length; i++){
    var arrElement = arr[i];
    var processedElement = f(arrElement);
    resultArray.push(processedElement);
  }
  return resultArray; // return the new array
};
```

In this case, `resultArray` is a value we build up (using `push` rather than variable reassignment) while iterating over all the elements of `arr`.

`reduce` is an array method that captures this basic pattern of moving over every element in an array and building up some value. It is the most complicated of the methods we'll look at, but also the most powerful – in fact, `map` and `filter` can both be implemented using `reduce` rather than `for` loops.

The `reduce` method takes two arguments: a "reducing" function and an initial value. The reducing function represents the logic we'll run at every step as we move across the array, and the initial value represents the beginning of the result we'll build up at every step.

Let's rewrite the example above of summing the elements of an array using `reduce` rather than a `for` loop:

```javascript
// old way, using a for loop:
var arr = [3, 16, 8, 9];
var sum = 0;
for(var i = 0; i < arr.length; i++){
  sum += arr[i];
}
// sum is now 36

// new way, using reduce:
var arr = [3, 16, 8, 9];
arr.reduce(
    function(sum, el){return sum + el;}, // reducing function
    0 // initial value
);
// result: 36
```

The result is the same, but we avoid writing a `for` loop. The reducing function in this case takes two arguments, `sum` and `el`. `sum` is roughly the same as `sum` in the first way: a value that we keep adding to as we move over the array. `el` is set to the element of the array at each step. The reducing function returns the value we'll pass in as the value of `sum` on the _next_ step. If we're at the end of the array. The result of the whole `reduce` invocation (or "reduction", as we sometimes say) is just the last return value of the reducing function.

It can be helpful to walk through each step of this process. Let's put a `console.log` in the reducing function so we can see everything we're doing:

```javascript
var arr = [3, 16, 8, 9];
console.log(
  arr.reduce(
    function(sum, el){ // reducing function
      console.log("---------------------------"); // just a divider to organize things
      console.log("sum = " + sum);
      console.log("el = " + el);
      var retval = sum + el; // let's just store the return value in retval so we can console.log it
      console.log("return value = " + retval);
      return retval;},
    0 // initial value
  )
);
```
Here's what we get in the console:

```
---------------------------
sum = 0
el = 3
return value = 3
---------------------------
sum = 3
el = 16
return value = 19
---------------------------
sum = 19
el = 8
return value = 27
---------------------------
sum = 27
el = 9
return value = 36
36
```
We start the reduction with `sum` set to `0`, because that's what we passed in as the initial value. The first step of the reduction sets `el` to 3, because 3 is the first element of the array `arr`. `0 + 3` gives us `3`, so that's the return value for the first step.

The return value for the first step will be the value of `sum` in the second step (in this case, 3). The value of `el` in the second step will be set to 16, because 16 is the second element of `arr`. `3 + 16` gives us `19`, so that's the return value of the second step.

The return value of the second step (`19`) will be the value of `sum` in the third step, just as the return value of the first step was the value of `sum` in the second step. The value of `el` in the third step will be set to 8, because 8 is the third element of `arr`. `19 + 8` gives us `27`, so that's the return value of the third step.

By the same logic, `sum` is set to `27` in the fourth step, and `el` is set to `9` (the fourth element in `arr`). The return value will be `27 + 9`, which is `36`. Since `arr` is only four elements long, there is no fifth step, and we return `36` as the value of the entire reduction.

Another way to look at this is as a series of nested invocations of our reducing function. Say we had the following:

```javascript

var arr = [3, 16, 8, 9];

((((0 + arr[0]) + arr[1]) + arr[2]) + arr[3]);
// result: 36
  
// or, equivalently:

var plus = function(sum, el){
  return sum + el;  
};

plus(
  plus(
    plus(
      plus(0,
           arr[0]),
      arr[1]),
    arr[2]),
  arr[3]);
// result: 36

// or, equivalently:

arr.reduce(plus, 0);

// result: 36

```

Like `map` and `filter`, `reduce` is implemented in Javascript as a method of `Array`s. We can easily implement it ourselves, however. Notice how the implementation below resembles the programs for summing the elements of an array, and finding the greatest element.

```javascript

// ourReduce(f, x, arr) is the same as arr.reduce(f, x)
var ourReduce = function(reducingFunction, initialValue, arr){
  var accumulating = initialValue;
  for (var i = 0; i < arr.length; i++) {
    accumulating = reducingFunction(accumulating, arr[i]);
  }
  return accumulating;
};
```

We can now use `ourReduce` to find the sum of elements in an array, and the greatest element in an array.

Sum:

```javascript
var arr = [3, 16, 8, 9];
ourReduce(
  function(sum, el){return sum + el;},
  0,
  arr);
// result: 36
```

Greatest:

```javascript
var arr = [3, 16, 8, 9];
ourReduce(
  function(greatest, el){
    if (greatest < el){
      return el;
    }else{
      return greatest;
    }
  },
  -Infinity,
  arr);
// result: 16

// alternative implementation, using ternary operator:
var arr = [3, 16, 8, 9];
ourReduce(
  function(greatest, el){return greatest < el ? el : greatest;},
  -Infinity,
  arr);
// result: 16
```

We can even implement `map` and `filter` using `ourReduce` (or `reduce`). Again, pay attention to how the reducing function resembles the body of the loop in `ourMap` and `ourFilter`.

Map:

```javascript
// we can use ourReduce to get map-like results:
var arr = [3, 16, 8, 9];
ourReduce(
  function(arr2, el){
    arr2.push(plusOne(el));
    return arr2;
  },
  [],
  arr
);
// result:
// [4, 17, 9, 10]

// so now we can even reimplement ourMap:
var ourMap2 = function(f, arr){
  return(
    ourReduce(
      function(arr2, el){
        arr2.push(f(el));
        return arr2;
      },
      [],
      arr
    )
  );
};

ourMap2(plusOne, arr);
// result:
// [4, 17, 9, 10]
```

Filter:

```javascript

// we can use ourReduce to get filter-like effects:
var arr = [3, 16, 8, 9];
ourReduce(
  function(arr2, el){
    if(isOdd(el)){
      arr2.push(el);
    }
    return arr2;
  },
  [],
  arr
);

// result:
// [3, 9]

// so now we can reimplement ourFilter:

var ourFilter2 = function(pred, arr){
  return(
    ourReduce(
      function(arr2, el){
        if(pred(el)){
          arr2.push(el);
        }
        return arr2;
      },
      [],
      arr
    )
  );
};

ourFilter2(isOdd, arr);
// result:
// [3, 9]

```

The fact that we can implement `map` and `filter` in terms of `reduce` speaks to the power of `reduce`. We can use `reduce` to generalize all cases where we're building up some value as we move across an array.

`reduce` often comes after we refine and reshape the data using `map` and `filter`, and want to process all of it into some final value. For example, using the `biomes` defined above:

```javascript
console.log(
  biomes
    .filter(function(biome){return biome.humidity === "high";})
    .map(function(biome){return biome.name;})
    .reduce(
      function(sentence, bname){return sentence + "\n\t" + bname;},
      "The humid biomes are: ")
);
// prints:

// The humid biomes are:
//  swamp
//  jungle
```
We could also use `reduce` to rank humidity levels by frequency:

```javascript
biomes
.map(function(biome){return biome.humidity;})
.reduce(
  function(freqs, hum){
    freqs[hum] = freqs.hasOwnProperty(hum) ? freqs[hum] + 1 : 1; // ternary operator
    return freqs;
  },
  {}
);
// result:
// {high: 2, low: 1, medium: 1}
```

As a final note, sometimes it's necessary or convenient to omit the initial value. In this case, the initial value for the reduction is set to the first element of the array. For example:

```javascript
console.log(
  ["a", "b", "c", "d"].reduce(function(x, y){return [x, y];})
);
// result:
// [[["a", "b"], "c"], "d"]

```

## Conclusion

`map`, `filter`, and `reduce` are powerful ways of expressing transformations and selections of data. When we get into databases, we will see that these ideas are fundamental to query systems more generally. They move us away from having to think about all the fiddly details of for-loops and individual tiny steps, towards chains of sculptural transformations on the shape of data.

## Further Resources and Exploration

While `map` `filter` and `reduce` are probably the most famous, there are lots of other very powerful higher-order functions; in fact, it is possible (and, some would say, desirable) to program using only higher-order functions, rather than loops. Here's a selection of libraries providing some of these functions.

### Friendly higher-order functions with a fair amount of mutation:

- [underscore-js](http://underscorejs.org/)

  Probably the most famous library of higher-order functions for Javascript. A bit heavy on mutation for my tastes, but widely used, and perhaps the gentlest introduction to this style of programming.

- [lodash](https://lodash.com/)

  Like underscore-js, but with more functions and a revised API. Here's a decent [post](http://benmccormick.org/2014/11/12/underscore-vs-lodash/) comparing the two libraries.

### Higher-order functions with less or no mutation:

- [lazy.js](http://danieltao.com/lazy.js/)

  Similar to underscore and lodash, but uses [lazy evaluation](https://en.wikipedia.org/wiki/Lazy_evaluation) to optimize functional operations. Note: without having double-checked them myself, I'd still suggest taking some of the posted performance comparisons on this site with a grain of salt. Performance characteristics of lazy code is a complicated topic.

  The landing page says "This library is experimental and still a work in progress", so use with caution. Looks cool though.

### Higher-order functions without mutation and with [powerful immutable data structures](https://en.wikipedia.org/wiki/Persistent_data_structure):

- [immutable-js](https://facebook.github.io/immutable-js/)

  Written by a guy who worked on React, this exposes performant immutable datastructures in an idiom that shouldn't be too weird to Javascript developers.

- [mori](https://github.com/swannodette/mori)

  Written by the chief maintainer of [ClojureScript](https://github.com/clojure/clojurescript), this effectively just exports large swathes of the ClojureScript API to Javascript, in the process exposing ClojureScript's very neat immutable data structures and functional semantics. Mori is supposedly a bit more performant and a bit more resolutely functional than immutable-js, immutable-js is supposedly a bit more familiar and ergonomic from a Javascript perspective.
