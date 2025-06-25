// --------------------------------------------------------------------------
// 📌 attr 유틸리티 함수 작성 및 활용
// --------------------------------------------------------------------------

// 유틸리티 함수 설계
// attr(element, attributeName, ?attributeValue): element | string
function attr(element, attributeName, attributeValue) {  
  if (attributeValue !== undefined && attributeValue !== null) {
    element.setAttribute(attributeName, attributeValue)
    return element
  } else {
    const attributeValue = element.getAttribute(attributeName)
    return attributeValue
  } 
}
// 속성 쓰기 사용법
// const changedElement = attr(element, attributeName, attributeValue)
function attr(el, name) {
  // 속성 읽기 기능 구현
  // 요소.getAttribute('속성이름')
  const value = el.getAttribute(name)
  return value
}

;(() => {
  const h1 = document.querySelector('h1')
  const h1IdValue = attr(h1, 'id')
  console.log(h1IdValue)

})()
// 속성 읽기 사용법
// const attributeValue = attr(element, attributeName)