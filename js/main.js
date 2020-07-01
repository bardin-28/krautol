// ======================== Scroll Progress Bar ========================
window.onscroll = function () { scrollBar() };

var scrollBar = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollBar").style.width = scrolled + "%";
}
// ======================== OFFER SLIDER ========================
var next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.getElementById('dots'),
    index = 0,
    getCurrIndex = document.getElementsByClassName('dots-current')[0];
var slideInterval = setInterval(nextSlide, 7000); // Автоматическое переключение слайда (7 сек)
for (var i = 0; i < dots.children.length; i++) {
    dots.children[i].addEventListener('click', function (event) {
        var currSlide = event.target.dataset.slide;
        getCurrIndex.innerHTML = `0${Number(event.target.dataset.slide) + 1}`;
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
        getCurrIndex.innerHTML = `0${index + 1}`;
    } else {
        index++;
        activeSlide(index);
        getCurrIndex.innerHTML = `0${index + 1}`;
    }
}
function changeClass(el) {
    for (var i = 0; i < dots.children.length; i++) {
        dots.children[i].classList.remove('active');
    }
    el.classList.add('active');
}
// ======================== TINTING SLIDER ========================

var slidesTint = document.querySelectorAll('.slideTint'),
    dotsTint = document.getElementById('dotsTint'),
    indexTint = 0,
    getCurrIndexTint = document.getElementsByClassName('dotsTint-current')[0];
var slideIntervalTint = setInterval(nextSlideTint, 5000); // Автоматическое переключение слайда (5 сек)

function activeSlideTint(n) {
    for (slideTint of slidesTint) {
        slideTint.classList.remove('active');
    }
    slidesTint[n].classList.add('active');
    for (var i = 0; i < dotsTint.children.length; i++) {
        dotsTint.children[i].classList.remove('active');
    }
    dotsTint.children[n].classList.add('active');
}
function nextSlideTint() {
    if (indexTint == slidesTint.length - 1) {
        indexTint = 0;
        activeSlideTint(indexTint);
        getCurrIndexTint.innerHTML = `0${indexTint + 1}`;
    } else {
        indexTint++;
        activeSlideTint(indexTint);
        getCurrIndexTint.innerHTML = `0${indexTint + 1}`;
    }
}

