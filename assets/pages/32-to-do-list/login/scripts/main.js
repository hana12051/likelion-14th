document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#login-form')
  const errorMsg = document.querySelector('#login-error')

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const email = form.email.value.trim()
    const password = form.password.value.trim()

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (!res.ok) throw new Error('로그인 실패')

      const { token } = await res.json()

      localStorage.setItem('auth_token', token)

      // ✅ 로그인 성공 → 할 일 페이지로 이동
      window.location.href = 'todos.html'
    } catch (err) {
      console.error('로그인 에러:', err) 
      errorMsg.hidden = false
    
    }
  })
})
