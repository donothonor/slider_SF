const images = document.querySelectorAll('.image-box__item')
const rightArrow = document.querySelector('.content-arrow__right')
const leftArrow = document.querySelector('.content-arrow__left')
let i = 0

rightArrow.addEventListener('click', moveForward)


function moveForward () {
    ++i
    if(i >= images.length) {
        images[i - 1].classList.remove('block')
        i = 0
        images[i].classList.add('block')
    } else {
        images[i - 1].classList.remove('block')
        images[i].classList.add('block')
    }
}