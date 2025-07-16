// scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
  const form   = document.querySelector('.todolist')
  const input  = document.querySelector('#new-task')
  const list   = document.querySelector('.todolist__tasks')
  const empty  = document.querySelector('.todolist__empty-state')

  // 빈 목록 문구 토글
  const toggleEmpty = () => {
    empty.style.display = list.children.length ? 'none' : 'block'
  }

  form.addEventListener('submit', e => {
    e.preventDefault()

    const text = input.value.trim()
    if (!text) return

    /* ① <li> 만들기 */
    const li  = document.createElement('li')
    li.className = 'task'

    /* ② li 안쪽 구조 넣기 (innerHTML 써도 ok) */
    const id = `task-${Date.now()}`
    li.innerHTML = `
      <input type="checkbox" id="${id}">
      <label for="${id}">
        <span class="task__checkmark" aria-hidden="true">
          <svg viewBox="0 0 20 15"><path d="M0 8l2-2 5 5L18 0l2 2L7 15z" /></svg>
        </span>
        ${text}
      </label>
      <button type="button" class="task__delete-button" aria-label="할 일 삭제">
        <svg viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" /></svg>
      </button>
    `

    /* ③ 삭제 버튼 기능 붙이기 */
    li.querySelector('.task__delete-button').addEventListener('click', () => {
      li.remove()
      toggleEmpty()
    })

    /* ④ 리스트에 추가 => 화면에 바로 보임 */
    list.appendChild(li)

    /* ⑤ 마무리 */
    input.value = ''
    input.focus()
    toggleEmpty()
  })

  toggleEmpty() // 첫 로딩 시 빈목록 여부 확인
})
