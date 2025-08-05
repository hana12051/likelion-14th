// strictPropertyInitialization이 활성화되어 있으면  
// 모든 프로퍼티를 생성자에서 초기화하거나 초기값을 지정해야 합니다.
class Person {
  name = ''
  age: number

  // 아래 부분을 주석 처리하면 strictPropertyInitialization 오류가 발생합니다.
  // 또는 위에서 `age` 필드에 기본값을 지정해도 됩니다.
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log(`안녕하세요, 제 이름은 ${this.name}이고 ${this.age}살입니다.`)
  }
}