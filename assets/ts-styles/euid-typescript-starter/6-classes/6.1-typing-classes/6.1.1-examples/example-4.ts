// 파생 클래스의 생성자에서는 반드시 super()를 호출해야 합니다.

class Person {
  name: string
  age: number

  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log( `안녕하세요, 제 이름은 ${this.name}이고 ${this.age}살입니다.`)
  }
}


class Employee extends Person {
  jobTitle: string

  constructor(name: string, age: number, jobTitle: string) {
    super(name, age) // 이 부분이 없으면 컴파일 오류 발생
    this.jobTitle = jobTitle
  }
}