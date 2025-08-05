// 필드는 객체가 생성될 때 실행되는 초기값(초기화 값)을 가질 수 있습니다.

class Person {
  name = '김가나' // 타입이 `string`으로 추론됩니다.
  age = 1 // 타입이 `number`으로 추론됩니다.

  greet() {
    console.log(`안녕하세요, 제 이름은 ${this.name}이고 ${this.age}살입니다.`)
  }
}

const person = new Person()
person.greet() // 출력: '안녕하세요, 제 이름은 김가나이고 1살입니다.'
