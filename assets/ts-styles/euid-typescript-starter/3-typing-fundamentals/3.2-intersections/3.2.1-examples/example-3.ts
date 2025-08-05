type User = { name: string } & { age: number }
//   ^?

// Prettify 유틸리티는 
// 인터섹션 타입을 더 읽기 쉽게 만들어줍니다.
type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type PrettyUser = Prettify<User>
//   ^?

// 또는 "Prettify TypeScript: Better Type Previews" 
// VS Code 확장을 사용할 수도 있습니다.
