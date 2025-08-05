// --------------------------------------------------------------------------
// ✅ TypeScript에서 구조적 타입과 명목적 타입
// --------------------------------------------------------------------------

// 질문 1
// 아래의 logPersonName 함수를 `Employee` 인스턴스로 호출해 보세요.
// Employee가 person과 호환되는 구조를 가지고 있기 때문에 문제없이 작동합니다.

interface Person {
  name: string
  age: number
}

interface Employee {
  name: string
  age: number
  employeeId: number
}

function logPersonName(person: Person): void {
  return console.log(person.name)
}

// 질문 2
// Employee에서 age 속성을 주석 처리하면 어떻게 될까요?