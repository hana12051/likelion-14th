// 유니언 타입을 사용해 명시적으로 undefined를 허용할 수 있지만,
// 이 경우 age를 반드시 지정해야 합니다.
type User2 = {
  name: string
  age: number | undefined
}

const myounghoon: User2 = {
  name: '명훈',
  age: undefined, // 지정하지 않으면 오류 발생
}
