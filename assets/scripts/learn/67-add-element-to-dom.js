//동메 요소 추가

//돔에 요소 생성

// 요소 생성 (create element)
;(() => {
  
  // <section> 요소 생성
  const sectionElement = document.createElement('section')
  // 생성된 요소에 클래스 이름 설정(추가)
  sectionElement.classList.add('sectioning-content')
  // 커스텀 속성 설정(추가)
  sectionElement.dataset.category = 'sports'
  // 텍스트 콘텐츠 추가
  sectionElement.textContent = '스포츠는 역시 멋사!'
  // HTML 콘텐츠 추가(덮어쓰기)
  sectionElement.innerHTML = `<h2>${sectionElement.textContent}</h2>`
  console.log(sectionElement)


  // 요소 동적 생성 (dynamic creating element node)
;(() => {
  
  // <section> 요소 생성
  const sectionElement = document.createElement('section')
  // 생성된 요소에 클래스 이름 설정(추가)
  sectionElement.classList.add('sectioning-content')
  // 커스텀 속성 설정(추가)
  sectionElement.dataset.category = 'sports'
  // 텍스트 콘텐츠 추가
  sectionElement.textContent = '스포츠는 역시 멋사!'
  // HTML 콘텐츠 추가(덮어쓰기)
  sectionElement.innerHTML = `<h2>${sectionElement.textContent}</h2>`
  console.log(sectionElement)
  
  // <table> 요소 생성
  const tableElement = document.createElement('table')
  // 생성된 요소에 클래스 이름 설정(추가)
  tableElement.className = 'zebra-table'
  // 커스텀 속성 설정(추가)
  tableElement.setAttribute('data-presentation', 'true')
  // 표 제목 텍스트 콘텐츠 추가
  tableElement.textContent = '얼룩말 사육 표'
  // 표 제목 HTML 콘텐츠 추가(덮어쓰기)
  tableElement.innerHTML = `<caption>${tableElement.textContent}</caption>`
  
  console.log(tableElement)

})()
})

//라면레시피
;(() => {

const ol = document.querySelector('.ramen-cooking-recipe')

const listItems = document.createElement('li')
listItems.textContent = '잘먹겠습니다'

ol.appendChild(listItems)
})


// 요소 위치 변경 (appendChild 활용)
;(() => {
  
  const button = document.querySelector('button')
  const section = button.nextElementSibling
  const [list1, list2] = section.children // HTMLCollection

  button.addEventListener('click', () => {
    // 좋아하는 과일 목록의 첫번째 항목을
    // 좋아하지 않는 과일 목록의 마지막 항목으로 위치 이동
  })

})

// 특정 요소 앞에 생성된 요소 삽입
;(() => {

  const ramenCookingRecipe = document.querySelector('.ramen-cooking-recipe')
  // const [,,targetElement] = ramenCookingRecipe.children
  const targetRecipe = ramenCookingRecipe.children[2]
  // console.log(targetElement)
  
  // 동적으로 생성한 삽입 요소
  // <li>면을 넣고 3~4분간 끓입니다.</li>
  const insertRecipe = document.createElement('li')
  insertRecipe.textContent = '면을 넣고 3~4분간 끓입니다.'
  // console.log(recipeItem)

  // 동적 생성된 요소를 목표 요소 앞에 삽입
  targetRecipe.parentElement.insertBefore(insertRecipe, targetRecipe)

})

;(() => {

  
})
