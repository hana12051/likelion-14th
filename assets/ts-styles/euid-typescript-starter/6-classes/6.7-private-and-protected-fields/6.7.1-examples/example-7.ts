// 동일한 클래스의 서로 다른 인스턴스는 
// 서로의 `private` 필드에 접근할 수 있습니다.

class A {
  private x = 10

  public sameAs(other: A) {
    // 오류 없음
    return other.x === this.x
  }
}

const a1 = new A()
const a2 = new A()
console.log(a1.sameAs(a2)) // true
