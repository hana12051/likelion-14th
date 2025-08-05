// 숫자 enum의 경우, 값에서 이름으로의 역방향 매핑이 가능합니다. 예를 들어 Color[0]은 "Red"를 반환합니다.
enum Color {
  Red,
  Green,
  Blue,
}

const red = Color.Red

let nameOfRed = Color[red] // "Red"


// 하지만 문자열 enum은 역방향 매핑을 지원하지 않습니다.
// 즉, ColorNames["red"]와 같은 접근은 동작하지 않으며, 타입 에러가 발생합니다.
enum ColorNames {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

const redName = ColorNames.Red

// 아래 코드는 noImplicitAny가 true일 때 에러가 발생하므로, 
// 임시로 설정을 바꿔서 예시를 보여줍니다.
let valueOfRedName = ColorNames[redName] // Error: Property 'red' does not exist on type 'typeof ColorNames'. Did you mean 'Red'?