// --------------------------------------------------------------------------
// ✅ TypeScript의 `never` 타입
// --------------------------------------------------------------------------

// 1. 이 함수가 `never`를 반환하도록 타입을 지정하세요.
function error(message: string) {
  throw new Error(message)
}


// 2. describeUser 함수의 switch 문이 모든 경우를 빠짐없이 처리하도록 `never`를 사용하세요.
interface Admin {
  kind: 'admin'
  privileges: string[]
}

interface Guest {
  kind: 'guest'
  visitCount: number
}

type User = Admin | Guest

function describeUser(user: User): string {
  switch (user.kind) {
    case 'admin':
      return `특권이 있는 관리자 ${user.privileges.join(', ')}.`
    case 'guest':
      return `게스트의 방문 횟수는 ${user.visitCount}번 입니다.`
    // 여기서 `never` 타입을 사용해 모든 경우를 처리했는지 확인할 수 있습니다.
    default:
      return ''
  }
}