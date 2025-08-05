// 반환 타입을 any 대신, unknown으로 지정
async function getUserAge(id: number): Promise<unknown> {
  const response = await fetch(`https://dummyjson.com/users/${id}`)
  const user = await response.json()
  return user.age
}

function isOldEnoughToVote(age: number): boolean {
  return age >= 18
}

async function process() {
  const age = await getUserAge(1)
  //    ^?
  
  // 사용하기 전에 반드시 타입을 좁혀야 함
  // Argument of type 'unknown' is not assignable to parameter of type 'number'.
  console.log(isOldEnoughToVote(age))
  
}

;(async () => {
  await process()
})()
