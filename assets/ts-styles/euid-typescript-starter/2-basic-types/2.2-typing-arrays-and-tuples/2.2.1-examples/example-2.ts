// 전개 구문은 타입의 배열을 결합할 때 사용할 수 있으며,
// 이는 값의 배열을 결합할 때 전개 구문을 사용하는 것과 매우 유사합니다.
type CarColors = ['노란색', '검정색']
//   ^?

type SkyColors = ['파란색', '하얀색']
//   ^?

type CarAndSkyColors = [...CarColors, ...SkyColors]
//   ^?
