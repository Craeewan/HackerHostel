var intoArray = function(coll){
  var bldg = [];
  for(var i = 0; i < coll.length; i++){
    bldg.push(coll[i]);
  }
  return bldg;
};

var setInnerText = function(element, text){
  element.innerText = text;
  return element;
};

var appendNewElement = function(parentElement, tag){
  var newElement = document.createElement(tag);
  parentElement.appendChild(newElement);
  return newElement;
};

var childrenArray = function(parentElement){
  return intoArray(parentElement.children);
};

var setBackgroundColor = function (element, color) {
  element.setAttribute("style", "background-color: " + color + ";");
  return element;
};
