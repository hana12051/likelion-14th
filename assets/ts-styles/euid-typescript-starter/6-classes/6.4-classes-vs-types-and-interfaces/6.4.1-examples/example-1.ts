interface Person {
  name: string
  age: number
}

// 이렇게 하면 실패합니다.
// const person = new Person() // Error: Cannot create an instance of an interface.

type PersonType = {
  name: string
  age: number
}

// 이것도 실패합니다.
// const personType = new PersonType() // Error: Cannot create an instance of a type.

// 대신, 인터페이스나 타입의 인스턴스는 객체 리터럴을 통해 생성해야 합니다.
const alice: Person = {
  name: '연오랑',
  age: 37,
}
