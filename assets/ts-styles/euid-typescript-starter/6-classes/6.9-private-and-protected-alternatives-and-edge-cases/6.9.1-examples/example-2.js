import { User } from './example1'

const user = new User('123')

// TypeScript에서는 아래 코드가 에러를 발생시키지만,
// 컴파일된 JavaScript에서는 실제로 접근이 가능합니다.
console.log(user.password)
