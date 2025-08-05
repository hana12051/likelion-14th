// --------------------------------------------------------------------------
// ✅ 선택적 매개변수의 타입 지정
// --------------------------------------------------------------------------

// 1. 두 번째 매개변수를 선택적으로 만듭니다.
function concatStrings(str1: string, str2: string): string {
  return str1 + (str2 ?? '')
}

// 2. 두 번째 매개변수의 기본값을 빈 문자열로 지정합니다.
function concatStrings2(str1: string, str2: string): string {
  return str1 + str2
}
