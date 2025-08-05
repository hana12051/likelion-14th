// --------------------------------------------------------------------------
// ✅ 정적(static) 멤버
// --------------------------------------------------------------------------

// 연습 1 
// 아래 클래스를 static 필드 `pi`와 반지름을 받아서 
// 넓이를 계산하는 static 메서드 `calculateArea`를 사용하도록 변경하세요.

class Circle {
  pi: number = 3.14

  radius: number

  constructor(radius: number) {
    this.radius = radius
  }

  calculateArea(): number {
    return this.pi * this.radius * this.radius
  }
}

// 연습 2
// 생성된 인스턴스의 개수를 추적하는 
// private static 필드 `count`를 가진 `Counter` 클래스를 만드세요.
// 현재 count 값을 반환하는 `getCount` 메서드도 포함하세요.