import { calculateTriangleArea } from './triangle'

function calculateRectangleArea(length, width) {
  return length * width
}

function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2)
}

function logAddress(address) {
  console.log(address.street)
  console.log(address.city)
  console.log(address.zip)
}

console.log(`Rectangle 영역: ${calculateRectangleArea('5', 10)}`) // 첫 번째 인자에 잘못된 타입 전달
console.log(`Circle 영역: ${calculateCircleArea(7, 5)}`) // 인수가 너무 많음
console.log(`Triangle 영역: ${calculateTriangleArea(4)}`) // 두 번째 인자가 없음
logAddress({ street: '성북동', city: '서울' }) // zip 코드가 없음
