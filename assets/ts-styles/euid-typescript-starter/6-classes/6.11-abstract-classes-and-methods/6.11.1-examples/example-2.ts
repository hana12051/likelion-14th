// 추상 생성자 시그니처 예시

abstract class Base {
  abstract getName(): string

  printName() {
    console.log('안녕! ' + this.getName())
  }
}

class Derived extends Base {
  getName() {
    return '파생된 객체여!'
  }
}

// 생성자 함수가 반드시 `Base`의 서브클래스여야 함을 명시
function greet(Constructor: new () => Base) {
  const instance = new Constructor()
  instance.printName()
}

greet(Derived) // '안녕! 파생된 객체여!'
// greet(Base) // 실패