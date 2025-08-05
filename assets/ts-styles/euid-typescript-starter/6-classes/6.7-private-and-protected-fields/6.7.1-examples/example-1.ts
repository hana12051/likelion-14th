// Private 필드
// 클래스 필드를 private으로 표시하면 
// 클래스 외부에서 해당 필드에 접근하지 못하도록 할 수 있습니다.

class Person {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  public greet() {
    console.log(`안녕! 내 이름은 ${this.name}이야.`)
  }
}

const person = new Person('이정준')
person.greet() // '안녕! 내 이름은 이정준이야.'

// 아래 코드는 실패합니다.
// console.log(person.name) // Error: Property 'name' is private and only accessible within class 'Person'.

// 이것도 실패합니다.
// person.name = '석준호' // Error: Property 'name' is private and only accessible within class 'Person'.
