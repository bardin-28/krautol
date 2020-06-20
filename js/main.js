// ======================== Preloader ========================
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
// ======================== HAMBURGER ========================
$('.menu-btn').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
});
$('.menu-btn').click(function (e) {
    $('.menu-collapse').toggleClass('d-none').toggleClass('toogle-order');

});

// ======================== SLIDER ========================
var prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.getElementById('dots'),
    index = 0,
    navCheck = document.querySelector('.slider');
if (navCheck != null) {
    var slideInterval = setInterval(nextSlide, 7000); // Автоматическое переключение слайда (7 сек)
    for (var i = 0; i < dots.children.length; i++) {
        dots.children[i].addEventListener('click', function (event) {
            var currSlide = event.target.dataset.slide;
            changeClass(event.target)
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                if (slides[i].dataset.slide == currSlide) {
                    index = slides[i].dataset.slide;
                    slides[i].classList.add('active');
                }
            }
        })
    }
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);
}
function activeSlide(n) {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
    for (var i = 0; i < dots.children.length; i++) {
        dots.children[i].classList.remove('active');
    }
    dots.children[n].classList.add('active');
}
function nextSlide() {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}
function prevSlide() {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}
function changeClass(el) {
    for (var i = 0; i < dots.children.length; i++) {
        dots.children[i].classList.remove('active');
    }
    el.classList.add('active');
}
