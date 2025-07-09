

//렌더빌 이뵹이 증가는 코드
;(() => {
  
  // <li>면이 익으면 불을 끄고 그릇에 옮깁니다.</li>
  // <li>물을 냄비에 붓고 끓입니다 (약 500ml).</li>
  // <li>물이 끓으면 스프를 먼저 넣습니다.</li>
  // <li>취향에 따라 파, 계란, 치즈 등을 추가합니다.</li>
  // <li>호호 불며 맛있게 먹습니다.</li>

  const recipeList = [
    '면이 익으면 불을 끄고 그릇에 옮깁니다.',
    '물을 냄비에 붓고 끓입니다 (약 500ml)',
    '물이 끓으면 스프를 먼저 넣습니다.',
    '취향에 따라 파, 계란, 치즈 등을 추가합니다.',
    '호호 불며 맛있게 먹습니다.',
  ]

  const listElement = document.querySelector('.ramen-cooking-recipe')

  for (const recipe of recipeList) {
    const item = document.createElement('li')
    item.textContent = recipe
    listElement.appendChild(item)
  }

})

// 요소(Element) 객체의 유용한 메서드
;(() => {
  
  // prepend()

  // append()

  // before()

  // after()

  // insertAdjacentElement()

  // insertAdjacentHTML()

})()