class User {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log(`안녕하세요, 제 이름은 ${this.name}이고 ${this.age}살입니다.`)
  }
}

// 클래스로부터 인스턴스 생성은 잘 작동합니다.
const user = new User('연오랑', 37)
