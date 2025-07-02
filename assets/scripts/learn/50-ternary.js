//----------------------
//조건식
//------------------------

 const user = {
    name: '조현주',
    age: 23,
    role: '손님',
  }


;(()=> {
  // 조건문(Conditional Statement)
  if (user.role === '관리자') {
    console.log('서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.')
  } else {
    console.warn('서비스 관리자가 아니므로, 접근이 불가합니다.')
  }

  // 조건식(Conditional EXpression)
  // 조건 ? (참으로 평가된 경우 실행 명령) : (거짓으로 평가된 경우 실행 명령)

  // 한 줄로 작성한 경우
  user.role === '관리자' ? console.log('서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.') : console.warn('서비스 관리자가 아니므로, 접근이 불가합니다.')
  
  // 여러 줄로 작성한 경우 1
  user.role === '관리자' ? 
    console.log('서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.') : 
    console.warn('서비스 관리자가 아니므로, 접근이 불가합니다.')
  
  // 여러 줄로 작성한 경우 2
  user.role === '관리자' 
    ? console.log('서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.') 
    : console.warn('서비스 관리자가 아니므로, 접근이 불가합니다.')
})()


//조건이 다수인 경우. 조건문 vs  조건식
;(()=>{

  let warningMessage = ''

  if (user.age >= 19) {
    warningMessage = '19세 이상이므로 출입이 가능합니다. 😄'

    if (user.role === '관리자') {
      warningMessage += '\n관리자이므로 모든 접근이 가능합니다. ✅'
    } else {
      warningMessage += '\n관리자가 아니므로 모든 접근을 사용할 수 없습니다. ❌'
    }

  } else {
    warningMessage = '19세 미만이므로 출입이 불허합니다. ⚠️'
  }

  console.log(warningMessage)

})()

  const warningMessage =
    user.age >= 19
      ? `19세 이상이므로 출입이 가능합니다. 😄\n` +
        (user.role === '관리자'
          ? '관리자이므로 모든 접근이 가능합니다. ✅'
          : '관리자가 아니므로 모든 접근을 사용할 수 없습니다. ❌')
      : '19세 미만이므로 출입이 불허합니다. ⚠️'

  console.log(warningMessage)

//나이별 입잡 실습
  function getEntranceFeeByAge(age) {
  return age < 13
    ? 2000
    : age < 65
      ? 5000
      : 3000
}

const entranceFees = [
  getEntranceFeeByAge(21),
  getEntranceFeeByAge(10),
  getEntranceFeeByAge(73),
  getEntranceFeeByAge(7)
]

console.log(entranceFees) // [5000, 2000, 3000]

//점수별 등급 판별 조건문 사용
function getGradeByScore(score) {
  if (score >= 90) {
    return 'A'
  } else if (score >= 80) {
    return 'B'
  } else if (score >= 70) {
    return 'C'
  } else if (score >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}

const grades = [
  getGradeByScore(75),
  getGradeByScore(82),
  getGradeByScore(96),
  getGradeByScore(50)
]

console.log(grades) // ['C', 'B', 'A', 'F']

