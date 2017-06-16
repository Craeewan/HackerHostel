$(document).ready(() => {
    console.log('script loaded');

    // the following steps should be completed on the /jokes/new page

    1. New Joke Button
    // listener for a new joke button
    // when a user clicks the new joke button call a function called 'getJoke'
    // make sure you create an ajax call to GET https://api.chucknorris.io/jokes/random
    // append the joke to the dom 
    // after the joke is on the screen, the user should have the option to save the joke to the database or request a new joke

    2. Save Joke Button
    // create a save joke button
    // if the user wants to save a joke to the database by clicking the save joke butto, run a function called saveJoke
    // it should make a POST request to /api/jokes and save the joke to the database. 
    // you may need to set up the controller to handle this request. 
    // after a successful save, the user should be redirected to the new joke's show page


}); // ends document.ready
