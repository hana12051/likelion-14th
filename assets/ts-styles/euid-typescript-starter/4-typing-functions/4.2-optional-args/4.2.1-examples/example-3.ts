// 또는, 기본값을 지정할 수도 있지만 이것은 선택적 매개변수를 지정하는 좀 더 장황한 방법일 뿐입니다.
function greet(name: string, greeting: string | undefined = undefined): string {
  if (greeting) {
    return `${greeting}! ${name}`
  } else {
    return `안녕! ${name}`
  }
}

console.log(greet('채영', undefined)) // 출력: '안녕! 채영'

console.log(greet('채영')) // 출력: '안녕! 채영'
console.log(greet('채영', '밥먹자')) // 출력: '밥먹자! 채영'