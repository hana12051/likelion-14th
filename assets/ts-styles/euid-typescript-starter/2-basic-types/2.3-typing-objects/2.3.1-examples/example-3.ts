// 타입 알리아스
type User = {
  id: number
  name: string
}

const jinwoo: User = { id: 1, name: '진우' }

// Error: Property 'name' is missing in type '{ id: number; }' but required in type 'User'.
// const jinwoo: User = { id: 1 }

// Error: Object literal may only specify known properties, and 'age' does not exist in type 'User'.
// const jinwoo: User = { id: 2, name: '진우', age: 26 }
