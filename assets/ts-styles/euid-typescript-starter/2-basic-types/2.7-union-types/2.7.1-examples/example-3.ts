// 리터럴로 구성된 유니언 타입 (단수형 이름)
type Direction = 'left' | 'right' | 'up' | 'down'

function move(direction: Direction) {
  console.log(`${direction} 방향으로 이동`)
}

