// 명시적 선언(긴 형태)를 권장합니다.
class Person2 {
  private name: string
  readonly age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  public greet() {
    console.log(
      `안녕하세요! ${this.name}님. 당신의 나이가 ${this.age}세 맞나요?`
    )
  }
}
