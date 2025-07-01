;(() =>{
const button = document.querySelector('[data-name="change-bg-color"]')
  console.log(button)

  const button = document.querySelector('[data-name="change-bg-color"]')

button.addEventListener('click', () => {
button.style.cssText = '\
  background-color: #e54d26;\
  padding: 8px 16px;\
  border: 0;\
  border-radius: 4px;\
'

button.style.setProperty('background-color', '#e54d26')
button.style.setProperty('padding', '8px 16px')
button.style.setProperty('border', '0')
button.style.setProperty('border-radius', '4px')
})

  button.style.cssText = 'background-color: #e54d26; padding: 8px 16px; border: 0; border-radius: 4px;'
}
)()
