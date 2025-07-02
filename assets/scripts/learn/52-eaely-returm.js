// 빠른 반환을 사용하지 않은 경우
;(() => {

  function hasOwnClassName(element) {

    if (element.classList.contains('own')) {
      element.classList.add('yes')
      element.setAttribute('data-has-own', 'true')
      element.style.setProperty('--color', 'maroon')
      element.setAttribute('data-top', element.getBoundingClientRect().top + 'px')
      return true
    } else {
      return false
    }

  }

  const body = document.body
  body.className = 'own'

  const result = hasOwnClassName(body)
  console.log(result)

})

// 빠른 반환을 사용하는 경우
;(() => {

  function hasOwnClassName(element) {

    // 빠른 시점에 함수 값을 반환(return)한다.
    // 중첩된 코드를 줄이고, else 구문을 제거한다.
    if (!element.classList.contains('own')) return false

    element.classList.add('yes')
    element.setAttribute('data-has-own', 'true')
    element.style.setProperty('--color', 'maroon')
    element.setAttribute('data-top', element.getBoundingClientRect().top + 'px')
    return true

  }

  const body = document.body
  body.className = 'own'

  const result = hasOwnClassName(body)
  console.log(result)

})()


// 실습 1
;(() => {
  // 클릭 시, 유효한 입력만 처리
  // 사용자가 입력한 값이 없으면 "빠른 반환"을 사용해 경고 메시지를 띄우고,
  // 입력이 있을 때만 결과를 출력합니다.

  const practice1 = document.querySelector('.practice1')
  const userNameInput = document.getElementById('username')
  const output = practice1.querySelector('output')
  
  practice1.addEventListener('click', (e) => {
    const submitButton = e.target.closest('[type="submit"]')

    if (submitButton) {
      e.preventDefault()

      const userNameInputVaue = userNameInput.value.trim()

      if (!userNameInputVaue) {
        alert('이름을 입력해야 합니다.')
        userNameInput.select()
      } else {
        output.value = userNameInputVaue
        userNameInput.Vaue =''
      }
    }

  })

})()


;(() => {
  const practice1 = document.querySelector('.practice1')
  const userNameInput = document.getElementById('username')
  const output = practice1.querySelector('output')

  practice1.addEventListener('click', (e) => {
    const submitButton = e.target.closest('[type="submit"]')
    if (!submitButton) return

    e.preventDefault()

    const userNameInputValue = userNameInput.value.trim()
    if (!userNameInputValue) {
      alert('이름을 입력해야 합니다.')
      userNameInput.select()
      return
    }

    output.value = userNameInputValue
    userNameInput.value = ''
  })
})()

