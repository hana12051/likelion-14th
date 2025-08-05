// const enum은 TypeScript에게 해당 enum을
// 생성된 코드에서 제거하고, 실제 값으로 대체하라고 지시하는 방법입니다.
// 참고: const enum은 계산된 멤버(computed member)를 가질 수 없습니다.
// 오직 상수 멤버만 가능합니다.
const enum ColorConst {
  Red,
  Green,
  Blue,
}

const color = ColorConst.Red
console.log(color)


// 컴파일 결과
/* 

"use strict";

const color = 0; // ColorConst.Red
console.log(color);

*/