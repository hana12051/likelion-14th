// 우회 방법: 대괄호 표기법으로 `private` 필드에 접근할 수 있습니다.
export class User {
  private password = '123'
}

const user = new User()
// user.password
console.log(user['password']) // 123
