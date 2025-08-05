// 생성자 매개변수에 `private`을 지정하면 
// 동일한 이름의 `private` 필드가 자동으로 생성됩니다.

class Person {
  constructor(private name: string) {}

  public greet() {
    console.log(`안녕! 내 이름은 ${this.name}이야.`)
  }
}

const person = new Person('이정준')
person.greet() // '안녕! 내 이름은 이정준이야.'

// 아래 코드는 실패합니다.
// console.log(person.name) // Error: Property 'name' is private and only accessible within class 'Person'.

// 참고: TypeScript는 런타임이 아닌 컴파일 타임에만 존재하므로 `private` 필드는 컴파일러가 강제합니다.
// JavaScript로 컴파일 후 실행하면 실제로는 `private` 필드에 접근이 가능합니다.