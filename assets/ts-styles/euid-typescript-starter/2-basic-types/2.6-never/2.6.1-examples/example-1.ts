// Never - TypeScript의 유일한 최하위 타입
function fail(message: string): never {
  throw new Error(message)
}

fail(`
  최하위 타입인 never는 발생할 수 없는 상황을 나타내며 
  오류의 경우가 그러한 상황입니다.
`)