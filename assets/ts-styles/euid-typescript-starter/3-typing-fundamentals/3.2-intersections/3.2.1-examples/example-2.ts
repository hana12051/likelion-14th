// 기본 타입과 객체 타입은 교차 방식이 다릅니다.

// 기본 타입끼리 교차하면 두 타입의 교집합이 됩니다.
// 숫자이면서 문자열인 값은 없으므로 타입은 never가 됩니다.

type NumberAndString = number & string
//   ^?

