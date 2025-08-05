interface Product {
  id: number
  name: string
}

interface User {
  id: number
  name: string
}

function printUser(user: User) {
  console.log(user)
}

const product: Product = { id: 1, name: '상품 1' }

// 오류 없음! 함수는 User를 기대하지만, Product를 전달해도 허용됨
printUser(product)