// 인터페이스에서만 가능한 기능들
// 1. 클래스로 인터페이스를 확장(extends)할 수 있습니다.

class Animal {
  name = '애니멀'
}

interface Bear extends Animal {
  honey: boolean
}

const bear: Bear = {
  name: '베어',
  honey: true,
}
