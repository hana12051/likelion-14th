function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}

// 구현 테스트
sum(1, 2, 3, 4, 5) // 15
sum(1, 2, 3)       // 6

