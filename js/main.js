const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log('scroll');
  if(window.scrollY > 500) { // scroll 될 때마다 scrollY 값이 갱신됨
    // 배지 숨기기
    // badgeEl.style.display = 'none';
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    }); // 0.6s
  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300)); // 0.3s
// lodash : ? 라이브러리
// _.throttle(함수, 시간ms); 일정 시간마다 함수를 실행

// gsap : 애니메이션 처리 라이브러리
// gsap.to(요소, 지속시간s, 옵션); 요소를 애니메이션 처리함

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) { // 반복횟수 : index
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1,
  })
});

// Swiper(css 선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper', {
  // direction: 'horizontal', // 기본값
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 5000, // 0.5s(기본값은 3s)
  },
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true,
  },
  navigation: { // css로 위치 잡아줘야함
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

new Swiper('.awards .swiper', {
  // direction: 'horizontal', // default
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  },
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;

  if (isHidePromotion) {
    // 숨기기
    promotionEl.classList.add('hide');
  } else {
    // 보이기
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFied()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(
    selector, 
    random(1.5, 2.5),
    {
      y: size, // y축으로 이동(아래로 size 만큼 이동)
      repeat: -1, // 무한반복
      yoyo: true, // 역재생
      ease: Power1.easeInOut, // 움직임 설정, 부드럽게
      delay: random(0, delay),
    }
  );
}

// floatingObject(selector, delay, size);
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function (spyEl) {
  // 특정 화면이 화면 내에 들어오면 인식한다.
  // .Scene() : 요소를 감시하는 옵션을 지정해준다.
  // .setClassToggle() : 클래스를 넣었다 뺐다 지정해준다.
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8, // 인식될 위치(뷰포트의 가장 위:0, 가장 아래:1)
    })
    .setClassToggle(spyEl, 'show') // (토클할 요소, '토클할 클래스 이름');
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022