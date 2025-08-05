// 타입이 없는 패키지를 직접 타입을 선언해서 사용하는 방법
import { plural } from 'pluralize'

const pluraization = plural('library')
//    ^?

console.log(pluraization) // 출력: "libraries"
