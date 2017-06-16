// ============================================================
// OBJECTS
// ============================================================

// ============================================================
// Preliminary Functions

// These are just functions I'm writing to give some structure to our
// exploration of the DOM. We don't need to understand how they work
// to get started.

// To make it more clear that these aren't special functions or built
// into Javascript or anything, I'm putting "tsg" in their
// names. "tsg" stands for Timothy Starbuck Gardner, my full name.

// This is a function that inserts a horizontal line into the page,
// followed by the label we pass it as an argument with a
// cream-colored background.
function tsgSeparator(label){
  var separatorElement = document.createElement("div");
  var upper = document.getElementById("upper");
  separatorElement.setAttribute("class", "separator remark");
  separatorElement.innerText = label;
  upper.appendChild(separatorElement);
}

// This function inserts a cream-colored section with some text in it.
// It's a bit fancy, but we'll be able to explain how it works later
// in the course.
function tsgRemark(){
  var args = Array.prototype.slice.call(arguments);
  var remarkElement = document.createElement("div");
  var upper = document.getElementById("upper");
  upper.appendChild(remarkElement);
  remarkElement.setAttribute("class", "remark remark_text");

  args.forEach(function(remark){
    var remarkBody = document.createElement("p");
    remarkBody.innerText = remark;
    remarkElement.appendChild(remarkBody);
  });
}

// ============================================================
tsgSeparator("Prototypical Inheritance");

var mouse = {
  askForFood: function(){return "please give me cheese";},
  name: "mouse"
};

var rat = {
  askForFood: function(){return "give me pizza now";},
  name: "rat"
};

var turtle = {
  askForFood: function(){
    return "give me pizza now !cowabunga!";},
  name: "turtle"
};

var rodent = {
  makeASound: function(){return "squeak";},
  name: "rodent"
};

var mammal = {
  name: "mammal",
  askForFood: function(){return "give me a whale";},
  surviveWinter: function(){return "eating whales";}
};

var reptile = {
  name: "reptile",
  surviveWinter: function(){return "fly south";}
};

turtle.__proto__ = reptile;
mouse.__proto__ = rodent;
rat.__proto__ = rodent;
rodent.__proto__ = mammal;

var splinter = {
  name: "Splinter",
  surviveWinter: function(){
    return "live in sewers";
  }
};

var larry = {
  name: "Larry",
  surviveWinter: function(){
    return "crash on couch";
  }
};

splinter.__proto__ = rat;
larry.__proto__ = rat;


// alfred in a moment
var hedgehog = {
  name:"hedgehog",
  askForFood: function(){return "owl pellets";}
};

hedgehog.__proto__ = rodent;

var alfred = {
  name: "alfred"
};

alfred.__proto__ = hedgehog;
// now alfred.askForFood() => "owl pellets"

// we can't make loops:

var school = {name: "Indiana University"};

var flower = {name: "flower"};

school.__proto__ = flower;

// the following will give us a cyclic __proto__ error!

// flower.__proto__ = school;

console.log("============================================================");
console.log("Keyword this");

// Say we want a method inside a function to refer to some data of the function.
// This is harder to type than we might imagine.

var weaselMonster1 = {
  heads: 1,
  announceHeads: function(){
    console.log("I am weaselMonster1 and I have " + 1 + " heads!");
  }
};


// This works fine if we know how many heads weaselMonster1 has when we make it:
weaselMonster1.announceHeads();

// If we change the number of heads in weaselMonster1, however, the method doesn't update to reflect that:

weaselMonster1.heads = 10;
weaselMonster1.announceHeads();

// We could still do something fancy with closures like this:

var weaselMonsterFactory = function(){
  var weaselMonster = {heads: 1};
  weaselMonster.announceHeads = function(){
    console.log("I am weaselMonster and I have " + weaselMonster.heads + " heads!");
  };
  return weaselMonster;
};

var weaselMonster2 = weaselMonsterFactory();
weaselMonster2.announceHeads();

weaselMonster2.heads = 23;
weaselMonster2.announceHeads();

// However, this is a little cumbersome, and requires us to make a new function instance for each weaselMonster.

// JavaScript offers another way using the keyword this:

var announceHeads = function(){
  var currentWeaselMonster = this;
  console.log("I am a weaselMonster and I have " + currentWeaselMonster.heads + " heads!");  
};

// The special keyword "this" in the example above is assigned a
// different value depending on how announceHeads is invoked.

// If announceHeads is invoked as a function, keyword this will
// default to the global object. Not what we want.

// However, if announceHeads is invoked as a method -- that is, using
// dot syntax -- keyword this will be set to the object containing
// that method.

// This enables us to access data stored in the containing object
// without explicitly closing over that object when we construct the
// announceHeads function.

console.log("------------------------------------------------------------");
console.log("on to weaselMonster3:");

var weaselMonster3 = {
  heads: 1,
  announceHeads: announceHeads
};

weaselMonster3.announceHeads();

weaselMonster3.heads = 347;

weaselMonster3.announceHeads();

console.log("============================================================");
console.log("Constructor Functions");

// say we've defined hedgehog:
var hedgehogProto = {
  name: "hedgehog",
  appearance: "cute"
};

var hedgeHogMaker = function(spikes){
  var hhogInstance = {spikes: spikes};
  hhogInstance.__proto__ = hedgehogProto;
  return hhogInstance;
};

// here's another way:

// 1) define the constructor function
var HedgeHog = function(spikesData){
  // this.spikes = spikesData;
  // this.fins = "dorsal";
};

// 2) define its .prototype field
HedgeHog.prototype = hedgehogProto;

// 3) use it to construct something using the keyword 'new', as follows:
var samsonic = new HedgeHog("sparse and blunt");
