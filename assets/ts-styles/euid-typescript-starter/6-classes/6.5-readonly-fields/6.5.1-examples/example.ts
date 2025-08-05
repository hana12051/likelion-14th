// 필드는 초기화된 후 수정되지 않도록 `readonly`로 지정할 수 있습니다.
class Person {
  name: string
  readonly age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const person = new Person('최아영', 23)
person.name = '최수민' // 수정 가능
// person.age = 20 // Error: Cannot assign to 'age' because it is a read-only property.
