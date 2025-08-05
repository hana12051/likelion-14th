// fruits는 as const를 사용했으므로 타입이 readonly ["사과", "귤", "배"]가 됩니다.
// 즉, 배열의 값과 순서가 고정되고 각 요소의 타입이 "사과" | "귤" | "배" 리터럴 타입이 됩니다.
const fruits = ['사과', '귤', '배'] as const
//    ^?

// Fruits는 fruits 변수의 타입을 그대로 가져옵니다.
// 즉, readonly ["사과", "귤", "배"] 타입이 됩니다.
type Fruits = typeof fruits
//   ^?

// Fruits[number]는 튜플(혹은 배열) 타입의 각 요소 타입을 의미합니다.
// fruits가 readonly ["사과", "귤", "배"]이므로 Fruit은 "사과" | "귤" | "배" 타입이 됩니다.
type Fruit = Fruits[number]
//   ^?

// 위와 동일하게, typeof fruits는 readonly ["사과", "귤", "배"]이고
// 거기에 [number]를 붙이면 각 요소의 타입 유니언이 됩니다.
// 따라서 FruitInline도 "사과" | "귤" | "배" 타입입니다.
type FruitInline = (typeof fruits)[number]
//   ^?
