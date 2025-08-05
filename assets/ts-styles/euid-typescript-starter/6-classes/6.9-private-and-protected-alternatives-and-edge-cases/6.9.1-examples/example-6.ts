// TypeScript는 상위 클래스의 `private` 속성과 같은 이름의 
// `private` 속성을 하위 클래스에서 선언하는 것을 금지합니다.

class Base {
  private value = 1
}

// 여기서 타입 오류가 발생해야 한다고 명시하는 주석입니다.
// 오류가 없으면 경고를 발생시켜, 오류가 사라졌을 때 리팩토링 기회를 제공
//@ts-expect-error
class Sub extends Base {
  private value = 2 // 컴파일 오류
  // Error: Class 'Sub' incorrectly extends base class 'Base'.
  //        Types have separate declarations of a private property 'value'.
}

// 하지만 private 필드(#)의 경우에는 허용됩니다.

class Base2 {
  #value = 1
}

class Sub2 extends Base2 {
  #value = 2 // 오류 아님
}
