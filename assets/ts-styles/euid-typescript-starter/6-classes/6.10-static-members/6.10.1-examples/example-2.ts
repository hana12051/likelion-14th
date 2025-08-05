// 정적 멤버에도 접근 제어자를 설정할 수 있습니다.

class MyClass {
  
  private static myStaticProperty = 42

  static myStaticMethod() {
    return MyClass.myStaticProperty
  }

}

// console.log(MyClass.myStaticProperty) // Error: Property 'myStaticProperty' is private and only accessible within class 'MyClass'.
