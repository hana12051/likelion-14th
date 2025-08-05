// --------------------------------------------------------------------------
// ✅ TypeScript의 readonly 기능
// --------------------------------------------------------------------------

// 1. 아래 Person 인터페이스에서 age와 address를 readonly로 표시하세요.
// 그리고 아래 `updatePerson` 함수에서의 수정이 허용되지 않음을 확인하세요.

interface Address {
  street: string
  city: string
}

interface Person {
  firstName: string
  lastName: string
  age: number
  address: Address
}

function updatePerson(person: Person) {
  // Error: Cannot assign to 'age' because it is a read-only property.
  person.age = 24
  // Error: Cannot assign to 'address' because it is a read-only property.
  person.address = { street: '새로운 거리', city: '새로운 도시' }
  console.log(person)
}


// 2. 아래의 personConst 객체를 `as const`로 불변 객체로 만드세요.
// 그리고 아래 객체의 속성을 변경할 수 없음을 확인하세요.

const personConst = {
  name: '한재현',
  age: 22,
}

// personConst.name personConst.age 값을 변경해보세요.
// Error: Cannot assign to 'name' because it is a read-only property.
personConst.name = '한준우'
// Error: Cannot assign to 'age' because it is a read-only property.
personConst.age = 28