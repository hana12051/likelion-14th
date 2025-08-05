// 타입 선언이 없으면 필드 타입은 `any`가 됩니다.
class Person {
  name
  age

  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log(`안녕하세요! 제 이름은 ${this.name}이고 ${this.age}살입니다.`)
  }
}

const person = new Person('김아람', 22)
