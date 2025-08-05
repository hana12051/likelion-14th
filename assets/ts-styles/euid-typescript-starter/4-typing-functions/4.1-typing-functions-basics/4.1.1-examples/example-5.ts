// 구조적 타입 지정은 함수에도 적용됩니다. 다음은 유효한 예시입니다.
let add = (a: number, b: number): number => a + b
let add2 = (c: number, d: number): number => c + d
add = add2

// 잘못된 예시. 인수의 개수가 다릅니다.
let add3 = (a: number, b: number, c: number): number => a + b + c
// add = add3 // 오류

// 마지막 매개변수가 선택적이면, 여전히 유효합니다.
let add4 = (a: number, b: number, c?: number): number => a + b + (c || 0)
add = add4
