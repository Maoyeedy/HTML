const body = document.body;
const html = document.documentElement;

const setParachutePosition = () => {
    const scrollPos = (body.scrollTop || html.scrollTop) / (html.scrollHeight - html.clientHeight);
    const parachutePos = Math.min(scrollPos * 4, 1);
    parachute.style.animationDelay = `-${scrollPos * 240}s`;

    if (scrollPos > 0.999) {
        parachute.style.animationPlayState = 'paused';
        clickme.style.display = 'block';

    } else {
        parachute.style.animationPlayState = 'running';
        clickme.style.display = 'none';
    }
};

window.addEventListener('scroll', setParachutePosition);