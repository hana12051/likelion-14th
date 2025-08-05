// JavaScript의 # 문법이 
// 런타임에서 강제됨을 보여주는 순수 JS 파일

class Person {
  #name

  constructor(name) {
    this.#name = name
  }

  greet() {
    console.log(`안녕하세요! 제 이름은 ${this.#name}입니다.`)
  }
}

const person = new Person('박창현')
person.greet() // '안녕하세요! 제 이름은 박창현입니다.'

// 아래 코드는 실패합니다.
// console.log(person.#name) // Error: Property '#name' is not accessible outside class 'Person' because it has a private identifier.
