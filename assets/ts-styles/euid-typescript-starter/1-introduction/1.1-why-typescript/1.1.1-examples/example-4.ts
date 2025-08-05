// 타입이 지정된 TypeScript 함수
function add(a: number, b: number): number {
  return a + b
}

add(9, 11)

// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// add('스물', 2)
