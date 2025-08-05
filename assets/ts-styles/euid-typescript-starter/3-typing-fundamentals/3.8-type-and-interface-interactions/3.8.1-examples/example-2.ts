// 타입도 인터페이스를 확장할 수 있습니다.

interface User {
  name: string
}

type UserWithAge = User & { age: number }
