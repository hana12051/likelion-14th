// 네임스페이스로 기존 클래스 확장하기
class User {
  constructor(id: number, name: string) {}
}

// 네임스페이스를 통해 클래스에 정적(static) 메서드 추가
namespace User {
  export function fromJSON(json: string): User {
    const data = JSON.parse(json)
    return new User(data.id, data.name)
  }
}

const user = User.fromJSON('{ "id": 1, "name": "이민지" }')
console.log(user)

// User 클래스를 선언하고, 같은 이름의 네임스페이스를 이용해 fromJSON이라는 정적 메서드를 추가했습니다.
// 이렇게 하면 클래스의 정적 멤버처럼 사용할 수 있습니다. User.fromJSON(...)
// 네임스페이스와 클래스는 이름이 같으면 합쳐져 작동합니다. (Declaration Merging)
// 이 방식으로 기존 클래스를 확장할 수 있습니다.