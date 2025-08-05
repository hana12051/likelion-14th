// 자식 클래스는 부모 클래스의 필드를 
// 더 넓은 접근 범위로 노출할 수 있습니다.
class Base {
  protected a = 1
}

class Derived extends Base {
  // 접근 제한자가 없으므로 
  // 공개(public) 속성이 됨
  a = 2 
}

const d = new Derived()
console.log(d.a) // 잘 작동합니다.
