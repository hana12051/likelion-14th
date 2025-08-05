// --------------------------------------------------------------------------
// ✅ Private 필드의 예외 상황과 대안
// --------------------------------------------------------------------------

// 질문 1
// `Student`의 인스턴스를 만들고, 점 표기법(dot syntax)으로 
// private `studentId`에 접근해 오류가 발생하는 것을 확인하세요.
// 그리고 대괄호 표기법(bracket syntax)으로 private `studentId`를 출력해보세요.
// 이 경우에는 값이 출력되는 것을 확인할 수 있습니다.

class Student {
  private studentId = 1
}


// 질문 2
// JavaScript private 필드 `teacherId`와 `teacherId`를 반환하는 
// `getTeacherId` 메서드를 가진 `Teacher` 클래스를 만들어보세요.
// 클래스를 인스턴스화하고, `getTeacherId` 메서드를 호출하여 `teacherId`를 출력해보세요.
// 이때 `teacherId`는 private이기 때문에 직접 접근할 수 없습니다.