// 클래스에서도 사용할 수 있습니다.
class Point {
  constructor(readonly x: number, readonly y: number) {}
}

const point = new Point(10, 20)

// 이렇게 하면 오류가 발생합니다.
// Error: Cannot assign to 'x' because it's a readonly property.
// point.x = 5 
