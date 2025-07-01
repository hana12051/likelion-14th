// {
//   const accordionsContainer = document.body // 또는 공통 조상 요소로 좁혀도 됨

//   accordionsContainer.addEventListener('click', (event) => {
//     const button = event.target.closest('.accordion__header button')

//     if (!button) return // 클릭된 게 버튼이 아니면 무시

//     const accordion = button.closest('.accordion')
//     if (accordion) {
//       accordion.classList.toggle('is-open')
//     }
//   })
// }


// 이벤트 위임 방식으로 코드 개선
;(() => {
  const accordionContainer = document.querySelector('.accordion__container')

  accordionContainer.addEventListener('click', (e) => {
    const target = e.target
    const button = target.closest('.accordion__header button')

    if (button) {
       button.closest('.accordion').classList.toggle('is-open')
    } else {
      console.log(target)
    }
  })
  
})()
