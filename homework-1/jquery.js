var slider = $('#font-slider');
var text = $('#slider-text');

$('#red-button').on('click', function () {
    $('body').css('background-image', 'url(1.png)');
    $('#slider-text').css('color', '#b41a2f');
});

$('#blue-button').on('click', function () {
    $('body').css('background-image', 'url(2.png)');
    $('#slider-text').css('color', '#333080');
});

$('#green-button').on('click', function () {
    $('body').css('background-image', 'url(3.png)');
    $('#slider-text').css('color', '#85ab41');
});

$('#red-background').on('click', function () {
    $(`body`).css('background-color', 'hsl(6, 70%, 90%)');
});

$('#blue-background').on('click', function () {
    $(`body`).css('background-color', 'hsl(206, 70%, 90%)');
});

$('#green-background').on('click', function () {
    $('body').css('background-color', 'hsl(145, 70%, 90%)');
});

$('#reset-button').on('click', function () {
    $('body').css('background-color', 'whitesmoke');
    $('body').css('background-image', 'none');
    $('#slider-text').css('color', '#333');
    slider.val(slider.prop('min'));
    text.css('font-size', slider.val() + 'em');
});

text.css('font-size', slider.val() + 'em');
slider.on('input', function () {
    text.css('font-size', slider.val() + 'em');
});

let count = 0;
function incrementNumber() {
    count++;
    $('#counting').text(count);
    if (count < 5) {
        setTimeout(incrementNumber, 3000);
    }
}
incrementNumber();