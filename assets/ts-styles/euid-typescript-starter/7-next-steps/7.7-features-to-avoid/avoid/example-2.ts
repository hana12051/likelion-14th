// 프로퍼티 단축(property shorthand) 사용을 피하세요.
class Person {
  constructor(private name: string, readonly age: number) {}

  public greet() {
    console.log(`안녕하세요! ${this.name}님. 당신의 나이가 ${this.age}세 맞나요?`)
  }
}
