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
})()


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