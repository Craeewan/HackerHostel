// ============================================================
// tests!

function runSubtest(subtest, i){
  try{
    var res = subtest();
    if(res === true){
      console.log("subtest " + i + " passed.");
    }else{
      console.log("subtest " + i + " FAILED.");
      console.log("subtest:");
      console.log(subtest);
      console.log("result:");
      console.log(res);
    }
  }catch(e){
    console.log("subtest " + i + " threw error:");
    console.log(e);
  }
}

function runTests(tests){
  tests.forEach(function(test){
    if(!(Array.isArray(test) 
	 && test.length === 2
	 && (typeof test[0]) === "string"
	 && (typeof test[1]) === "function")){
      throw {message: "Incorrectly formatted test",
	     test: test};
    }
    let subtests;
    console.log('------------------------------');
    console.log('Testing ' + test[0]);
    try {
      subtests = test[1]();
      if(!Array.isArray(subtests)){
	throw({message: "Test " + test[0] + " must return array of subtests",
	       subtests: subtests});
      }
      subtests.forEach(runSubtest);
    } catch (e){
      console.log("Error encountered in setup of test");
      console.log(e);      
    }
  });
}


function intoArrayTest(){
  let q = document.querySelectorAll("*"),
      qAr = intoArray(q);
  return (
    [()=> Array.isArray(qAr),
     ()=> q.length === qAr.length,
     ()=> qAr.every((x,i)=> x === q[i])]
  );
}

function setInnerTextTest(){
  let el = document.createElement("div"),
      el2 = setInnerText(el, "abc");  
  return(
    [()=> el.innerText === "abc",
     ()=> el2 === el]
  );
}

function appendNewElementTest(){
  let el = document.createElement("div"),
      el2 = appendNewElement(el, "p");
  return(
    [()=> el.children[0] === el2,
     ()=> el2.tagName === "P"]
  );
}

function childrenArrayTest(){
  let el = document.createElement("div"),
      el2 = document.createElement("p"),
      el3 = document.createElement("p");
  el.appendChild(el2);
  el.appendChild(el3);
  let ar = childrenArray(el);
  return(
    [()=> Array.isArray(ar),
     ()=> el.children.length === ar.length,
     ()=> ar.every((x,i)=> x === el.children[i])]
  );
}


function setBackgroundColorTest(){
  let el = document.createElement("div"),
      res = setBackgroundColor(el, "azure");
  return(
    [()=> res === el,
     ()=> res.style.backgroundColor === "azure"]
  );
}

runTests(
  [["intoArray", intoArrayTest],
   ["setInnerText", setInnerTextTest],
   ["appendNewElement", appendNewElementTest],
   ["childrenArray", childrenArrayTest],
   ["setBackgroundColor", setBackgroundColorTest]]
);
