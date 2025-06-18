//-------------------------------------
// 배열 객체
//-------------------------------------

//배열 리터럴로 배열 만들기 (배열 생성)
const 장바구니 =['대파', '계란', '두부', '소고기', '양파', '괴수 8호 릭랙스 2권'];
console.log(장바구니)

// const 장바구니_항복_갯수 = 장바구니.length
// console.log(장바구니_항복_갯수); // 5

// // 리터럴 방식 말고, 정ㄱ석적인 방법으로 배열 객체 생성
// const number = new Array('대파', '계란', '두부', '소고기', '양파', '괴수 8호 릭랙스 2권');

// console.log(number);

//new Array()를 사용해 베열 객체를 생성 할때 발생 할 수 있는 문제점. 

// 대괄호에 인덱스를 전달해 배열 항목 가져오기 
let firstCartItem = 장바구니[0]
let secondFromTheEndItem = 장바구니[장바구니.length - 2]
let lastCartItem = 장바구니[장바구니.length - 1]
console.log(firstCartItem, secondFromTheEndItem, lastCartItem)

// .at() 메서드에 인덱스를 전달해 배열 항목 가져오기 
let firstCartItem2 = 장바구니.at(0)
let secondFromTheEndItem2 = 장바구니.at(-2)
let lastCartItem2 = 장바구니.at(-1)
console.log(firstCartItem2, secondFromTheEndItem2, lastCartItem2)

장바구니[2] = '괴수 8호 15권'
console.log('수정된 장바구니=', 장바구니)

//배열 실습
// eslint- no-unused-vars
const emptyArray = []
const fruits = ['사과', '바나나', '오렌지']

console.log(emptyArray);
console.log(fruits)

const instructors = ['야무', '슬비']

const yamoo9 = instructors[0] // 배열의 첫 번째 항목
console.log(yamoo9); // "야무"

instructors[1] = '김데레사'
console.log(instructors) // ['야무', '김데리사']

//초급 수준의 답변

//에크마 수준의 답변