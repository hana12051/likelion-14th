// 만약 이 파일에서 타입만 import한다면?
// 컴파일된 .js 파일에는 해당 import가 포함되지 않습니다.
import { Product } from './types'

const product: Product = {
  name: '사과',
  price: 7500,
}

// 만약 아래와 같이 런타임 코드가 포함된다면? 
// example-1.js에서 types.js 파일 코드도 함께 출력됩니다.
// console.log(hello())
