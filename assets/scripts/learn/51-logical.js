;(() => {
  
  let isLightGreen = false
  let noCarsAround = false

  if (isLightGreen || noCarsAround) {
    // 신호등 불빛이 초록불이거나, 주변에 차가 없다면? 건너라.
    walk()
  } else {
    // 그렇지 않다면? 멈춰라.
    stop()
  }

  function walk() {
    console.log('건너라.')
  }

  function stop() {
    console.log('멈춰라.')
  }

})()

//&& 논리 연산자. 

const friend = '수연'; 

friend && console.log('살아라. 그대는 그 뭐시더냐. 그거다.');

const person = '기씨';
const topic = 'ㄷ의 동거';

person === '기씨' && topic === 'ㄷ의 동거' && console.log('널 죽일 것이다.');


function canWatchMovie({ age, idCard }) {
  return age >= 18 && idCard ? '관람 허용' : '관람 불가';
}

const results1 = [
  canWatchMovie({ age: 21, idCard: true }),
  canWatchMovie({ age: 15, idCard: false }),
];

console.log(results1); // ['관람 허용', '관람 불가']

function needUmbrella({ isRaining, forecastRain }) {
  return isRaining || forecastRain;
}

const results2 = [
  needUmbrella({ isRaining: false, forecastRain: true }),
  needUmbrella({ isRaining: false, forecastRain: false }),
];

console.log(results2); // [true, false]