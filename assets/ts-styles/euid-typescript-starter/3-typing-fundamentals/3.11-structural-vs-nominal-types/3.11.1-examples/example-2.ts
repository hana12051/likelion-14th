// 한쪽 인터페이스에만 추가 속성이 있어도 동작합니다.

interface Product {
  id: number
  name: string
}

interface User {
  id: number
  name: string
  age: number // 추가 속성
}

const user: User = { id: 1, name: '진우', age: 26 }

// 두 인터페이스의 구조가 호환되기 때문에 할당이 허용됩니다. 
// 하지만 age 속성은 사용되지 않습니다.
const product: Product = user
console.log(product)

// Error: Property 'age' does not exist on type 'Product'.
// console.log(product.age)