jQuery(function() {
  var game_start = new Audio('./audio/start-round.mp3');
  game_start.play();

  var body = $('body');

  // 6. Defines a createDuck function that returns a duck
  function createDuck() {
    // 1. Creates a <div> with the class "duck" named "duck"
    var duck = $('<div class="duck"></div>');
    body.append(duck);

    // 2. Toggles the "flap" class on the duck every 250 ms (1/4 second)
    setInterval(function() {
      duck.toggleClass('flap');
    }, 250)

    // 8a. Moves the newly created duck to a random location
    duck.css("top", Math.random() * window.innerHeight);
    duck.css("left", Math.random() * window.innerWidth);

    // 8b. Moves the duck to a new location after 1 second
    // 9. Ducks keep moving by using setInterval instead of setTimeout
    setInterval(function() {
      duck.css("top", Math.random() * window.innerHeight);
      duck.css("left", Math.random() * window.innerWidth);
    }, 2000)

    return duck;
  }

  // 7. Creates 5 ducks
  for(var i=0; i<5; i++) {
    createDuck();
  }

  // 10. ------ We're almost there! ------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second)

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. If not, alert "YOU WIN!"

  // FIN. You win 1 trillion tokens.  Play the day away!

})
