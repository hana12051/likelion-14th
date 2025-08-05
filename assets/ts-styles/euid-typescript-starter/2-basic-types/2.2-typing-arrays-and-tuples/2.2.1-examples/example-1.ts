// 배열(Array) 타입
const numbers: number[] = [1, 2, 3]

// 제네릭(Generic) 타입
const numbers2: Array<number> = [1, 2, 3]
//    ^?

// 튜플(Tuple) 타입
const tuple: [number, string] = [1, '타입스크립트']

// 제네릭 타입을 사용한 혼합 배열 
// - 위의 튜플과 유사하지만, 완전히 동일하지 않음.
const tuple2: Array<number | string> = [1, '타입스크립트']
//    ^?

// 고정 길이 배열
const fixedLength: [number, number, number] = [1, 2, 3]
