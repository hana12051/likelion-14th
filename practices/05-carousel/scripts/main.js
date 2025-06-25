/* ./scripts/main.js */
(() => {
  const carousel      = document.querySelector('.carousel');
  const container     = carousel.querySelector('.carousel__contents');
  const slides        = [...carousel.querySelectorAll('.carousel__content')];
  const prevButton    = carousel.querySelector('[aria-label="이전 탐색"]');
  const nextButton    = carousel.querySelector('[aria-label="다음 탐색"]');
  const indicators    = [...carousel.querySelectorAll('.carousel__indicator')];

  let currentIndex = 0;           // 현재 표시 중인 슬라이드

  /* ------------------------------------------------------------------ */
  /*  헬퍼 함수                                                         */
  /* ------------------------------------------------------------------ */

  // 슬라이드 이동(translateX) + UI 동기화
  const updateCarousel = () => {
    // 1) 슬라이드 영역 이동
    const slideWidth = carousel
      .querySelector('.carousel__container')
      .clientWidth;                         // 반응형에서도 OK
    container.style.transform  = `translateX(${-slideWidth * currentIndex}px)`;
    container.style.transition = 'transform 0.4s ease';

    // 2) 이전/다음 버튼 표시 여부
      prevButton.hidden = currentIndex === slides.length - 1;  
    nextButton.hidden = currentIndex === 0;                   

    // 3) 인디케이터 활성화
    indicators.forEach((dot, i) => {
      const isActive = i === currentIndex;
      dot.classList.toggle('is-selected', isActive);
      dot.setAttribute('aria-selected', isActive);
      dot.tabIndex = isActive ? 0 : -1;     // 키보드 탐색 UX
    });
  };

  // 안전하게 인덱스 범위를 고정한 뒤 update
  const goTo = index => {
    currentIndex = Math.max(0, Math.min(index, slides.length - 1));
    updateCarousel();
  };

  /* ------------------------------------------------------------------ */
  /*  이벤트 바인딩                                                      */
  /* ------------------------------------------------------------------ */

  prevButton.addEventListener('click', () => goTo(currentIndex - 1));
  nextButton.addEventListener('click', () => goTo(currentIndex + 1));

  indicators.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(i));
  });

  // 창 크기가 변하면 위치 보정
  window.addEventListener('resize', updateCarousel);

  // 최초 상태 세팅
  updateCarousel();
})();
