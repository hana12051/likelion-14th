//switch문
//switch 문은 여러 if 구문을 합친 것과 같습니다.
//switch (조건) {
//	case '값':
//  ...
//	break
//	default:
// ...
//  }


;(() => {

const isLightColor = '초록색'

switch(isLightColor) {
//a의 경우
case'초록색':
console.log('건너라')
break
//b의 경우
case'주황색':console.log('건너면 죽는다')
break
default:
  console.log('건너면 깜빵간다.')
}

})()



;(() =>{

//if문 과 switch문
const isLightColor = '초록색'

if (isLightColor === '초록색') {
  console.log('좌우를 살피고 건너세요')
}

})


;(()=> {


// if 문 vs. switch 문
;(() => {

  // switch 문
  ;(() => {
    let 취미 = '조깅'
  
    switch(취미) {
      case '수영':
      case '영화 감상':
      case '게임':
      case '조깅': 
      case '등반': 
      case '등산': 
      case '음악 감상': 
      case '콘서트 가기': 
      case '독서': 
        console.log('매우 흥미로운 분이군요!!!')
        break
      default: console.log('재미있게 살면 좋겠습니다!!')
    }
  })()
  
  // if 문
  ;(() => {
    let 취미 = '독서'

    // 취미가 "수영" 또는 "영화 감상" 또는 "게임" 또는 "조깅"인 사람이라면?
    if (
      취미 === '수영' || 
      취미 === '영화 감상' ||
      취미 === '게임' ||
      취미 === '조깅' ||
      취미 === '등반' ||
      취미 === '등산' ||
      취미 === '음악 감상' ||
      취미 === '콘서트 가기' ||
      취미 === '독서'
    ) {
      // 매우 흥미로운 분이군요!!!
      console.log('매우 흥미로운 분이군요!!!')
    } else {
      // 그렇지 않으면 재미있게 살면 좋겠습니다!!
      console.log('재미있게 살면 좋겠습니다!!')
    }

  })()

})()

})
