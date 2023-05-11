const rows = document.querySelectorAll('.row');

function animateRows() {
    rows.forEach((row) => {
        const rowCenter = row.offsetLeft + row.offsetWidth / 2;
        const distanceToCenter = window.innerWidth / 2 - rowCenter;
        const scroll = document.body.style.getPropertyValue('--scroll');
        const speed = row.dataset.speed;
        const position = distanceToCenter * speed * scroll;
        row.style.transform = `translateX(${position}px)`;
    });
}

window.addEventListener(
    'scroll',
    () => {
        document.body.style.setProperty(
            '--scroll',
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
        animateRows();
    },
    false
);

window.addEventListener('resize', animateRows, false);
