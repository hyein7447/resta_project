// 폰트사이즈
function setFontSize(){
    const wrap = document.querySelector('.wrap');
    const wrapWidth = wrap.offsetWidth;

    // #wrap의 width를 기준으로 font-size 설정
    document.documentElement.style.fontSize = (wrapWidth / 1920) * 16 + 'px';
}
window.addEventListener('resize', setFontSize);
setFontSize();


// ourServices 슬라이드
var swiper = new Swiper(".servicesSlide", {
    slidesPerView: 'auto',
    spaceBetween: 100,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: false,
    },
});

// ourServices slide4 이중 슬라이드
var swiperHorizontal = new Swiper(".mySwiperHorizontal", {
    direction: 'horizontal',
    nested: true,
    slidesPerView: 'auto',
    // freeMode: true,
    scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    },
    mousewheel: true,
    on: {
        touchStart: function (swiper, event) {
            event.stopPropagation();
        }
    }
});

// caseStudies 슬라이드

// topSlide
var swiper = new Swiper("#topSlide", {
    slidesPerView: '1.5',
    spaceBetween: 70,
});

// bottomSlide
var swiper = new Swiper("#bottomSlide", {
    slidesPerView: 'auto',
    slidesPerView: '1.5',
    spaceBetween: 70,
});
