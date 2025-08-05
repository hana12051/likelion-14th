// `myLibrary` 객체에 대한 타입을 앰비언트 타입으로 선언합니다.

declare const myLibrary: {
  version: string
  add: (a: number, b: number) => number
  subtract: (a: number, b: number) => number
  multiply: (a: number, b: number) => number
  divide: (a: number, b: number) => number
}

// 실행 가능한 코드는 d.ts 파일에 작성하면 안 됩니다.

// export function doStuff(message: string) {
//   console.log(message)
// }

// 일반 타입(plain types)은 d.ts 파일에 작성하면 안 됩니다.

// export type User = {
//   name: string
//   age: number
// }
