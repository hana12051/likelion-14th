interface Point {
  readonly x: number
  readonly y: number
}

const point: Point = { x: 10, y: 20 }
//    ^?

// 이렇게 하면 오류가 발생합니다.
// Error: Cannot assign to 'x' because it's a readonly property.
// point.x = 5 
