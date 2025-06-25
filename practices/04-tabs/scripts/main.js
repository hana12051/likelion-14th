/* ./scripts/main.js */
(() => {
  const tabListContainer = document.querySelector('.tabs');                  // 탭 버튼 영역
  const tabButtons = [...tabListContainer.querySelectorAll('.tab')];        // 탭 버튼 전체
  const tabPanels = [...document.querySelectorAll('.tab__content')];        // 콘텐츠 영역 전체

  // 탭 선택 함수 ------------------------------------------------------
  const activateTab = (themeName) => {
    // 1. 버튼 상태 업데이트
    tabButtons.forEach((button) => {
      const isActive = button.dataset.theme === themeName;
      button.classList.toggle('is-selected', isActive);
      button.setAttribute('aria-selected', isActive);
      button.tabIndex = isActive ? 0 : -1;
    });

    // 2. 콘텐츠 패널 표시/숨김
    tabPanels.forEach((panel) => {
      const isMatch = panel.dataset.theme === themeName;
      panel.classList.toggle('is-selected', isMatch);
      panel.hidden = !isMatch;
    });
  };

  // 초기 활성화 설정 ---------------------------------------------------
  const initiallySelectedButton = tabListContainer.querySelector('.is-selected');
  if (initiallySelectedButton) {
    activateTab(initiallySelectedButton.dataset.theme);
  }

  // 클릭 이벤트 핸들링 --------------------------------------------------
  tabListContainer.addEventListener('click', (event) => {
    const clickedButton = event.target.closest('.tab');
    if (!clickedButton) return;
    activateTab(clickedButton.dataset.theme);
  });

  // 키보드 네비게이션 ---------------------------------------------------
  tabListContainer.addEventListener('keydown', (event) => {
    const { key } = event;
    const currentButton = document.activeElement;
    const currentIndex = tabButtons.indexOf(currentButton);
    if (currentIndex === -1) return;

    let targetIndex = null;
    if (key === 'ArrowRight') targetIndex = (currentIndex + 1) % tabButtons.length;
    if (key === 'ArrowLeft')  targetIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
    if (key === 'Home')       targetIndex = 0;
    if (key === 'End')        targetIndex = tabButtons.length - 1;

    if (targetIndex !== null) {
      event.preventDefault();
      const nextButton = tabButtons[targetIndex];
      nextButton.focus();
      activateTab(nextButton.dataset.theme);
    }
  });
})();
