window.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
        image.draggable = false;
    });

    const anchors = document.querySelectorAll('a');
    anchors.forEach((anchor) => {
        anchor.target = '_blank';
        anchor.rel = 'noopener';
    });

    const body = document.querySelector('body');
    body.style.textRendering = 'optimizeLegibility';
});
