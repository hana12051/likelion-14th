enum Color {
  Red,   // 0
  Green, // 1
  Blue,  // 2
}

function printColor(color: Color) {
  console.log(color)
}

// Enum은 런타임에 실제 객체로 존재하기 때문에 함수의 인자로 전달할 수 있습니다.
// 아래 예시에서 printColor(Color.Red)를 호출하면 0이 출력됩니다.
printColor(Color.Red)
