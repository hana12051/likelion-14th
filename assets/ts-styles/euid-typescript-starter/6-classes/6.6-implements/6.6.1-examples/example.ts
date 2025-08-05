// `implements` 키워드는 클래스가 특정 인터페이스를 만족함을 선언합니다.
interface Animal {
  name: string
  speak(message: string): void
}

// `implements`는 단지 호환성만 검사할 뿐, 자동으로 적용되지 않습니다.
class Dog implements Animal {
  // 이 필드 선언은 필수입니다. 
  name: string
  // 선언이 누락된 경우, 다음의 오류가 출력됩니다.
  // Error: Property 'name' does not exist on type 'Dog'.

  constructor(name: string) {
    this.name = name
  }

  // 따라서 이 필드 선언도 필수입니다.
  speak(message: string) {
    console.log(message)
  }
  // 선언이 누락된 경우, 다음의 오류가 출력됩니다.
  // Error: Class 'Dog' incorrectly implements interface 'Animal'. 
  // Property 'speak' is missing in type 'Dog' but required in type 'Animal'.
}