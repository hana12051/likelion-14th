function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}! ${name}`
  } else {
    return `안녕! ${name}`
  }
}

// 사용 예시
console.log(greet('근우')) // 출력: '안녕! 근우'
console.log(greet('채영', '좋은 아침')) // 출력: '좋은 아침! 채영'
