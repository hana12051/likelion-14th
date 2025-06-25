// 모든 아코디언 헤더 선택
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const content = item.querySelector('.accordion-content');

    // 열려 있다면 닫고, 아니라면 열기
    const isOpen = item.classList.contains('open');
    if (isOpen) {
      closeItem(item, content);
    } else {
      openItem(item, content);
    }
  });
});

function openItem(item, content) {
  item.classList.add('open');
  // 실제 콘텐츠 높이를 계산해 max-block-size 지정
  const scrollHeight = content.scrollHeight;
  content.style.maxBlockSize = `${scrollHeight}px`;
}

function closeItem(item, content) {
  item.classList.remove('open');
  content.style.maxBlockSize = '0';
}
