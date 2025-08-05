// get만 있고 set이 없으면 
// 해당 프로퍼티는 읽기 전용(readonly)입니다.
class Person {
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  get name() {
    return this._name
  }
}

const person = new Person('차상진')
console.log(person.name) // '차상진'
// person.name = '차준영' // Error: Cannot assign to 'name' because it is a read-only property.
