//Применение параллакса к нескольким изображениям
var image = document.querySelectorAll('.thumbnail');
// создание экземпляра класса Parallax
new simpleParallax(image, {
    // ориентация класса паралакса
    orientation: 'right'
});
