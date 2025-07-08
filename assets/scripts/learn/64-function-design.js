//명확한 목적에 맞는 함수

;(() => {

  function filter(likaArray,callback){

    const numbers =[2,9,21,34]
    const resuli =filter(numbers, (n) => n > 5 && n < 30)
    console.log(resuli) // [9, 21]
  }

function map(likeArray, callback) {
  const result = [];

  for (let i = 0; i < likeArray.length; i++) {
    const transformed = callback(likeArray[i], i);
    result.push(transformed);
  }

  return result;
}

// 사용 예시
const doubled = map([1, 2, 3], (n) => n * 2);
console.log(doubled); // [2, 4, 6]


})()

// 적절한 함수 이름과 이해하기 쉬운 주석 설정
;(() => {
  
  function filter(array, callback) {
    const filteredArray = []
    for(let index = 0, l = array.length; index < l; index++) {
      const item = array[index]
      if(callback(item, index, array)) {
        filteredArray.push(item)
      }
    }

    return filteredArray
  }

  function map(likeArray, callback) {
    const resultArray = []
    for(let index = 0; index < likeArray.length; index += 1) {
      const item = likeArray[index]
      const mutatedItem = callback(item, index, likeArray)
      resultArray.push(mutatedItem)
    }
    return resultArray
  }


  filter([1, 2, 3, 4], (n) => n > 2) // [3, 4]
  map([1, 2, 3], (n) => n * 2) // [2, 4, 6]
})

;(() => {
  const books = [
    { id: 'book-isbn-3', title: '자바스크립트 입문', isBorrow: true },
    { id: 'book-isbn-7', title: '리액트 마스터', isBorrow: false },
    { id: 'book-isbn-12', title: '프론트엔드 개론', isBorrow: true },
    { id: 'book-isbn-15', title: '백엔드 개발의 기초', isBorrow: false },
    { id: 'book-isbn-20', title: '웹 개발의 모든 것', isBorrow: true }
  ];

  /**
   * 대출 가능한 책만 필터링합니다.
   * 
   * @param {Array<Object>} books - 도서 목록 배열
   * @returns {Array<Object>} 대출 가능한 도서 배열
   */
  function getAvailableBooks(books) {
    return books.filter(book => book.isBorrow);
  }

  const availableBooks = getAvailableBooks(books);
  console.log(availableBooks);
  // 결과:
  // [
  //   { id: 'book-isbn-3', title: '자바스크립트 입문', isBorrow: true },
  //   { id: 'book-isbn-12', title: '프론트엔드 개론', isBorrow: true }
  // ]

})

;(() => {
  const students = [
    { id: 1, name: '김지훈', email: 'jihun.kim@example.com', isPresent: true },
    { id: 2, name: '박아름', email: 'areum.park@example.com', isPresent: false },
    { id: 3, name: '이민수', email: 'minsu.lee@example.com', isPresent: true },
    { id: 4, name: '최수빈', email: 'subin.choi@example.com', isPresent: true },
    { id: 5, name: '정하늘', email: 'haneul.jung@example.com', isPresent: false },
    { id: 6, name: '윤다현', email: 'dahyun.yoon@example.com', isPresent: true },
    { id: 7, name: '한지민', email: 'jimin.han@example.com', isPresent: false },
    { id: 8, name: '오세영', email: 'seyoung.oh@example.com', isPresent: true },
    { id: 9, name: '서윤호', email: 'yunho.seo@example.com', isPresent: true },
    { id: 10, name: '배예진', email: 'yejin.bae@example.com', isPresent: false },
  ];

  /**
   * 사용자 목록에서 이메일 주소만 추출합니다.
   *
   * @param {Array<Object>} users - 사용자 객체 배열
   * @returns {Array<string>} 이메일 주소만 담긴 배열
   */
  function extractEmailList(users) {
    return users.map(user => user.email);
  }

  const emailList = extractEmailList(students);
  console.log(emailList);
})();