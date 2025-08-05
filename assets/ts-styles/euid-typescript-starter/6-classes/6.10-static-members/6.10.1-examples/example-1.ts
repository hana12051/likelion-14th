// 정적 멤버는 모든 인스턴스 간에 공유됩니다.
class MyClass {
  static myStaticProperty = 42
  static myStaticMethod() {
    return '안녕'
  }
}

// 정적 멤버를 호출 할 인스턴스를 만들 필요가 없습니다.
console.log(MyClass.myStaticProperty) // 42
console.log(MyClass.myStaticMethod()) // '안녕'
