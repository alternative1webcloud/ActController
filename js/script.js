import Swiper from 'swiper/bundle'

const swiper = new Swiper('.swiper__container', {
    direction: 'horizontal',
    loop: true,
    scrollbar: {
        el: '.swiper__scrollbar'
    }
})
