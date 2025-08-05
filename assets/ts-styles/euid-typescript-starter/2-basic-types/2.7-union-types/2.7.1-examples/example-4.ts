// 최상위 및 최하위 타입
type CountingNumbers = 1 | 2 | 3 | 4 | 5

type OrUnknown = CountingNumbers | unknown
//   ^?

type OrAny = CountingNumbers | any
//   ^?

type OrNever = CountingNumbers | never
//   ^?