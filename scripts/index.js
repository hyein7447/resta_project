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
    breakpoints: {
        430: {
            spaceBetween: 50,
        },
        395: {
            spaceBetween: 30,
        },
        320: {
            spaceBetween: 20,
        }
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
    breakpoints: {
        430: {
            spaceBetween: 30,
        },
        395: {
            spaceBetween: 20,
        },
        320: {
            spaceBetween: 10,
        }
    },
});

// bottomSlide
var swiper = new Swiper("#bottomSlide", {
    slidesPerView: 'auto',
    slidesPerView: '1.5',
    spaceBetween: 70,
    breakpoints: {
        430: {
            spaceBetween: 30,
        },
        395: {
            spaceBetween: 20,
        },
        320: {
            spaceBetween: 10,
        }
    },
});

// select option 선택시 컬러변경
$('select').on('change', function() {
    $(this).css('color', '#fff');
});

// 메뉴 클릭시 이동
$(document).ready(function() {
    $('.gnb a').on('click', function(e) {
        e.preventDefault(); // 기본 앵커 이동 방지

        // 이동할 대상의 ID를 가져옴
        var target = $(this).attr('href');
        
        // 해당 ID의 위치로 스크롤 이동
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800); // 800ms 동안 부드럽게 이동
    });
});

// caseStudies 스크롤이동 시 동작
$(document).ready(function () {
    // GSAP 등록
    gsap.registerPlugin(ScrollTrigger);

    // GSAP Timeline 생성
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sldieContent",
            start: "top 10%", // caseStudies가 화면의 80% 지점에 도달하면 시작
            end: "center center",
            toggleActions: "play none none reverse",
            markers: true 
        },
    });

    // topSlide 애니메이션 (왼쪽 → 오른쪽)
    tl.fromTo("#topSlide .swiper-wrapper", 
        { x: "33.5625rem", duration: 1.2,}, 
        { 
            x: "-6.9375rem", 
            opacity: 1, 
            duration: 1.2,
            ease: "power2.out",
        },
    
    );

    // bottomSlide 애니메이션 (오른쪽 → 왼쪽)
    tl.fromTo("#bottomSlide .swiper-wrapper", 
        { x: "-55.4375rem", duration: 1.2,}, 
        { 
            x: "0", 
            opacity: 1, 
            duration: 1.2,
            ease: "power2.out"
        },
        "+=0.2" // topSlide 완료 후 약간의 간격을 두고 시작
    );
});

