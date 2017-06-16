// ============================================================
// OBJECTS and KEYWORD THIS EXERCISES
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
// starting place

var upper = document.getElementById("upper");

// ============================================================
tsgSeparator("Stopwatch");

tsgRemark(
  "Exercise:",
  "Fill out the render method in the stopwatch object, as instructed in the comments there."
);

var stopwatchEl = document.createElement("div");
stopwatchEl.setAttribute("id", "stopwatch");
upper.appendChild(stopwatchEl);

var stopwatch = {
  elapsedMilliseconds: 0,

  running: false,

  intervalID: null,

  reset: function(){
    this.running = false;
    this.elapsedMilliseconds = 0;
    this.intervalID = null;
    
    window.clearInterval(this.intervalID);
  },

  pause: function(){
    this.running = false;

    window.clearInterval(this.intervalID);
  },

  increment: function(){
    if(this.running){
      this.elapsedMilliseconds++;
    }
  },

  start: function(){
    this.running = true;
    // window.setInterval expects a callback. If we close over keyword
    // this, however, the callback function we pass will drop the link
    // between the stopwatch object and keyword this when it is
    // invoked by the setInterval system.

    // To avoid this problem, we can bind keyword this to a new
    // variable, here named self. The special rules applying to
    // keyword this do not apply to this new variable, and we can
    // safely close over it in a callback.
    var self = this;
    window.setInterval(
      function(){
	self.increment();
	self.render();
      },
      1);
  },

  render: function(){
    // first let's clear out what we had before.
    var children = [];
    for (var i = 0; i < stopwatchEl.children; i++){
      children.push(stopwatchEl.children[i]);
    }
    children.forEach(function(child){
      stopwatchEl.removeChild(child);
    });

    // now, attach the following to the stopwatchEl element:
    
    // - a display of the current milliseconds
    // - a start button, that starts the stopwatch when it is clicked
    // - a stop button, that stops the stopwatch when it is clicked
    
  }
};

// ============================================================
tsgSeparator("Zoo");

var zooEl = document.createElement("div");
zooEl.setAttribute("id", "zoo");
upper.appendChild(zooEl);

var zoo = {
  animals: [],
  render: function(){

    // clear out the zoo so we can start fresh
    var children = [];
    for(var i = 0; i < zooEl.children.length; i++){
      children.push(zooEl.children[i]);
    }
    children.forEach(function(child){zooEl.removeChild(child);});

    // it's the zoo!
    var zooLabel = document.createElement("p");
    zooLabel.innerText = "It's The Zoo!";
    zooEl.appendChild(zooLabel);

    // make a place to render the animals
    var animalsContainer = document.createElement("div");
    animalsContainer.setAttribute("class", "animals_container");
    zooEl.appendChild(animalsContainer);

    var animalsContainerP = document.createElement("p");
    animalsContainerP.innerText = "Here Are Our Animals";
    animalsContainer.appendChild(animalsContainerP);

    // render the animals!
    this.animals.forEach(function(animal){
      var animalElement = animal.renderElement();
      animalsContainer.appendChild(animalElement);
    });
  }
};

var mouse = {
  name: "Mouse",
  habitat: "Houses",
  renderElement: function(){
    var el = document.createElement("div");
    el.setAttribute("class", "animal");
    
    var nameEl = document.createElement("p");
    nameEl.innerText = "Name: " + this.name;
    el.appendChild(nameEl);

    var habitatEl = document.createElement("p");
    habitatEl.innerText = "Habitat: " + this.habitat;
    el.appendChild(habitatEl);

    return(el);    
  }
};

zoo.animals.push(mouse);

zoo.render();

tsgRemark(
  "Exercise:",
  "Stock the zoo with five new animals!",
  "For the zoo object to correctly render, each animal object must have a renderElement method that returns a new DOM element describing that animal.",
  "When you've got that working, create a renderElement function that can be shared by all your animals, and use it in your animals.",
  "Next, add a \"taxonomicClass\" property to your animals, classifying them as mammal, reptile, fish, bird, insect, arthropod, etc, and update your rendering logic to render that too.",
  "Next, express the \"taxonomicClass\" property using prototypical inheritance rather than directly inserting the property into your animals."
);
