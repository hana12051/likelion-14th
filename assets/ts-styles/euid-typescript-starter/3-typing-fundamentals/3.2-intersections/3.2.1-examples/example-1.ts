// 교차 타입
type User = { name: string }
type Admin = { role: string }
type UserAdmin = User & Admin

const adminUser: UserAdmin = {
  name: 'yamoo9',
  role: 'administrator',
}