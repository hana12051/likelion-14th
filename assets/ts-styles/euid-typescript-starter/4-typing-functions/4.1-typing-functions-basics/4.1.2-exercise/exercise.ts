// --------------------------------------------------------------------------
// ✅ TypeScript에서 함수에 타입 지정
// --------------------------------------------------------------------------

// 1. isEven 함수가 `num`을 number 타입으로 받고, boolean을 반환하도록 타입을 지정하세요.
function isEven(num) {
  return num % 2 === 0
}

// 2. multiply 함수가 두 개의 number 타입 매개변수를 받아 곱셈 결과를 number로 반환하도록 타입을 지정하세요.
const multiply = (a, b) => {
  return a * b
}

// 3. logError 함수가 `message`를 string 타입으로 받고, 반환값이 없도록(void) 타입을 지정하세요.
function logError(message) {
  console.error(message)
}

// 4. getLength 함수가 모든 타입의 요소를 담을 수 있는 배열(arr)을 받아, number를 반환하도록 타입을 지정하세요.
function getLength(arr) {
  return arr.length
}

// 5. createUser 함수가 `name`(string)과 `age`(number)를 받아, name과 age 속성을 가진 객체를 반환하도록 타입을 지정하세요.
function createUser(name, age) {
  return { name, age }
}

// 6. calculateArea 함수 표현식이 `width`와 `height`를 number 타입으로 받아, number를 반환하도록 타입을 지정하세요.
const calculateArea = function (width, height) {
  return width * height
}
