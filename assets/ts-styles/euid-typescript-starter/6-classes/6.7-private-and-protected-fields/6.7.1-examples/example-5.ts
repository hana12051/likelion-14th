// 파생(자식) 클래스에서는 `private` 필드에 접근할 수 없으며, 
// 이를 오버라이드(재정의)할 수도 없습니다.

class Base {
  private x = 0
}


class Derived extends Base {
  // x = 1
  // Error: Class 'Derived' incorrectly extends base class 'Base'.
  //        Property 'x' is private in type 'Base' but not in type 'Derived'.
}