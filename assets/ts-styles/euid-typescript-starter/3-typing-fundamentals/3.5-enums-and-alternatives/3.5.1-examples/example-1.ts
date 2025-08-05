// 첫 번째 멤버는 명시적으로 할당하지 않으면 0이 할당됩니다.
enum Color {
  Red,
  Green,
  Blue,
}

// 컴파일 결과
/*

"use strict";

var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));

*/
