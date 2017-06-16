// ============================================================
// DOM MANIPULATION
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
// Starter Functions

// See starter_functions.js for other functions we'll be using here

// ============================================================
tsgSeparator("Query Selectors");

tsgRemark(
  "We can select elements in the DOM using CSS-style selectors!!"
);

// first let's get somewhere to start in the normal way.
var upper = document.getElementById("upper");

// Now let's generate some complicated structure using a recursive function:
var growTree = function(element, level, maxLevel){
  if(level < maxLevel){
    for (var i = 0; i < 2; i++){
      var newChild = appendNewElement(element, "div");
      setInnerText(newChild, "level: " + level + "; child_inx: " + i);
      newChild.setAttribute("level", level);
      newChild.setAttribute("child_inx", i);
      growTree(newChild, level + 1, maxLevel);
    }
  }
};

growTree(upper, 0, 3);

var level2 = document.querySelectorAll("div[level=\"2\"]");

for (var i = 0; i < level2.length; i++) {
  var element = level2[i];
  element.setAttribute("style", "background-color: lightblue;");
}

tsgRemark(
  "This capability is powerful, relieving the need to either hang onto every DOM element we might be interested in as Javascript data, or manually traverse the DOM looking for it.",

  "If we call the querySelectorAll method of a particular element, the query selector looks at all its children."
);

var tree1 = document.createElement("div");
tree1.innerText = "tree1";
upper.appendChild(tree1);

growTree(tree1, 0, 3);

var tree1Level2 = tree1.querySelectorAll("div[level=\"2\"]");

intoArray(tree1Level2).forEach(function (child) {
  child.setAttribute("style", "background-color: lightgreen");
});

// ============================================================
tsgSeparator("Storing Data in Javascript Data Structures");

var personDataStore = [{name: "john", favoriteColor: "blue"},
		       {name: "eddie", favoriteColor: "red"},
		       {name: "susan", favoriteColor: "green"},
		       {name: "rachel", favoriteColor: "purple"}];

var currentColor = "thistle";

var peopleElement = document.createElement("div");
upper.appendChild(peopleElement);

var populatePeopleElement = function(){ 
  // remove any children already there so we can start fresh
  childrenArray(peopleElement).forEach(function(person){
    peopleElement.removeChild(person);
  });

  setInnerText(
    appendNewElement(peopleElement, "p"),
    "Current color: " + currentColor
  );

  personDataStore.forEach(function(person, index){
    var childElement = appendNewElement(peopleElement, "div");

    setInnerText(
      appendNewElement(childElement, "p"), 
      "Name: " + person.name);

    setInnerText(
      appendNewElement(childElement, "p"),
      "Favorite Color: " + person.favoriteColor);
    
    var childFavColorElementBox = appendNewElement(childElement, "div");

    childFavColorElementBox.setAttribute(
      "style", 
      "background-color: " + person.favoriteColor);

    // one last thing
    childFavColorElementBox.addEventListener(
      "click",
      function(){
	console.log('click');
	console.log(person);
	person.favoriteColor = currentColor;
	// rerender the peopleElement
	populatePeopleElement();
      },
      false
    );
  });
};

populatePeopleElement();

tsgRemark(
  "While a bit less direct, Javascript data structures have the advantage of being easier to manipulate than the DOM. We can easily augment the table above with a color-picker.");

var colors = ["red", "green", "blue", "purple", "thistle", "orange"];

var colorPicker = appendNewElement(upper, "div");

var renderColorPicker = function(){
  // remove all children so we can start fresh
  childrenArray(colorPicker).forEach(function(child){
    colorPicker.removeChild(child);
  });
  setInnerText(
    appendNewElement(colorPicker, "p"),
    "Current Color: " + currentColor);
  setInnerText(
    appendNewElement(colorPicker, "p"),
    "Pick A Color");
  var colorOptions = appendNewElement(colorPicker, "div");
  colorOptions.setAttribute("style", "display: flex;");
  colors.forEach(function(color){
    var colorElement = setInnerText(appendNewElement(colorOptions, "div"), color);
    var colorElementBox = appendNewElement(colorElement, "div");
    colorElementBox.setAttribute("style", "background-color: " + color + ";");

    // Here's the important part. Because we're storing the currentColor in 
    colorElement.addEventListener(
      "click",
      function(){
	currentColor = color;
	populatePeopleElement();
	renderColorPicker();
      },
      false
    );
  });
};

renderColorPicker();
