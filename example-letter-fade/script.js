const fancyWord = document.querySelector('.fancy')
const words = document.querySelectorAll('.word')

fancyWord.addEventListener('mouseover', () => {
    words.forEach((word) => {
        if (!word.classList.contains('fancy')) {
            word.style.opacity = '1'
        }
    })
})

fancyWord.addEventListener('mouseout', () => {
    words.forEach((word) => {
        if (!word.classList.contains('fancy')) {
            word.style.opacity = '0'
        }
    })
})
