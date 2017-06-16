$(document).ready(() => {
  console.log('script loaded');

  $('.name-frog').on('submit', e => {
    //e.preventDefault(); // stops default behavior of page refresh

    // grab values from form
    const name = $('.name-input').val();
    const password = $('.password-input').val();

    $.ajax({
      method: 'POST',
      url: '/frogs/new',
      data: {name: name, password: password},
      success: response => {
        console.log(response);
      }, error: msg => {
        console.log(msg);
      }
    }); // ends ajax method
    return false;
  });

  $('.login-form').on('submit', e => {
    //e.preventDefault(); // stops default behavior of page refresh

    // grab values from form
    const name = $('.name-input').val();
    const password = $('.password-input').val();

    $.ajax({
      method: 'POST',
      url: '/frogs/login',
      data: {name: name, password: password},
      success: response => {
        console.log(response);
      }, error: msg => {
        console.log(msg);
      }
    }); // ends ajax method
    return false;
  });




}); // ends document.ready
