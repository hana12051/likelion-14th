// --------------------------------------------------------------------------
// 📌 명령형(Imperative) vs. 선언적(Declarative)
// --------------------------------------------------------------------------

// 전역 변수
const fruitsBasket = '키위 사과 배 참외 키위 망고 파인애플 키위 수박 키위'.split(' ')

function getKiwiCount(list) {
  // 과일 바구니 안에서 키위의 갯수를 구해라
  return list.filter(item => item === '키위').length
}

// 명령형 코드
;(() => {
  console.log(1 + 1) // 2

  let kiwiCount = 0

  for (let fruit of fruitsBasket) {
    if (fruit === '키위') kiwiCount += 1
  }

  console.log(kiwiCount)
  
})

// 선언적 코드
;(() => {
  
  // 선언적 (과일바구니 안에서 키위의 갯수를 구해라)
  let kiwiCount = getKiwiCount(fruitsBasket)
  console.log(kiwiCount) // 3
  
})

;(() => {
const timeTable = {
  "월요일": ['미술', '사회', '체육', '국어'],
  "화요일": ['영어', '수학', '과학', '음악'],
  "수요일": ['체육', '국어', '사회', '미술'],
  "목요일": ['수학', '영어', '음악', '과학'],
  "금요일": ['국어', '체육', '미술', '사회']
};

function countSubject(timeTable, subject) {
  let count = 0;

  for (const day in timeTable) {
    const subjects = timeTable[day];
    count += subjects.filter(s => s === subject).length;
  }

  return count;
}

console.log(countSubject(timeTable, '국어')); // 출력: 2
})




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
]

//실습
;(() => {

  // 명령형 코드
  let presentCount = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].isPresent) {
      presentCount++;
    }
  }
  console.log(`출석한 학생 수: ${presentCount}`); // 출력: 출석한 학생 수: 6

  // 선언적 코드
  const presentStudents = students.filter(student => student.isPresent);
  console.log(`출석한 학생 수: ${presentStudents.length}`); // 출력: 출석한 학생 수: 6
})




