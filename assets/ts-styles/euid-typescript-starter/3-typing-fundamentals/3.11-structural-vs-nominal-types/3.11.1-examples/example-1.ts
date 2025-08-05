// TypeScript 타입은 구조적이지, 명목적이지 않습니다.

interface Product {
  id: number
  name: string
}

interface User {
  id: number
  name: string
}

const product: Product = { id: 1, name: '진우' }

// 두 인터페이스의 구조가 같으므로 할당 가능
const user: User = product // 오류 없음

