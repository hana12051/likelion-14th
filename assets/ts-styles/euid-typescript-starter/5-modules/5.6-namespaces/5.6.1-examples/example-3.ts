// 네임스페이스를 이용한 라이브러리 확장
namespace JQueryExtensions {
  export function highlight(element: JQuery): void {
    element.css('background-color', '#f2f10f')
  }
}

// 기존 라이브러리와 함께 사용하기
JQueryExtensions.highlight($('.my-element'))

// 네임스페이스 JQueryExtensions를 만들어 jQuery 객체에 새로운 기능(highlight)을 추가했습니다.
// 이렇게 하면 기존 라이브러리를 직접 수정하지 않고, 별도의 공간에서 확장 기능을 정의할 수 있습니다.
// 사용 시에는 JQueryExtensions.highlight()처럼 네임스페이스를 통해 접근합니다.