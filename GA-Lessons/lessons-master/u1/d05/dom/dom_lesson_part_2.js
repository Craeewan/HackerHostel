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

// var div1Children = div1.children;

// console.log("div1Children:");
// console.log(div1Children);

// // Unfortunately, the collection we get back from the children
// // property isn't quite an array, and we can't use methods like
// // forEach with it. We can use a for loop, however:

// for(var i = 0; i < div1Children.length; i++){
//   var currentChild = div1Children[i];
//   currentChild.setAttribute(
//     "style", 
//     "color: white; background-color: rgb(" + Math.floor(255 / div1Children.length) * i + ", 0, 0);"
//   );
// }

// // If we add children to div1, this is immediately reflected div1Children.

// var div5 = document.createElement("div");
// div5.innerText = "This is div5!";
// div1.appendChild(div5);

// console.log("div1Children.length");
// console.log(div1Children.length);


// for(var i = 0; i < div1Children.length; i++){
//   var currentChild = div1Children[i];
//   currentChild.setAttribute(
//     "style",
//     "color: white; background-color: rgb(" + Math.floor(255 / div1Children.length) * i + ", 0, 0);"
//   );
// }


