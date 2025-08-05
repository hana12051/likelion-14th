// 타입(type)과 인터페이스(interface)는 
// 대부분 서로 바꿔서 사용할 수 있습니다.
type UserType = { 
  name: string 
  age: number 
}

interface UserInterface {
  name: string
  age: number
}

// 둘 다 함수 시그니처(signature)를 표현할 수 있습니다.
type UserFunctionType = (name: string, age: number) => void

interface UserFunctionInterface {
  (name: string, age: number): void
}
