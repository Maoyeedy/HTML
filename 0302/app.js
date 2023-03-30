$(document).ready(function () {
    $('#red-button').click(function () {
        $('body').css('background-image', 'url(1.png)');
        $(`body`).css('background-color', 'red');
    });

    $('#blue-button').click(function () {
        $('body').css('background-image', 'url(2.png)');
        $(`body`).css('background-color', 'blue');
    });

    $('#green-button').click(function () {
        $('body').css('background-image', 'url(3.png)');
        $('body').css('background-color', 'green');
    });
});
