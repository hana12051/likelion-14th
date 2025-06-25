// 인라인 스타일이 아닌, 스타일 값 읽기
// 웹 브라우저에 의해 계산된 스타일(computed style) 값 읽기 가능
;(() => {
  const body = document.body
  const h1 = document.querySelector('h1')

  // 인라인 스타일 설정이 없다면?
  // style 속성 객체(CSSStyleDeclaration)로 정보를 읽을 수 없다.
  console.log(body.style.backgroundColor)
  console.log(h1.style.color === '')
})()

// 브라우저를 통해 요소 스타일 읽기
// 요소.style을 사용해 요소에 쓰기 (DOM 업데이트)
;(() => {
  
  // h1 요소 접근 변수에 참조
  const heading1 = document.querySelector('h1')
  // console.log(heading1)

  // h1 요소의 글자 크기 스타일 값 읽기
  const heading1Styles = getComputedStyle(heading1)
  const heading1FontSize = heading1Styles.getPropertyValue('font-size')
  console.log(heading1FontSize)

  // h1 요소의 글자 크기를 읽은 값에 + 84px 추가한 값 다시 h1 요소에 쓰기

})()