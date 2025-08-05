// 유니언 타입을 사용할 수도 있지만, a와 b가 같은 타입임을 보장하지 않습니다.
function add(a: number | string, b: number | string) {
    // return a + b // 작동하지 않음
  return (a as any) + b // 작동은 하지만 권장되지 않음
}