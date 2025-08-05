// 인덱스 시그니쳐(index signature) 
// `[key: string]`을 사용하여 어떤 다른 속성 추가도 허용
interface UserWithAnyProperties {
  id: number
  name: string
  [key: string]: any
}

const user: UserWithAnyProperties = {
  id: 5,
  name: '진우',
  age: 26,
}
