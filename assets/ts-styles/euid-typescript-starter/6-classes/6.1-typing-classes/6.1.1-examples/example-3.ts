// 상속은 일반 JavaScript와 동일하게 `extends` 키워드를 사용합니다.

// 베이스 클래스 (base class)
class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log(`안녕하세요! 제 이름은 ${this.name}이고 ${this.age}살입니다.`)
  }
}

// 파생 클래스 (derived class)
class Employee extends Person {
  jobTitle: string

  constructor(name: string, age: number, jobTitle: string) {
    super(name, age)
    this.jobTitle = jobTitle
  }

  greet() {
    console.log(`안녕하세요! 제 이름은 ${this.name}이고 ${this.age}살입니다. 그리고 ${this.jobTitle} 일을 합니다.`)
  }
}
