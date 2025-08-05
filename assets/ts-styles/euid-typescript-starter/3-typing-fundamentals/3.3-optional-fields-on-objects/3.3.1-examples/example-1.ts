type User = {
  name: string
  age?: number
}

// age 속성이 옵션이므로 생략할 수 있습니다.
const jinwoo: User = {
  name: '진우',
}

// 또는 명시적으로 undefined 값을 지정할 수도 있습니다.
const jaesung: User = {
  name: '재성',
  age: undefined,
}
