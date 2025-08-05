// --------------------------------------------------------------------------
// ✅ TypeScript의 타입 인터섹션(Type Intersections)
// --------------------------------------------------------------------------

// 질문
// `Person`과 `Employee`의 인터섹션 타입 `Staff`를 만드세요.
// 그리고 `Staff` 타입의 변수 `staff`를 만들고 적절한 값을 할당하세요.

interface Person {
  name: string
  age: number
}

interface Employee {
  employeeId: number
  department: string
}
