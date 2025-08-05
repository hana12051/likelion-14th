// 인터페이스는 타입을 확장할 수 있습니다.

type User = { name: string }

interface UserWithAge extends User {
  age: number
}
