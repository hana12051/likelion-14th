// 일반 JS 객체 사용을 권장합니다.
const StatusObj = {
  Active: 0,
  Inactive: 1,
  Pending: 2,
  Deleted: 3,
} as const

// 또는 유니언 타입을 사용할 수 있습니다.
type StatusUnion = 'Active' | 'Inactive' | 'Pending' | 'Deleted'
