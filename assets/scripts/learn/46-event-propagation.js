;(() => {

  // 웹 브라우저 환경
  // 이벤트 전파(Event Propagation) 3단계
  // 1. 캡쳐링 단계 (Capturing phase)
  // 2. 타겟 단계 (Target phase)
  // 3. 버블링 단계 (Bubbling phase)

  // 문서에서 모든 박스를 찾아 이벤트 리스너 추가
  const boxes = document.querySelectorAll('.box')
  
 for (const box of boxes) {
  box.addEventListener('click', (e) => {
    const element = e.currentTarget
    console.groupCollapsed(element.className.replace('box', '').trim())
    console.log('이벤트 단계:', e.eventPhase)
    console.log('이벤트 대상의 클래스 이름:', element.className)
    console.groupEnd()
  })
}

})()

// 이벤트 전파 중지(Stop Propagation)
;(() => {

  const boxes = document.querySelectorAll('.box')
  
  for (const box of boxes) {
    box.addEventListener(
      'click', 
      (e) => {
        const element = e.currentTarget
        console.log(element.className.replace('box', '').trim())
      },
      {
        capture: false
      },
    )
  }

})()

// 이벤트 전파 중지(Stop Propagation)
;(() => {

  const boxes = document.querySelectorAll('.box')
  let useCapture = false

  // box 1
  boxes.item(0).addEventListener('click', handleLog, { capture: useCapture })

  // box 3
  boxes.item(2).addEventListener('click', handleLog, { capture: useCapture })
  
  // box 2
  boxes.item(1).addEventListener('click', (e) => {
    // 이벤트 전파 중지
    e.stopPropagation()
    const element = e.currentTarget
    console.log(element.className.replace('box', '').trim())

  }, { capture: useCapture })


  function handleLog(e) {
    const element = e.currentTarget
    console.log(element.className.replace('box', '').trim())
  }

})()

// 이벤트 전파 중지(Stop Propagation)
;(() => {

  const boxes = document.querySelectorAll('.box')
  // let useCapture = true // true = capturing
  let useCapture = false // false = bubbling

  // body
  document.body.addEventListener('click', (e) => {
    const element = e.currentTarget
    console.log(element.localName)
  }, useCapture)

  // box 1
  boxes.item(0).addEventListener('click', (e) => {
    e.stopPropagation()
    const element = e.currentTarget
    console.log(element.className.replace('box', '').trim())

  }, useCapture)
  
  // box 2
  boxes.item(1).addEventListener('click', (e) => {
    // e.stopPropagation()
    const element = e.currentTarget
    console.log(element.className.replace('box', '').trim())

  }, useCapture)

  // box 3
  boxes.item(2).addEventListener('click', (e) => {
    // e.stopPropagation()
    const element = e.currentTarget
    console.log(element.className.replace('box', '').trim())

  }, useCapture)

})()