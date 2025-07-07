;(() => {
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  let initialValue = 0

  // reduce() 메서드를 사용해 만든 sum() 함수
  const total = numbers.reduce(
    (
      prevValue, 
      currentValue, 
      // currentIndex, 
      // array
    ) => {
      // prevValue = 0 | 0 + 1 | 1 + 2 | 3 + 3 | 6 + 4 | ...
      // currentValue = 1 | 2 | 3 | 4 | ...
      // currentIndex = 0 | 1 | 2 | 3 | ...
      // array = numbers
      const nextValue = prevValue + currentValue
      return nextValue
    }, 
    initialValue
  )

  console.log(total)
  
  // for문 사용해 만든 sum() 함수


})()

const 숫자들 = [1, 2, 3]

let 초깃값 = 5

const 콜백 = (이전누산값, 현재값/* , 현재인덱스, 배열 */) => {
  const 누산된값 = 이전누산값 + 현재값
  return 누산된값
}

const 총합계 = 숫자들.reduce(콜백, 초깃값)

console.log(총합계)


// sum() 함수 만들기 : for 문 vs. reduce() 메서드
;(() => {
  const numbers = [2, 4, 6, 8, 12]

  let totalForValue = sumFor(...numbers)
  console.log({totalForValue})

  let totalReduceValue = sumReduce(...numbers)
  console.log({totalReduceValue})
  
  // for문 사용해 만든 sum() 함수
  function sumFor(...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) total += numbers[i]
    return total
  }

  // reduce() 메서드를 사용해 만든 sum() 함수
  function sumReduce(...numbers) {
    return numbers.reduce((total, number) => total + number, 0)
  }

})()


const fruits = [
	'바나나', 
	'애플', 
	'오렌지', 
	'애플', 
	'바나나', 
	'워터 멜론', 
	'오렌지',
	'워터 멜론',
	'바나나',
	'참외',
]

const fruitsCount = {}

for(let i = 0, l = fruits.length; i < l; ++i) {
	const fruit = fruits[i]
	if (fruitsCount[fruit]) {
		fruitsCount[fruit] += 1
	} else {
		fruitsCount[fruit] = 1
	}
}

console.log(fruitsCount)

const scores = [85, 92, 77, 94, 88];

const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

console.log('📌 평균 점수:', average); // 📌 평균 점수: 87.2



const fourGuardianGods = ['동청룡', '서백호', '남주작', '북현무'];

const initials = fourGuardianGods.reduce((acc, god) => acc + god[0], '');

console.log('📌 첫 글자 조합:', initials); // 📌 첫 글자 조합: 동서남북


const nested = [[1, 3], [5, 7, 9], [11]];

const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log('📌 평탄화된 배열:', flat); // 📌 평탄화된 배열: [1, 3, 5, 7, 9, 11]



;(() => {
  const list = [
    { content: '하나' },
    { content: '둘' },
    { content: '셋' },
    { content: '넷' },
    { content: '다섯' },
  ];

  const template = list.reduce((acc, item) => {
    return acc + `<li>${item.content}</li>`;
  }, '');

  console.log(template);
  // 출력: <li>하나</li><li>둘</li><li>셋</li><li>넷</li><li>다섯</li>
})();


;(() => {
  const list = [
    { content: '하나' },
    { content: '둘' },
    { content: '셋' },
    { content: '넷' },
    { content: '다섯' },
  ];

  const template = list.map(item => `<li>${item.content}</li>`).join('');

  console.log(template);
})();
