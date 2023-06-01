window.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image');

    function resetWidth() {
        images.forEach(function (image) {
            image.style.width = '33.33%';
        });
    }

    images.forEach(function (image) {
        image.addEventListener('mouseover', function () {
            this.style.width = '50%';
        });

        image.addEventListener('mouseout', function () {
            resetWidth();
        });
    });

    resetWidth();
});
