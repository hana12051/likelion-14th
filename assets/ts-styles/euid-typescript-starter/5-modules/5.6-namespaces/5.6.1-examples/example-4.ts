// 이미 네임스페이스를 사용하는 라이브러리 확장
namespace Express {
  export interface Request {
    user?: { id: string; role: string }
  }
}

// 위 코드는 이미 네임스페이스를 사용하는 라이브러리(예: Express)의 타입을 확장하는 예시입니다.
// Express 네임스페이스 안에 Request 인터페이스를 다시 선언하여, user라는 커스텀 속성을 추가했습니다.
// 이렇게 하면 기존 타입에 영향을 주지 않으면서, 타입 정보를 확장할 수 있습니다.
// 주로 타입 선언 파일(.d.ts)에서 이런 방식으로 타입을 확장합니다.