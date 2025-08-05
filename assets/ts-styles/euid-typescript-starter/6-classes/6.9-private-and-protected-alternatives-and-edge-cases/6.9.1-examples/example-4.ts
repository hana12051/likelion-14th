// 런타임에서 진짜로 `private` 필드를 강제하려면 
// JavaScript의 # 문법을 사용하세요.

class Person {
  #name: string

  constructor(name: string) {
    this.#name = name
  }

  public greet() {
    console.log(`안녕하세요! 제 이름은 ${this.#name}입니다.`)
  }
}

const person = new Person('박창현')
person.greet() // '안녕하세요! 제 이름은 박창현입니다.'

// 아래 코드는 실패합니다.
// console.log(person.#name) // Error: Property '#name' is not accessible outside class 'Person' because it has a private identifier.
