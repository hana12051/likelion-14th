// 표준 전역 변수에 접근하기 (window의 console)
global.window.console.log('안녕! 타입스크립트')

// globals.ts에서 정의한 커스텀 전역 변수에 접근하기
global.window.username = '진우'

// global.window.console.log를 사용하면 브라우저의 표준 전역 객체인 console에 접근할 수 있습니다.
// 앞서 declare global { interface Window { username: string; } }로 타입을 확장했다면,
// global.window.username처럼 커스텀 전역 변수도 타입 오류 없이 사용할 수 있습니다.

// Node.js 환경에서는 global 객체, 브라우저 환경에서는 window 객체가 전역입니다.
// 양쪽 환경에서 모두 사용 가능해야 할 경우 globalThis를 사용하는 것이 좋습니다.

// TypeScript에서 global.window를 사용하는 것은 특수한 상황(예: 일부 빌드 환경)에서만 필요하며,
// 일반적으로 브라우저에서는 그냥 window를 바로 사용해도 됩니다.
console.log('안녕! 타입스크립트')
console.log(window.username)
console.log(globalThis.username)