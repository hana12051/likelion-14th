const person = { name: '상준' }

function sayHello(this: { name: string }) {
  console.log(`안녕! ${this.name}`)
}

sayHello.call(person) // '안녕! 상준'