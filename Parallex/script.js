// const content5 = document.querySelector('#content5');
// const image = document.querySelector('.image');

// function handleScroll() {
//     const content5Bottom = content5.offsetTop + content5.offsetHeight;
//     const windowBottom = window.scrollY + window.innerHeight;

//     if (windowBottom >= content5Bottom && !image.classList.contains('show')) {
//         image.classList.add('show');
//     }
// }

// window.addEventListener('scroll', handleScroll);

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