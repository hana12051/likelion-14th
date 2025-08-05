// 인터페이스와 타입 모두 클래스와 함께 사용할 수 있습니다.

interface Point {
  x: number
  y: number
}

class SomePoint implements Point {
  x = 1
  y = 2
}

type Point2 = {
  x: number
  y: number
}

class SomePoint2 implements Point2 {
  x = 1
  y = 2
}
