$(document).ready(() => {
    console.log('script loaded');

    // listener for submitting the new mascot form
    $('.new-mascot-form').on('submit', e => {
        e.preventDefault(); // stops default behavior of page refresh

        // grab values from form
        const name = $('.mascot-name-input').val(),
            school_id = $('.mascot-school-id-input').val(),
            image = $('.mascot-image-input').val();

        // create new object to send form data in
        const newMascotData = { name, image, school_id };

        // send ajax request to make new mascots
        $.ajax({
            method: 'POST',
            url: '/api/mascots',
            data: newMascotData,
            success: response => {
                window.location.replace('/mascots/' + response.id);
            },
            error: msg => {
                console.log(msg);
            }
        }); // ends ajax method
    }); // ends submit function for new mascots form


    // send ajax request to edit mascots information
    $('.edit-mascot-form').on('submit', e => {
        e.preventDefault(); // stops default behavior of page refresh

        // grab values from form
        const name = $('.mascot-name-input').val(),
            school_id = $('.mascot-school-id-input').val(),
            image = $('.mascot-image-input').val(),
            type = $('.mascot-type-input').val(),
            id = $('.mascot-id-input').val();

        // create new object to send form data in
        const modifiedMascotData = { name, school_id, image, type, id };

        // send ajax request to make new mascot
        $.ajax({
            method: 'PUT',
            url: '/api/mascots/' + id,
            data: modifiedMascotData,
            success: response => {
                window.location.replace('/mascots/' + response.id);
            },
            error: msg => {
                console.log(msg);
            }
        }); // ends ajax method
    }); // ends submit function for edit mascot form
}); // ends document.ready