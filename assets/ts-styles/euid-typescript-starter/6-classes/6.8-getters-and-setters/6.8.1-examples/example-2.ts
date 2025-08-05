// 세터(setter)의 타입이 명시되지 않으면, 타입이 자동으로 추론됩니다.
class Person {
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set name(value) {
    this._name = value
  }
}
