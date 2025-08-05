// 추상 클래스는 구현이 없습니다. 반드시 상속받아야 합니다.
abstract class Animal {
  abstract makeSound(): void // 추상 클래스 내부에서만 허용됩니다.
  abstract move(): void

  run() {
    console.log('달리는 중')
  }
}

// 인스턴스화 불가
// const cat: Animal = new Animal() // Error: Cannot create an instance of an abstract class.

// 반드시 상속해야 함
class Dog extends Animal {
  makeSound() {
    console.log('멍멍')
  }

  move() {
    console.log('달리는 중')
  }
}

const dog = new Dog()
dog.run()