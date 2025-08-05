// C#이나 Java와 달리, 
// TypeScript에서는 static 클래스가 지원되지 않습니다.
// 아래는 몇 가지 대안입니다.

// 불필요한 "static" 클래스
class MyStaticClass {
  static doStuff() {}
}

// 그냥 함수 사용 권장
function doStuff() {}

// 또는 객체 리터럴 사용
const helper = {
  doStuff() {},
}
