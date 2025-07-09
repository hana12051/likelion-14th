//실습 짝수가 처음 등장하는 위치 찾기 
;(() => {

const numbers = [1, 3, 5, 7, 2, 4, 6, 8, 10, 12];

const findFirstEvenIndex = (arr) => arr.findIndex(num => num % 2 === 0);

console.log(findFirstEvenIndex(numbers)); // 출력: 4

})

;(() => {

  //특정 객체 찾기
const users = [
  { name: '민수', age: 22 },
  { name: '하영', age: 26 },
  { name: '철수', age: 30 },
];

const index = users.findIndex(user => user.name === '철수');
console.log(index); // 1

})

//조건을 만족하는 값이 없는 경우
;(() => {

const arr = [1, 3, 5];
const index = arr.findIndex(x => x > 10);
console.log(index); // 👉 정답: -1

})


//배열에서 짝수 찾기
;(()=>{

const numbers = [1, 3, 5, 8, 10];

const result = numbers.find(num => num % 2 === 0);
console.log(result);

})

//조건을 만족하는 값이 없는 경우
;(() => {

const numbers = [1, 3, 5];

const result = numbers.find(num => num > 10);
console.log(result);

})

//filter()매서드 

;(() => {

  const words = ['apple', 'dog', 'banana', 'sun', 'orange'];

const longWords = words.filter(word => word.length >= 5);
console.log(longWords);
})


//map() 매서드

// 숫자를 제곱한 배열 만들기
;(() => {

const numbers = [1, 2, 3, 4]

const squares = numbers.map(num => num * num)
console.log(squares); // [1, 4, 9, 16]

})

//사용자 이름만 추출하기
;(() => {

  const users = [
  { name: '민수', age: 22 },  
  { name: '하영', age: 26 },
  { name: '철수', age: 30 },
  ]

const names = users.map(user => user.name)
console.log(names); // ['민수', '하영', '철수']

})

//문자열에 접두사 붙이기
;(() => {

const fruits = ['사과', '바나나', '포도'];

const labeled = fruits.map(fruit => `맛있는 ${fruit}`);
console.log(labeled);

})

;(() =>{

const people = [
  { name: '하영' },
  { name: '민수' },
  { name: '철수' },
  { name: '지민' },
  { name: '수빈' }
];

people.forEach(person => {
  console.log(`${person.name}은 서울 시민입니다.`);
});

// 하영은 서울 시민입니다.
// 민수는 서울 시민입니다.

})

//숫자 총합 구하기 
;(() => {

const numbers = [10, 20, 30]

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 60

})

//최대값 구하기
;(() => {

const nums = [15, 88, 42, 7];
const max = nums.reduce((accumulator, currentValue) => {
  return currentValue > accumulator ? currentValue : accumulator
}, nums[0]);
console.log(max)

})

//객체배영 ->하나의 객체로 변환
;(() => {

const pairs = [
  ['name', '하영'],
  ['age', 26],
  ['job', '공무원']
];

const result = pairs.reduce((obj, [key, value]) => {
  obj[key] = value;
  return obj;
}, {});
console.log(result);
})

//Object.keys()메서드
;(() => {

const user = { name: '하영', age: 26, job: '공무원' };

const keys = Object.keys(user);
console.log(keys); // 👉 ['name', 'age', 'job']

})

//Object.values()메서드
;(() => {

const user = { name: '하영', age: 26, job: '공무원' };
const values = Object.values(user);
console.log(values); // 👉 ['하영', 26, '공무원']

})

//Object.entries()메서드
;(() => {

const user = { name: '하영', age: 26, job: '공무원' };

const entries = Object.entries(user);
console.log(entries);
// 👉 [['name', '하영'], ['age', 26], ['job', '공무원']]

})

;(() => {

// 전체 대화를 시간 순으로 배열에 저장
const chatSequence = [
  { user: '15.김영인🍎', message: '사실 무엇이든 물어보세요 시간이지만' },
  { user: '15.조선현🪟', message: '제가 멋대로 물어보살 이라고 있어요' },
  { user: '15.김영인🍎', message: '아 뭐야 이름 바꾼거구나' },
  { user: '15.조선현🪟', message: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ' },
  { user: '15.조선현🪟', message: '뻔뻔' },
  { user: '15.김영인🍎', message: '잘 걸러들어야겠네' },
  { user: '15.조선현🪟', message: '아잇' }
]

// 사용자별 대화 로그 분리 (Object.entries용)
const chatLog = {}

chatSequence.forEach(({ user, message }) => {
  if (!chatLog[user]) chatLog[user] = []
  chatLog[user].push(message)
})

// Object.entries로 사용자별 메시지 목록 확인
console.log('사용자별 메시지:')
Object.entries(chatLog).forEach(([user, messages]) => {
  console.log(`${user}: ${messages.join(', ')}`)
})

// 대화 순서대로 출력
console.log('\n💬 시간 순 대화:')
chatSequence.forEach(({ user, message }) => {
  console.log(`${user}: ${message}`)
})


})

//영인쌤의 과제
//
;(() => {

const chatSequence = [
  {
    id: 1,
    time: '17:34:00',
    user: '조선현🪟',
    message: '흐어어엉 ㅠㅠㅠ'
  },
  {
    id: 2,
    time: '17:34:05',
    user: '조선현🪟',
    message: '도...도저어어언....'
  },
  {
    id: 3,
    time: '17:34:10',
    user: '김영인🍎',
    message: '그리고 보통 데이터들의 모음은 유니크한 id값이 각각의 데이터를 대표하는 유니크한 값으로 들어간답니다'
  },
  {
    id: 4,
    time: '17:34:20',
    user: '김영인🍎',
    message: '유니크한 값으로 사용해야하니 auto-incrememt나 uuid, 작성된 시점으로 사용하기도 해요'
  },
  {
    id: 5,
    time: '17:35:00',
    user: '조선현🪟',
    message: '오오....!'
  },
  {
    id: 6,
    time: '17:36:00',
    user: '김영인🍎',
    message: '만약에 글 쓴사람이랑 메시지가 같은 경우가 대화하다가 두 번 발생하면'
  },
  {
    id: 7,
    time: '17:36:10',
    user: '조선현🪟',
    message: '네넹'
  },
  {
    id: 8,
    time: '17:36:20',
    user: '김영인🍎',
    message: '두 요소를 구분할 수 없게되는데'
  },
  {
    id: 9,
    time: '17:36:30',
    user: '김영인🍎',
    message: '그걸 구분하게 해주죠'
  },
  {
    id: 10,
    time: '17:36:40',
    user: '조선현🪟',
    message: '헉'
  },
  {
    id: 11,
    time: '17:36:50',
    user: '김영인🍎',
    message: '네넹을 한 번 더쳐보세요'
  }
]

// 시간 기준으로 정렬 (문자열로 정렬 가능)
const sortedChat = [...chatSequence].sort((a, b) => a.time.localeCompare(b.time))

// 출력
sortedChat.forEach(({ id, time, user, message }) => {
  console.log(`[${id}] [${time}] ${user}: ${message}`)
})

})()