;(() => {

  // 문법 오류
  // const htmlString = '<div class="practice2" style="display: flex; flex-direction: column; gap: 20px;">
  //     <input type="number" aria-label="점수" placeholder="점수를 입력하세요" />
  //     <button type="button">등급 확인</button>
  //     <output>등급 출력</output>
  //   </div>'

  let containerClassName = 'container'
  let inputType = 'number'
  let outputValue = '아웃풋 벨류'
  let buttonLabel = '버튼 레이블'
  let styleRules = 'display: flex; flex-direction: column; gap: 20px;'
  let placeholderText = '점수를 입력하세요'

  // 방법 1. 문자열 연결을 사용해 템플릿 문자열 구성
  let htmlString = '<div class="'+ containerClassName +'" style="'+ styleRules +'">'
  htmlString += '<input type="'+ inputType +'" aria-label="점수" placeholder="'+ placeholderText +'" />'
  htmlString += '<button type="button">'+ buttonLabel +'</button>'
  htmlString += '<output>'+ outputValue +'</output>'
  htmlString += '</div>'

  // 방법 2. 배열을 사용해 템플릿 문자열 구성
  htmlString = [
    '<div class="'+ containerClassName +'" style="'+ styleRules +'">',
      '<input type="'+ inputType +'" aria-label="점수" placeholder="'+ placeholderText +'" />',
      '<button type="button">'+ buttonLabel +'</button>',
      '<output>'+ outputValue +'</output>',
    '</div>',
  ].join('')

  // 방법 3. 이스케이프 처리를 사용해 템플릿 문자열 구성
  htmlString = '\
    <div class="'+ containerClassName +'" style="'+ styleRules +'">\
      <input type="'+ inputType +'" aria-label="점수" placeholder="'+ placeholderText +'" />\
      <button type="button">'+ buttonLabel +'</button>\
      <output>'+ outputValue +'</output>\
    </div>\
  '

  // 방법 4. 템플릿 리터럴을 사용해 템플릿 문자열 구성
  htmlString = /* html */`
    <div class="${containerClassName}" style="${styleRules}">
      <input type="${inputType}" aria-label="점수" placeholder="${placeholderText}" />
      <button type="button">${buttonLabel}</button>
      <output>${outputValue}</output>
    </div>
  `

  console.log(htmlString)

})()