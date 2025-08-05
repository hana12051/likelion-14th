// --------------------------------------------------------------------------
// ✅ 클래스 vs. 타입과 인터페이스
// --------------------------------------------------------------------------

// 문제 1
// 아래 클래스의 인스턴스를 생성하세요.

class Book {
  title: string
  author: string

  constructor(title: string, author: string) {
    this.title = title
    this.author = author
  }

  describe() {
    console.log(`이 책의 제목은 "${this.title}"이고, 저자는 ${this.author}입니다.`)
  }
}


// 문제 2 
// 아래 Tree 타입의 새 객체를 생성하세요.

type Tree = {
  height: number
  age: number
}


// 문제 3
// 아래 Car 인터페이스의 새 객체를 생성하세요.

interface Car {
  make: string
  model: string
  year: number
}
