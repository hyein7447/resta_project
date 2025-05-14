// 폰트사이즈
function setFontSize(){
    const wrap = document.querySelector('.wrap');
    const wrapWidth = wrap.offsetWidth;
    // #wrap의 width를 기준으로 font-size 설정
    document.documentElement.style.fontSize = (wrapWidth / 1920) * 16 + 'px';
}

function setFontSizeSmall(){
    const wrap = document.querySelector('.wrap');
    const wrapWidth = wrap.offsetWidth;
    // #wrap의 width를 기준으로 font-size 설정
    document.documentElement.style.fontSize = (wrapWidth / 430) * 18 + 'px';
}

if(window.innerWidth >= 720 ){
    setFontSize();
    window.addEventListener('resize', setFontSize);
}
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
    slidesPerView: '1.3',
    spaceBetween: 300,
    breakpoints: {
        721: {
            slidesPerView: '1.5',  // 780px 이상에서는 1.5개 슬라이드 표시
            spaceBetween: 300,
            navigation: false,  // 버튼 숨김
        },
        720: {
            slidesPerView: '1',
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        430: {
            slidesPerView: '1',
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        395: {
            slidesPerView: '1',
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        320: {
            slidesPerView: '1',
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        }
    },
});

// bottomSlide
var swiper = new Swiper("#bottomSlide", {
    slidesPerView: 'auto',
    slidesPerView: '1.5',
    spaceBetween: 70,
    breakpoints: {
        721: {
            slidesPerView: '1.5',  // 780px 이상에서는 1.5개 슬라이드 표시
            spaceBetween: 70,
            navigation: false,  // 버튼 숨김
        },
        720: {
            slidesPerView: '1',
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        430: {
            slidesPerView: '1',
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        395: {
            slidesPerView: '1',
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        320: {
            slidesPerView: '1',
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        }
    },
});

// reviewBox 모바일 슬라이드
    var swiper = new Swiper(".reviewSlide", {
        slidesPerView: '1',
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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

// ourServicesSlide 스크롤이동 시 동작
$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);

    // 이동 거리 설정 함수
    function getTranslateX() {
        return window.innerWidth <= 720 ? "3rem" : "-19.9375rem";
    }

    // ScrollTrigger start/end 설정 함수
    function getStartEnd() {
        if (window.innerWidth <= 720) {
            return {
                start: "top 30%",  // 780px 이하일 때
                end: "bottom center"
            };
        } else {
            return {
                start: "top 10%",  // 기본 설정
                end: "bottom center"
            };
        }
    }

    // 애니메이션 설정 함수
    function createTranslateAnimation() {
        return gsap.fromTo(".servicesSlide .swiper-wrapper", 
            { x: "8rem" }, 
            { 
                // x: getTranslateX(),
                x:'0%', 
                // paddingLeft: "1.5rem",
                duration: 1.2,
                ease: "power2.out",
            }
        );
    }

    // ScrollTrigger 생성 함수
    function createScrollTrigger() {
        // 기존 ScrollTrigger 제거
        ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.vars.trigger === ".servicesSlide") {
                trigger.kill();
            }
        });

        // 애니메이션 생성
        const translate = createTranslateAnimation();
        const { start, end } = getStartEnd();  // 반응형 start/end 가져오기

        // ScrollTrigger 생성
        ScrollTrigger.create({
            trigger: ".servicesSlide",
            start: start,   // 반응형으로 시작 위치 설정
            end: end,       // 반응형으로 종료 위치 설정
            toggleActions: "play none none reverse",
            animation: translate,
            // markers: true  // 디버깅용 마커 (필요 시 활성화)
        });
    }

    // 초기 실행
    createScrollTrigger();

    // 창 크기 변경 시 트리거 다시 설정
    $(window).on('resize', function () {
        createScrollTrigger();
    });
});


// caseStudies 스크롤이동 시 동작
$(document).ready(function () {
    // GSAP 등록
    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger 생성 함수
    function createResponsiveTriggers() {
        // 기존 ScrollTrigger 제거
        ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.vars.trigger === "#topSlide" || trigger.vars.trigger === "#bottomSlide") {
                trigger.kill();
            }
        });

        // 화면 너비가 720px 이하이면 ScrollTrigger 비활성화
        if (window.innerWidth <= 720) return;

        // topSlide 애니메이션 (왼쪽 → 오른쪽)
        const tween1 = gsap.fromTo("#topSlide .swiper-wrapper",
            { x: "33.5625rem", opacity: 0 },
            { 
                x: "-6.9375rem",
                opacity: 1,
                duration: 1.2,
                ease: "power2.out"
            }
        );

        // bottomSlide 애니메이션 (오른쪽 → 왼쪽)
        const tween2 = gsap.fromTo("#bottomSlide .swiper-wrapper",
            { x: "-55.4375rem", opacity: 0 },
            { 
                x: "0",
                opacity: 1,
                duration: 1.2,
                ease: "power2.out"
            },
            "+=0.2" // topSlide 완료 후 약간의 간격을 두고 시작
        );

        // topSlide ScrollTrigger
        ScrollTrigger.create({
            trigger: "#topSlide",
            start: "-30% 50%",
            end: "bottom center",
            toggleActions: "play none none reverse",
            animation: tween1,
            // markers: true
        });

        // bottomSlide ScrollTrigger
        ScrollTrigger.create({
            trigger: "#bottomSlide",
            start: "top 70%",
            end: "center center",
            toggleActions: "play none none reverse",
            animation: tween2,
            // markers: true
        });
    }

    // 초기 실행
    createResponsiveTriggers();

    // 화면 크기 변경 시 반응형 처리
    $(window).on('resize', function () {
        createResponsiveTriggers();
    });
});



// contact us 유효성 안내문
$('.submit').on('click',function(e){
    e.preventDefault();

    let nameValue = $('input[name="name"]').val().trim();;
    let phoneValue = $('input[name="phone"]').val().trim();;
    let selectValue = $('select').val();
    
    
    // 값이 비어있을 경우 경고 메시지 출력
    if (nameValue === '') {
        $('#nameAlert').text('*이름을 입력해주세요.');
        $('input[name="name"]').attr('placeholder', '');
        $('input[name="name"]').focus()
    }
    
    else if (selectValue === null || selectValue === '') {
        $('#selectAlert').text('* 문의사항을 선택해주세요.');
        $('select').css('color', 'transparent');
    }
    
    else if(phoneValue === ''){
        $('#phoneAlert').text('*연락처 or 이메일을 입력해주세요.');
        $('input[name="phone"]').attr('placeholder', '');
        $('input[name="phone"]').focus()
    }
})

    $('input[name="name"]').on('keyup',function(){
        $('#nameAlert').text('');
    })
    $('input[name="phone"]').on('keyup',function(){
        $('#phoneAlert').text('');
    })
    $('select').on('change',function(){
        $('#selectAlert').text('');
    })


// 개인정보처리방침
	$(".btn-agreement").bind("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".agreement").slideToggle();
	});
	$(".agreement").bind("click", function (e) {
		e.stopPropagation();
	});
	$("#wrap").bind("click", function (e) {
		e.stopPropagation();
		if ($(".agreement").is(":visible")) $(".agreement").slideUp();
	});


// 모바일 햄버거 메뉴 클릭 이벤트
$(document).ready(function() {
    // GSAP으로 초기 상태 설정: gnbBox를 화면 왼쪽 밖으로 이동 및 숨김
    gsap.set('.gnbBox', { x: '-100%', display: 'none' });

    // menuIcon 클릭 이벤트
    $('.menuIcon').click(function() {
        // gnbBox가 숨겨져 있으면 슬라이드 인
        if ($('.gnbBox').css('display') === 'none') {
            gsap.to('.gnbBox', { 
                display: 'block', 
                x: '0%', 
                duration: 0.5, 
                ease: 'power2.out' 
            });
        } else {
            // 보이는 상태면 슬라이드 아웃
            gsap.to('.gnbBox', { 
                x: '-100%', 
                duration: 0.5, 
                ease: 'power2.in', 
                onComplete: function() {
                    $('.gnbBox').css('display', 'none'); // 애니메이션 후 숨김 처리
                }
            });
        }
    });
});
