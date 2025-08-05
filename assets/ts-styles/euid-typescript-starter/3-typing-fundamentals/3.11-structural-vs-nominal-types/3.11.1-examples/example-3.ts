// 반대의 경우는 불가능합니다. 
// 만약 `Product`를 `User`에 할당하려고 하면, TypeScript는 오류를 발생시킵니다. 
// 이유는 `Product` 인터페이스에는 `age` 속성이 없기 때문입니다.

interface Product {
  id: number
  name: string
}

interface User {
  id: number
  name: string
  age: number
}

const product: Product = { id: 1, name: '상품 1' }

// 아래 코드는 오류가 발생합니다.
// Error: Property 'age' is missing in type 'Product' but required in type 'User'.
// const user: User = product 
