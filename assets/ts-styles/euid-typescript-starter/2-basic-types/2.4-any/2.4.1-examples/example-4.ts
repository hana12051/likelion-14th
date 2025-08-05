// 타입이 없으면 `any`로 추론됩니다.
function add(a, b) {
  return a + b
}

add('하나', 2)
//^?

add(1, '둘')
//^?
