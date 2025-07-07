
// for...of 문
;(() => {
  
  const cssMap = {
    'display': 'grid',
    'font-size': '48px',
    'margin-block-end': '40px',
    'gap': '12px',
  }

  // console.log(Array.from(cssMap)) ❌
  // console.log(Object.entries(cssMap)) ✅

  const objectEntriesResult = [
    ['display', 'grid'],
    ['font-size', '48px'],
    ['margin-block-end', '40px'],
    ['gap', '12px'],
  ]
  // console.log(objectEntriesResult)
  
  // 객체 -> 배열 변경
  // 구조 분해 할당

  // for(const keyValue/* [key, value] */ of Object.entries(cssMap) /* [[key, value], [key, value]] */) {
  //   console.log(keyValue[0]) // key
  //   console.log(keyValue[1]) // value
  // }

  for (const [key, value] of Object.entries(cssMap)) {
    console.log(key)
    console.log(value)
  }

})

// Object.keys()
// Object.values()
;(() => {

  // 객체
  const cssMap = {
    'display': 'grid',
    'font-size': '48px',
    'margin-block-end': '40px',
    'gap': '12px',
  }

  // 객체 -> 배열
  // console.log(Object.keys(cssMap))
  // console.log(Object.values(cssMap))
  // console.log(Object.entries(cssMap))

  // 객체 순환 속성 및 값을 확인
  // 객체 -> 배열 -> for...of 문

  for (const [key, value] of Object.entries(cssMap)) {
    // console.log({ key, value })
  }

  for (const key of Object.keys(cssMap)) {
    // console.log(key)
  }
  
  for (const value of Object.values(cssMap)) {
    console.log(value)
  }

})

;(() => {

  const 프로그래밍_언어 = {
  자바스크립트: 'JavaScript',
  파이썬: 'Python',
  루비: 'Ruby',
  고: 'Golang',
};

// 객체의 key 값(한글 이름)을 모두 출력
Object.keys(프로그래밍_언어).forEach((언어) => {
  console.log(언어);
});
})


const 점수 = {
  수학: 90,
  과학: 85,
  영어: 92,
  국어: 100,
};

// 점수 값들만 추출해서 합계 계산
const 총합 = Object.values(점수).reduce((합, 현재값) => 합 + 현재값, 0);

console.log(총합);

;(() =>{

;(() => {
  const 프로필 = {
    이름: '하영',
    성별: '여성',
    나이: 26,
    거주지: '서울',
    직업: '공무원',
  };

  // 각 키-값 쌍을 <tr>로 변환
  const rows = Object.entries(프로필)
    .map(([key, value]) => {
      return /* html */`
        <tr>
          <th scope="row">${key}</th>
          <td>${value}</td>
        </tr>
      `;
    })
    .join('');

  // 전체 테이블 템플릿 문자열 생성
  const templateString = /* html */`
    <table id="practice">
      <caption>프로필 정보</caption>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;

  // 콘솔 확인 or 화면 출력
  console.log(templateString);

  // (선택) 실제 DOM에 삽입하려면:
  document.body.innerHTML += templateString;
})();


})()


// 실습 3. 객체의 키, 값 표로 출력
// 다음 객체의 키, 값을 표(table)로 템플릿 스트링으로 출력합니다.
;(() => {

  const 프로필 = {
    이름: '하영',
    성별: '여성',
    나이: 26,
    거주지: '서울',
    직업: '공무원',
  }

  console.log(Object.entries(프로필))

  // for...of → 문이므로 값을 반환 ❌
  // forEach() → 식이지만 undefined 반환 ❌
  // map() + join() → 식으로 값을 반환 ✅
  // reduce() → 식으로 값을 반환 ✅

  const tableTemplate = `
    <table id="practice">
      <caption>프로필 정보</caption>
      <tbody>
        ${Object
          .entries(프로필)
          .map(([key, value]) => `
            <tr>
              <th scope="row">${key}</th>
              <td>${value}</td>
            </tr>
          `)
          .join('')
        }
      </tbody>
    </table>
  `

  console.log(tableTemplate)
})
