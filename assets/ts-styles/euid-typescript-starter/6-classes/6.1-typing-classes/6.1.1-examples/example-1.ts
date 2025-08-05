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

const person = new Person('김아람', 22)
person.greet() // '안녕하세요! 제 이름은 김아람이고 22살입니다.'

// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// const person2 = new Person(22, '김아람')
