//---------------------------------
// 기본 매개변수 
//---------------------------------

;(() => {
  
  function query(selector, context) {
    if (!context) context = document
    const element = context.querySelector(selector)
    return element
  }
  
  function queryAll(selector, context) {
    if (!context) context = document
    const nodeList = context.querySelectorAll(selector)
    return nodeList
  }

  const body = query('body')
  const h1 = query('h1')
  const button = query('button', query('header[data-index="2"]'))
  const buttons = queryAll('button', document.getElementById('contoller'))

  console.log(body)
  console.log(h1)
  console.log(button)
  console.log(buttons)

})


// 선택적 매개변수 설정
;(() => {

  function createUser(name, age, etcInfo = {}) {
    // 매개변수 구조 분해 할당
    const { bio, friends } = etcInfo
    
    const user = {}

    user.name = name
    user.age = age
    user.bio = bio
    user.friends = friends

    return user

  }

  // 객체 타입을 함수에 전달할 인수로 설정하면 객체의 속성을 모두 기억할 필요가 없다.
  const lee = createUser('이재홍', 21, { friends: ['박현준', '김재수'], bio: '지역에서 착하기로 소문난 농사꾼' })
  console.log(lee)

  const park = createUser('박선홍', 19)
  console.log(park)

})


;(() => {

 const aLink = document.querySelector('h1 > a')

// 매개변수를 그대로 사용할 때
aLink.addEventListener('click', (e) => {
  // 브라우저 기본 작동 방지
  e.preventDefault()

  // const aElement = e.currentTarget
  // const { currentTarget: aElement } = e 

  // 이벤트가 연결된 대상의 속성 가져오기
  const relValue = e.currentTarget.getAttribute('rel')
  console.log(relValue)

  // 이벤트가 연결된 대상의 속성 설정하기
  e.currentTarget.removeAttribute('rel')
  e.currentTarget.setAttribute('lang', 'ko')
  e.currentTarget.textContent = '자바스크립트'

})


  // 매개변수를 구조 분해 할당했을 때
 function handleClick2({ currentTarget: aElement}) {
  e.preventDefault()

  const relValue = aElement.getAttribute('rel')
  console.log(relValue)

  aElement.removeAttribute('rel')
  aElement.setAttribute('lang', 'ko')
  aElement.textContent = '자바스크립트'
 }

})()