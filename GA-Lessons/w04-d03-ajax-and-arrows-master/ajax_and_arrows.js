let someDataForDebugging;

$(document).ready(function() {

    // ============================================================
    // Ajax and Arrows
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
    function tsgSeparator(label) {
        var separatorElement = document.createElement("div");
        var upper = document.getElementById("upper");
        separatorElement.setAttribute("class", "separator remark");
        separatorElement.innerText = label;
        upper.appendChild(separatorElement);
    }

    // This function inserts a cream-colored section with some text in it.
    // It's a bit fancy, but we'll be able to explain how it works later
    // in the course.
    function tsgRemark() {
        var args = Array.prototype.slice.call(arguments);
        var remarkElement = document.createElement("div");
        var upper = document.getElementById("upper");
        upper.appendChild(remarkElement);
        remarkElement.setAttribute("class", "remark remark_text");

        args.forEach(function(remark) {
            var remarkBody = document.createElement("p");
            remarkBody.innerText = remark;
            remarkElement.appendChild(remarkBody);
        });
    }

    // ============================================================
    // basic setup

    const $upper = $("#upper");

    // ============================================================
    // Arrow Functions

    tsgSeparator("Arrow Functions");

    tsgRemark(
        "Arrow Functions are another way of writing functions in JavaScript. The syntax of arrow functions is more concise than normal functions, and their behavior regarding oddities like keyword this is much simpler.",
        "Unlike normal functions, arrow functions do not rebind keyword this. They inherit whatever value was assigned to keyword this in the scope where they were created.",
        "Arrow functions are (in my opinion) much less annoying to write and easier to think about (so, less prone to weird bugs). On the other hand, the absence of keyword this can make them difficult to use as methods of objects. They're great for expressing little bits of behavior, for example as an argument to map, filter, or reduce."
    );


    console.log("example 1:");
    console.log(
        ((x) => x + 1)(2)
    );

    console.log("example 2:");
    // can omit parameter list parens if (and only if) there is exactly one parameter:
    console.log(
        (x => x + 1)(2)
    );

    console.log("example 3:");
    // syntax for multiple parameters:
    console.log(
        ((x, y) => x + y)(2, 3)
    );

    console.log("example 4:");
    // syntax for multiple statements in function body:
    console.log(
        ((x) => {
            console.log("x is: " + x);
            return "this is the return and x is: " + x;
        })("bla")
    );

    // Exercise: how would you return an object literal from an arrow function?



    // ============================================================
    tsgSeparator("More Ajax");

    let $firstDataAnchor = $("<div>", { id: "firstDataAnchor" })
        .text("anchor for our data... when it arrives.")
        .appendTo($upper);

    // asynchrony
    // WHEN do the following actions occur?

    $.ajax(
        "http://swapi.co/api/planets/1/", {
            success: (data) => {
                console.log("----------------------------------------");
                console.log("data received:");
                console.log(data);
                // Where will this appear in relation to the other elements
                // created in this Javascript file?
                $("<div>", { style: "border: 2px solid blue" })
                    .text("data received. planet name: " + data.name)
                    .appendTo($upper);
                // let's try this instead:
                // $("<div>", {style: "border: 2px solid blue"})
                //   .text("data received. planet name: " + data.name)
                //   .appendTo($firstDataAnchor);
            },
            error: (jqx, status) => {
                console.log("----------------------------------------");
                console.log("error encountered. error status:");
                console.log(status);
                $("<div>", { style: "border: 2px solid red" })
                    .text("error. error status: " + status)
                    .appendTo($upper);
                // $("<div>", {style: "border: 2px solid red"})
                //   .text("error. error status: " + status)
                //   .appendTo($firstDataAnchor);
            }
        });

    {
        // notice we're in a small block
        $("<div>").text("This div comes later in the in the text of the Javascript file, but renders first in the page...").appendTo($upper);
    }


    // ============================================================
    // strategies for traversing responses

    tsgRemark(
        "Now that we're talking to databases, the structure of the data we're dealing with will become more complex."
    );

    const $secondDataAnchor = $("<div>", { id: "secondDataAnchor" }).appendTo($upper);

    $.ajax(
        "http://swapi.co/api/planets/1/", {
            success: (data) => {
                console.log("----------------------------------------");
                console.log("data received for part 2.");
                const residents = data.residents,
                    $residentContainer = $("<div>")
                    .text("Resident URLs:")
                    .appendTo($secondDataAnchor);
                residents.forEach((resident) => {
                    $("<div>").text(resident).appendTo($residentContainer);
                });
            },
            error: (jqx, status) => {
                console.log("error encountered: " + status);
            }
        });

    tsgRemark(
        "One trick for exploring data during development (not production!) is to leak it into a global var, then poke at it in the browser console. This can provide a faster feedback loop for figuring out paths into the data.",
        "If you do this, be sure to clean up after yourself! You don't want to be leaking data into the global scope unnecessarily."
    );

    $.ajax(
        "http://swapi.co/api/planets/1/", {
            success: (data) => {
                console.log("----------------------------------------");
                console.log("data received for part 3.");
                // this will leak to the "let" declaration at the very top of the file
                someDataForDebugging = data;
            },
            error: (jqx, status) => {
                console.log("error encountered: " + status);
            }
        });



    // ============================================================
    // EXERCISE: NESTED REQUESTS

    tsgRemark(
        "Exercise: list the names of all the residents of Tatooine (planet 1) in the DOM!"
    );


    // ============================================================
    // EXERCISE: AJAX ON CLICK

    tsgRemark(
        "Exercise: render a button that retrieves all the residents of Tatooine in the DOM when it is clicked!"
    );


});