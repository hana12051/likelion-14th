// 옵션 필드가 너무 많은 경우
type UserManyOptional = {
  name: string
  city?: string
  country?: string
  postalCode?: string
}

// 보다 나은 방법
type UserGroupedOptional = {
  name: string
  address?: {
    city: string
    country: string
    postalCode: string
  }
}

const user1: UserManyOptional = {
  name: '상현',
  city: '서울',
  country: '대한민국',
  postalCode: '04524',
}

const user2: UserGroupedOptional = {
  name: '해민',
  address: {
    // city, country, postalCode 중
    // 어느 하나라도 지정하지 않으면 오류 발생
    city: '서울',
    country: '대한민국',
    postalCode: '04524',
  },
}
