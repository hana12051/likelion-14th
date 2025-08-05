// 이 파일에서는 타입만 import하고 있기 때문에
// types 파일이 컴파일된 example2.js 파일에서 제외됩니다.
import { Product } from './types'

const product: Product = {
  name: '사과',
  price: 7500,
}