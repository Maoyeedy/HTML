window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    let parallax = document.querySelector('.row::before');
    parallax.style.transform = 'translateY(' + offset * 0.5 + 'px)';
});
