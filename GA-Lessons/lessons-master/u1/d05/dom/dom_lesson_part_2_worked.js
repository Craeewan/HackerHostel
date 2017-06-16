// ============================================================
// INTRODUCTION TO THE DOM, PART 2
// ============================================================

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
tsgSeparator("Node Lists");

var upper = document.getElementById("upper");

// ============================================================
tsgSeparator("Children of Objects");

tsgRemark(
  "We can access all the children of a given element using the children property."
);

var div1 = document.createElement("div");
div1.innerText = "This is div1!";
upper.appendChild(div1);

var div2 = document.createElement("div");
div2.innerText = "This is div2!";
div1.appendChild(div2);

var div3 = document.createElement("div");
div3.innerText = "This is div3!";
div1.appendChild(div3);

var div4 = document.createElement("div");
div4.innerText = "This is div4!";
div1.appendChild(div4);

var div1Children = div1.children;

console.log("div1Children:");
console.log(div1Children);


// ============================================================ //
tsgSeparator("Adding Event Listeners");

tsgRemark(
  "We can add event listeners to an element using addEventListener.",

  "For our purposes, addEventListener takes three arguments.",

  "The first argument is a string specifing the type of the event. We'll be using \"click\".",

  "The second argument is a function, to be called in response to an event.",

  "The thrid argument is a boolean (true or false) argument that concerns the order in which events are processed. It's optional, and if omitted will default to false, but we'll specify false for now anyway to emphasize that there's a choice here.",

  "When the element we've added a click event listener to (or one of its descendents in the DOM) is clicked by the user, the function we passed in as the second argument is called. It is passeed a special object representing information about the event as an argument.",

  "This object has lots of interesting data on it. One of the most important pieces of data is the target property, indicating the element in the DOM that was clicked.",

  "Note that the target property of the event object is not necessarily the element the event listener was attached to. It is usually the innermost (deepest) element that the event occured on.",

  "If we want the element the event listener is attached to, we can access it in the body of the event listener function only using special keyword \"this\"."
);

// make a div
var div5 = document.createElement("div");
div5.innerText = "This is div5!";
upper.appendChild(div5);

// define an event listener function
var onClickMakeGreen = function(eventObject){
  // turn the target of the event green:
  console.log("Clicked!");
  eventObject.target.setAttribute("style", "color: white; background-color: green;");
};

// attach it to the div
div5.addEventListener("click", onClickMakeGreen, false);

// Try clicking it!

tsgRemark(
  "Note again that the target property of the event object is the innermost object we clicked on, not necessarily the object we attached the listener to.",
  "Below, we attach a listener to div6, but div7 changes color instead if we click it. This is because in that case div7 is the value of the event object's target property in onClickMakeGreen:"
);

var div6 = document.createElement("div");
div6.innerText = "This is div6!";
upper.appendChild(div6);

div6.addEventListener("click", onClickMakeGreen, false);

var div7 = document.createElement("div");
div7.innerText = "This is div7! (Try clicking me!)";
div6.appendChild(div7);

tsgRemark(
  "If we want to isolate the element we attached the event listener to specifically, we can use keyword \"this\":"
);

// make a new event listener function that uses keyword "this" too

var onClickMakeGreen2 = function(eventObject){
  console.log("clicked!");
  // Set the color of the object that the event listener is attached
  // to using keyword "this":
  this.setAttribute("style", "color: white; background-color: green;");
};

var div8 = document.createElement("div");
div8.innerText = "This is div8!";
upper.appendChild(div8);

div8.addEventListener("click", onClickMakeGreen2, false);

var div9 = document.createElement("div");
div9.innerText = "This is div9! (Try clicking me!)";
div8.appendChild(div9);

tsgRemark(
  "Keyword \"this\" is a bit peculiar in Javascript, and very confusing when we first encounter it.",
  "We'll cover its nuances later. One way of thinking of it is as an extra parameter available in the body of the function. What its value is at a given moment depends on many things. For now, the important point is that keyword \"this\" will be bound to the element we've attached the event listener to."
);


// ============================================================ //
tsgSeparator("Removing Event Listeners");

tsgRemark(
  "It is sometimes useful to remove event listeners as well.",
  "We do this using the removeEventListener method.",
  "As with addEventListener, the first argument of removeEventListener is a string specifying the type of the listener.",
  "The second argument of removeEventListener is the particular function we want to remove.",
  "Since we need to pass the particular function we want to remove into removeEventListener, we need to store it somewhere if we want to remove it later."
);

var div10 = document.createElement("div");
div10.innerText = "This is div10!";
upper.appendChild(div10);

div10.addEventListener("click", onClickMakeGreen2, false);

// Uncomment the following to remove the event listener. After you do
// so, div10 will no longer turn green after being clicked:

div10.removeEventListener("click", onClickMakeGreen2);

// ============================================================ //
tsgSeparator("Adding event listeners to many elements");

tsgRemark(
  "We've seen how to add and remove event listeners.",
  "Sometimes it is useful to generate event listener functions themselves programmatically.",
  "For example, we might want to attach event listeners to every child of a given element."
);

// Let's make a container element:
var div11 = document.createElement("div");
div10.innerText = "This is div11!";
upper.appendChild(div11);

// Make lots of children:
for (var i = 0; i < 10; i++){
  var ourDiv = document.createElement("div");
  ourDiv.innerText = "This is generated child div " + i + "!";
  div11.appendChild(ourDiv);
}

//  If we can use the same event listener (such as onClickMakeGreen)
//  on every object, this is relatively straightforward: we just
//  iterate over all the children in a for loop and set their event
//  listeners:

// attach the event listener:
for (var i = 0; i < div11.children.length; i++){
  var child = div11.children[i];
  child.addEventListener("click", onClickMakeGreen2);
}

tsgRemark(
  "Things get more complicated if we want the click logic to change for each element we click on -- for example, if we want the elements to all turn different colors when clicked."
);

// same setup:
var div12 = document.createElement("div");
div12.innerText = "This is div12!";
upper.appendChild(div12);

for (var i = 0; i < 10; i++) {
  var ourDiv = document.createElement("div");
  ourDiv.innerText = "This is generated child div " + i + "!";
  div12.appendChild(ourDiv);
}

// While we're at it, let's generate an array of colors:

var colorArray = [];

// Side-note: here's a trick for generating a nice smooth transition
// between two colors. Totally optional but sort of neat.

// Think of the transition as stripes of color next to each other,
// each a little closer to the final color than the one before it. If
// every stripe is the same distance in color space from the one after
// it, the color transition will seem smooth. So we need to calculate
// a single value to represent what that distance should be for each
// stripe.

// We also need the color-distance between adjacent stripes to take us
// exactly to the final color after a certain number of stripes.

for (var i = 0; i < 10; i++){
  // If want 10 stripes, we need to get to the next color in 10 - 1 = 9 transitions:
  var numberOfTransitions = 9;
  var colorDistance = 255 / numberOfTransitions; 
  var redness = Math.floor(i * colorDistance);
  var greenness = Math.floor(255 - i * colorDistance);
  colorArray.push("rgb(" + redness + ", " + greenness + ", 0)");
}

// Now let's try adding a new listener function with a different color for each child:
for (var i = 0; i < div12.children.length; i++) {
  var child = div12.children[i];
  // Make a new event listener function with custom logic for this
  // particular child. This is very similar to how we wrote
  // onClickMakeGreen2, but now we're referencing the variable i
  // inside the loop; in programming parlance, this function "closes
  // over" i.
  console.log(colorArray[i]);
  var onClickMakeSomeColor = function(eventObject){
    console.log("clicked!");
    var color = colorArray[i];
    this.setAttribute("style", "background-color: " + color + ";");
  };
  child.addEventListener("click", onClickMakeSomeColor, false);
}

tsgRemark(
  "We would expect to get a blend of colors when we click the child elements in the example above. They don't.",
  "The reason for this is that the event listener functions we generated in the for loop all refer to the same variable i, and we change the value of i as we go through the loop itself. When we invoke these event listener functions later (in response to a click), they will all use the last value we set i to.",
  "Furthermore, for-loops typically change their iterating variable (i, in this case) at the end of each step, then test to see if they should continue. We said this loop should continue so long as i < 10, meaning that the loop will terminate when i === 10.",
  "The last element in colorArray is at colorArray[9] (remember, arrays are zero-indexed). Therefore colorArray[10] will just return the value undefined! When we insert undefined into an element's \"style\" attribute, CSS seems to ignore it. So the background-color remains unchanged.",
  "So what should we do? We have several options, but for now the simplest one is to reflect that none of this would be a problem if we didn't have to use a for-loop. We only need to use a for-loop because the children property of DOM elements is not an array and doesn't support forEach. So we can just dump all the children into a new array, which we can then use forEach on."
);

// set up again

var div13 = document.createElement("div");
div13.innerText = "This is div13!";
upper.appendChild(div13);

for (var i = 0; i < 10; i++) {
  var ourDiv = document.createElement("div");
  ourDiv.innerText = "This is generated child div " + i + "!";
  div13.appendChild(ourDiv);
}

// Put the children into an array so we can use forEach:
var childArray = [];

for (var i = 0; i < div13.children.length; i++) {
  childArray.push(div13.children[i]);
}

// Now we can use forEach to iterate over all the children safely.
// Remember that the callback we use in foreach can take a second
// parameter, which will be set to the index of the current item in
// the array. This is similar to i in
// for (var i = 0; i < someArray.length; i++){
//   ...
// }

childArray.forEach(function(child, i){
  // From here on it's the same as what we were trying to do in the
  // for-loop above
  var onClickMakeSomeColor = function(eventObject){
    console.log("clicked!");
    var color = colorArray[i];
    this.setAttribute("style", "background-color: " + color + ";");
  };
  child.addEventListener("click", onClickMakeSomeColor, false);
});

// Now when we click on the children, we should get a nice psychedelic
// rainbow from green to red.

// ============================================================
tsgSeparator("Wrap up");

tsgRemark(
  "We've seen how to add and remove elements from the DOM; set the attributes, including style, of elements; and get the children of DOM elements.",

  "Some of these processes involve multiple steps, and doing them exactly right each time may be tedious and error-prone.",

  "Should we so choose, however, we can easily wrap these steps up in functions we write ourselves. There's no single right way to do it, what we decide to break out into functions is to a large extent a matter of personal taste.",

  "In this section of the code I've provided some examples of how one might wrap up the techniques we've seen today as functions. I hope this will encourage you to try writing your own."
);

// Here's a function that makes a new element from a tag string we
// pass in; appends the new element to an existing DOM element; and
// returns the new element for further processing (setting the
// innerText, for example).
var appendNewElement = function(parentElement, tag){
  var newElement = document.createElement(tag);
  parentElement.appendChild(newElement);
  return newElement;
};

// We've seen that sometimes it's useful to process the children of an
// element as an array. Here's a function that takes an element and
// returns a true array (that we can use forEach etc on) of its
// children:
var childrenArray = function(parentElement){
  var kids = [];
  for (var i = 0; i < parentElement.children.length; i++){
    kids.push(parentElement.children[i]);
  }
  return kids;
};

// This function just sets the background color of an element and
// returns that element.
var setBackgroundColor = function (element, color) {
  element.setAttribute("style", "background-color: " + color + ";");
  return element;
};

// Just with these three little functions we can code much more
// efficiently. Let's recreate the last example:

var div14 = appendNewElement(upper, "div");
div14.innerText = "This is div14!";

for(var i = 0; i < 10; i++){
  var childDiv = appendNewElement(div14, "div");
  childDiv.innerText = "This is generated child div " + i + "!";
}

childrenArray(div14).forEach(function(child, i){
  var onClickMakeSomeColor = function(eventObject){
    console.log("clicked!");
    setBackgroundColor(this, colorArray[i]);
  };
  child.addEventListener("click", onClickMakeSomeColor, false);
});
