const form = document.querySelector('form')
const output = document.querySelector('output')

form.addEventListener('submit', (e) => {
	e.preventDefault()

	
	const input = form.elements.text
	const value = input.value.trim()
	
	output.innerHTML = value
})