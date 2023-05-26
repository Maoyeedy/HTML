const contents = document.querySelectorAll('.content');
const infos = document.querySelectorAll('.info');

function handleScroll() {
    const windowHeight = window.innerHeight;

    for (let i = 0; i < contents.length; i++) {
        const contentTop = contents[i].offsetTop;

        if (window.scrollY >= contentTop - windowHeight && !infos[i].classList.contains('show')) {
            infos[i].classList.add('show');
        }
    }
}

window.addEventListener('scroll', handleScroll);