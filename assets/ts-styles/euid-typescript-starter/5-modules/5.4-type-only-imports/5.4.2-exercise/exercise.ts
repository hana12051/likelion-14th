// --------------------------------------------------------------------------
// ✅ 타입 전용 임포트(Type Only Imports)
// --------------------------------------------------------------------------

// 아래 import를 타입 전용(type-only) import로 변경하세요.
import { Product } from '../types'

function getProductPrice(product: Product): number {
  return product.price
}
