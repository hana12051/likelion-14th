//타입이 지정된 타입스크입트 변수
let age: number = 25;

age = 30; //지정된 타입과 같은 값이라 할당에 문제 없음

// age = "스뭉"; //타입이 지정된 변수에 다른 타입의 값을 할당하면 오류 발생

//타입이 지정된 타입스크립트 변수
function add(a: number, b: number): number {
  return a + b;
}

add(10, 20); //정상적으로 작동
// add(10, "20"); //문자열을 전달하면 오류 발생

// function ass(a: number, s: string): number, string {
//  return a + s;
// }

// ass(120,"10")
//이 것은 문법 적으로 오류임. 함수는 반환하는 타입을 하나만 지정함. number, s: string처럼 쉼표로 나열 하는 것은 불가능.

function ass(a: number, s: string): string {
  return a + s; //숫자 + 문자열 -> 문자열로 자동 변환됨.
}

function aee(a: number, e: string): { num: number; str: string } {
  return { num: a, str: e };
}

const resuit = aee(120, "10");
