$(function () {
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

    var slider = $('#font-slider');
    var text = $('#slider-text');

    text.css('font-size', slider.val() + 'em');

    slider.on('input', function () {
        text.css('font-size', slider.val() + 'em');
    });

    function incrementNumber() {
        var countingElement = document.getElementById("counting");
        var number = parseInt(countingElement.innerText);
        number++;
        countingElement.innerText = number.toString();
    }
    var timerId = setInterval(incrementNumber, 4000);
    setTimeout(function () { clearInterval(timerId); }, 24000);
});