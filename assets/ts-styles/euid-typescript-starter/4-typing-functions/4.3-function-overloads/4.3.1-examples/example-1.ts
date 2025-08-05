// 함수 오버로드 시그니처
function add(a: number, b: number): number
function add(a: string, b: string): string

// 함수 구현부
function add(a: any, b: any): any {
  return a + b
}

// 사용 예시
const sum = add(10, 20) 
const concatenatedString = add('안녕 ', '타입스크립트!')

console.log(sum) // 30
console.log(concatenatedString) // '안녕 타입스크립트!'
