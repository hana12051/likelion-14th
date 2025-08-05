// import한 타입의 이름을 as를 사용해 변경할 수 있습니다.
import { Product as MyProduct } from './types'

const product: MyProduct = {
  name: '사과',
  price: 7500,
}

console.log(product)
