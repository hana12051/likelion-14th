// const를 사용하면 추론된 타입이 더 좁아집니다. (리터럴 타입)
const age = 42
const message = '안녕, TypeScript 🦁'
const isAdmin = true
const nullThing = null
const undefinedThing = undefined

// Error: Cannot assign to 'message' because it is a constant.
// message = '상수에 새 타입을 할당하려 할 경우, 컴파일 타임 오류 발생'
