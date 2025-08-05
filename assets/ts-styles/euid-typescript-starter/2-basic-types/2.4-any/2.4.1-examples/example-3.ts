// fetch() 함수는 Promise<any>를 반환합니다.
async function getUserById(id: number) {
  const response = await fetch('https://api.github.com/users/yamoo9')
  return response.json()
}

let user = getUserById(1)
//  ^?
