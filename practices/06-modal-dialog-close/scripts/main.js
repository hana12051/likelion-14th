{
  const body = document.body
  const modal_open_button = document.querySelector('main .modal-open-button')

  const modal_overlay = document.querySelector('.modal-overlay')
  const modal_close_button = modal_overlay.querySelector('.modal-close-button')

  // 모달 열기
  modal_open_button.addEventListener('click', () => {
    body.classList.add('modal-is-open')
  })

  // 닫기 버튼 클릭 시
  modal_close_button.addEventListener('click', closeModalDialog)

  // 닫기 버튼에 초점이 있을 때 Enter 또는 Space 키
  modal_close_button.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      closeModalDialog()
    }
  })

  // 모달 오버레이 클릭 시, 다이얼로그 외부 클릭인 경우에만 닫기
  modal_overlay.addEventListener('click', (event) => {
    const modal_dialog = modal_overlay.querySelector('.modal-dialog')
    if (!modal_dialog.contains(event.target)) {
      closeModalDialog()
    }
  })

  // 모달 닫기 함수
  function closeModalDialog() {
    body.classList.remove('modal-is-open')
  }
}
