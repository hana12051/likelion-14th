{
  const accordionContainer = document.querySelector('.accordion__container')
  const accordions = accordionContainer.querySelectorAll('.accordion')
  
  const firstAccordion = accordions.item(0)
  const firstAccordionButton = firstAccordion.querySelector('button')
  firstAccordionButton.addEventListener('click', () => {
    firstAccordion.classList.toggle('is-open')
  })

  const secondAccordion = accordions.item(1)
  const secondAccordionButton = secondAccordion.querySelector('button')
  secondAccordionButton.addEventListener('click', () => {
    secondAccordion.classList.toggle('is-open')
  })
  
  const thirdAccordion = accordions.item(2)
  const thirdAccordionButton = thirdAccordion.querySelector('button')
  thirdAccordionButton.addEventListener('click', () => {
    thirdAccordion.classList.toggle('is-open')
  })
  
  const fourthAccordion = accordions.item(3)
  const fourthAccordionButton = fourthAccordion.querySelector('button')
  fourthAccordionButton.addEventListener('click', () => {
    fourthAccordion.classList.toggle('is-open')
  })
}