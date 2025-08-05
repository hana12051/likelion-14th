type UserAges = Record<string, number>

const userAges: UserAges = {
  jinwoo: 26,
  taemin: 24,
  sangjun: 32,
}

console.log(userAges)

// Record 유틸리티 타입은 다음의 인덱스 시그니처와 동일합니다.
type UserAges2 = { [key in string]: number }
