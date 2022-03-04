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
