// 이름이 지정된 유니언 타입
type Id = number | string

function printIdNamed(id: Id) {
  console.log(`ID: ${id}`)
}

printIdNamed(123)
//^?

printIdNamed('abc')
//^?

