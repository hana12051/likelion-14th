// 타입 알리아스 전용(Type only) 기능들

// 1. 기본 타입에 대한 타입 별칭
type Age = number

// 2. 유니언 타입
type WindowState = 'open' | 'closed' | 'minimized'

// 3. 튜플
type StringNumberPair = [string, number]

// 4. 인터섹션 타입
type PartialStyle = { width: number }
type Style = PartialStyle & { height: number }

// 5. 매핑된 타입 / 유틸리티 타입 (기존 타입에서 새로운 타입 만들기)
interface User {
  name: string
  age: number
  email: string
}

type ReadonlyUser = Readonly<User>

const readonlyUser: ReadonlyUser = {
  name: '소미',
  email: 'somi@example.com',
  age: 16,
}

// readonlyUser.name = '주연' // Error: Cannot assign to 'name' because it's a readonly 

// 6. 타입이 지정된 배열
type Users = User[]
