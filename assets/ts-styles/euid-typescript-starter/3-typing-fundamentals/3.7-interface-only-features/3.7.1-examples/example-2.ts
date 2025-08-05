// 인터페이스에서만 가능한 기능들
// 2. 인터페이스 선언 병합 (Declaration merging)

interface User {
  name: string
}

interface User {
  age: number
}

const user: User = {
  name: '진우',
  age: 26,
}
