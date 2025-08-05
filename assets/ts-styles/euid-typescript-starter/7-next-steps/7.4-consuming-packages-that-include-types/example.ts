// 타입이 포함된 NPM 패키지 사용하기
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

// date-fns 라이브러리 포멧
// 참고: https://date-fns.org/docs/format
const currentDate = format(new Date(), 'yyyy년 MM월 dd일', { locale: ko })
console.log(currentDate)
