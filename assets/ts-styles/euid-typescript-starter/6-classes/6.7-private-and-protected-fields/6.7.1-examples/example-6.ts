// 형제(같은 부모를 가진) 클래스에서는 
// `protected` 필드에 접근할 수 없습니다.

class Base {
  protected x: number = 1
}

class Derived1 extends Base {
  protected x: number = 2
}

class Derived2 extends Base {
  f1(derived2: Derived2) {
    derived2.x = 10
  }

  f2(derived1: Derived1) {
    // derived1.x = 10 
    // Error: Property 'x' is protected and only accessible within class 'Derived1' and its subclasses.
  }
}
