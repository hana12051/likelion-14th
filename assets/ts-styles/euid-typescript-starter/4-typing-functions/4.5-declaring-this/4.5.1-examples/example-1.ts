const person = {
  name: '상준',
  sayHello() {
    console.log(`안녕! ${this.name}`) // 타입 안전 및 자동완성 제공
  },
}