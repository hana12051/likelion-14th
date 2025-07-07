// 나머지 매개 변수/ 전개 구문

;(() => {
//전개 연산자 {...}

//배열 전개 

const breads = ['크림빵', '소보로', '야끼소바빵']
console.log(...breads)
})

;(() =>{

const team =['one', 'two', 'three']


})()


//const() 매서드 vs전개 구문

// 나머지 매개변수 (Rest Parameters)
;(() => {

  function toArray(likeArrayObject) {
    return Array.prototype.slice.call(likeArrayObject)
  }
  
  function logNames() {
    /* 인자(arguments): 매개변수의 집합 */
    // console.log(arguments)

    // 인자 집합은 배열이 아니다. 유사 배열 객체이다.
    console.log(Array.isArray(arguments)) // false

    // 유사배열 객체 -> 배열로 변경하기
    // Array.from()
    console.log(Array.from(arguments))
    // 전개 구문
    console.log([...arguments])
    // 메서드 빌려쓰기 패턴
    console.log(Array.prototype.slice.call(arguments))
    // 유틸리티 함수 활용
    console.log(toArray(arguments))

    for (let i = 0, l = arguments.length; i<l; i++) {
      // const arg = arguments[i]
      // console.log(arg)
    }
  }

  logNames(
    '진형',
    '민희',
    // '수영',
    '진구',
    // '초영',
    '영주',
    // '주효',
  )

})()

;(() => {

  gsap 
  .set('1h', { opa})
})

