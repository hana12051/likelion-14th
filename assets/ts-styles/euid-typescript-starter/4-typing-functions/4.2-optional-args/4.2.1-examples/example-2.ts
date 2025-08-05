// 또는, 선택적 매개변수 대신 반드시 undefined를 명시적으로 전달하도록 할 수도 있습니다.
function greet(name: string, greeting: string | undefined): string {
  if (greeting) {
    return `${greeting}! ${name}`
  } else {
    return `안녕! ${name}`
  }
}

// 이제 이렇게 호출하면 오류가 발생합니다.
// console.log(greet('채영')) // Error: Expected 2 arguments, but got 1

// 인사를 생략하고 싶다면 undefined를 명시적으로 넣어야 합니다.
console.log(greet('채영', undefined)) // 출력: '안녕! 채영'
console.log(greet('채영', '안녕하세요')) // 출력: '안녕하세요! 채영'
