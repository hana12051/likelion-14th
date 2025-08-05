// 객체 리터럴에는 as const를 사용하세요.
const point = { x: 10, y: 20 } as const

// 이렇게 하면 에러가 발생합니다.
// Error: Cannot assign to 'x' because it's a readonly property.
// point.x = 5 
