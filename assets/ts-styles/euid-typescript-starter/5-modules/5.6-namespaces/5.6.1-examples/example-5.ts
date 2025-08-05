// 별도의 파일 대신 중첩 네임스페이스로 그룹화 및 캡슐화하기

// App 네임스페이스 아래에 Models와 Utils라는 
// 중첩 네임스페이스를 만들어 관련 코드를 그룹화하고 있습니다.
namespace App {
  export namespace Models {
    export interface User {
      id: number
      name: string
    }
  }

  // 중첩 네임스페이스
  // greet 함수는 export되어 외부에서 사용할 수 있지만, 
  // privateFunction은 export가 없으므로 외부에서 접근할 수 없습니다.
  export namespace Utils {
    export function greet(user: Models.User): string {
      return `안녕! ${user.name}`
    }

    function privateFunction(): void {
      console.log('비공개 함수가 실행됨!')
    }
  }
}

const user: App.Models.User = { id: 1, name: '이민지' }
console.log(App.Utils.greet(user))

// 이것은 작동하지 않습니다. `privateFunction`은 비공개(private)이기 때문입니다.
// App.Utils.privateFunction()


// 별도의 파일로 나누지 않고, 네임스페이스로 논리적 그룹화를 할 수 있지만
// 최신 TypeScript에서는 일반적으로 모듈 사용을 권장합니다.