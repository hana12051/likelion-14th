// 정적 블록(static block)은 
// 클래스 수준의 초기화에 유용합니다.

class StaticExample {
  // 생성자와 달리, 정적 블록은 
  // 클래스가 환경에 처음 로드될 때 단 한 번만 실행됩니다.
  static {
    console.log(`정적 블록 실행 중...`)
  }
}

const instance1 = new StaticExample()
const instance2 = new StaticExample()
