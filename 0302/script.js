$(document).ready(function () {
    $('#red-button').click(function () {
        $('body').css('background-image', 'url(1.png)');
        $('#slider-text').css('color', 'red');
    });

    $('#blue-button').click(function () {
        $('body').css('background-image', 'url(2.png)');
        $('#slider-text').css('color', 'blue');
    });

    $('#green-button').click(function () {
        $('body').css('background-image', 'url(3.png)');
        $('#slider-text').css('color', 'green');
    });

    $('#red-background').click(function () {
        $(`body`).css('background-color', 'hsl(6, 70%, 90%)');
    });

    $('#blue-background').click(function () {
        $(`body`).css('background-color', 'hsl(206, 70%, 90%)');
    });

    $('#green-background').click(function () {
        $('body').css('background-color', 'hsl(145, 70%, 90%)');
    });

    $('#reset-button').click(function () {
        $('body').css('background-color', 'whitesmoke');
        $('body').css('background-image', 'none');
        $('#slider-text').css('color', '#333');
        slider.val(slider.prop('min'));
        text.css('font-size', slider.val() + 'em');
    });

    var slider = $('#font-slider');
    var text = $('#slider-text');

    text.css('font-size', slider.val() + 'em');

    slider.on('input', function () {
        // Change the font size of the text element
        text.css('font-size', slider.val() + 'em');
    });
});
