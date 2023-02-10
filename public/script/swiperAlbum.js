const swiper = new Swiper('.swiper', {

    // Optional parameters
    // направление
    direction: "horizontal",

    // режим непрерывного цикла
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    },
    // количество слайдов в видимой области
    slidesPerView: 1,
});
