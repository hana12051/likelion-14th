export {}

// 글로벌 변수 참조
declare global {
  interface Window {
    username: string
  }
}

// 이 코드는 TypeScript에서 브라우저의 전역 객체인 window에
// username이라는 커스텀 속성이 있음을 타입으로 선언하는 예시입니다.
// 이렇게 선언하면 window.username을 사용할 때 타입 오류가 발생하지 않습니다.

// 주의!
// 이 코드는 타입 선언 파일(.d.ts)이나 모듈 내부에서 사용해야 하며,
// 파일 맨 위에 export {}를 추가해 모듈로 만들어야 TypeScript가 제대로 인식합니다.