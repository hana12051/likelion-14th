  // 마우스 엔터 (mouseenter)
  headline.addEventListener('mouseenter', () => {
    headline.style.fontSize = '300px'
  })
  
  // 마우스 리브 (mouseleave)
  headline.addEventListener('mouseleave', () => {
    headline.style.fontSize = '42.4px'
  })

  ;(() => {
  
  const headline = document.querySelector('h1')
  console.log(headline)

  // 방법 1. ❌ JavaScript 문법 오류
  // headline.style.--font-size = '400px'
  
  // 방법 2. ❌ 일반적으로 사용되는 (예전) 방법
  headline.style['--font-size'] = '400px'

  // 방법 3. CSSStyleDeclaration { setProperty }
  headline.style.setProperty('--font-size', '400px')

})()