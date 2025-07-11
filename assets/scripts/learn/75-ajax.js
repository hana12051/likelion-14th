;(() => {
  
  // XMLHttpRequest 생성자 함수(클래스)를 사용해 XMLHttpRequest 객체(인스턴스) 생성
  // 요청을 위한 XHR 객체 생성
  const request = new XMLHttpRequest()

  // 요청 구성
  request.open('GET', 'https://api.github.com/users/yamoo9/repos')

  // 서버에서 응답이 오는 이벤트 청취
  request.addEventListener('load', (e) => {
    // XHR 요청에 서버로부터 응답이 오면 이벤트 객체를 통해 응답된 데이터를 확인
    console.log(e.target.status) // 200
    console.log(typeof e.target.response) // string (data)
    // console.log(e.target.statusText)
    // console.log(e.target.responseText)
  })

  // 서버로 요청 보내기
  request.send()

})


;(()=> {

function requestGitHubUser(username) {
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`에러 발생: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('GitHub 사용자 정보:', data);
    })
    .catch((error) => {
      console.error('요청 실패:', error.message);
    });
}

// 사용 예시
requestGitHubUser('yamoo9');
requestGitHubUser('hana12051'); // ← 너 GitHub 계정도 테스트 가능!

})

// GitHub 서비스에 사용자 계정 이름으로 요청해 데이터를 응답받는 코드를 완성하세요.
// - AJAX 방식을 사용해 GitHub API 서버에 사용자 정보를 요청합니다.
// - 사용자 정보를 응답받으면 콘솔 패널에 응답 결과를 출력합니다.
;(() => {
  
  function requestGitHubUserFollowers(username) {
    // XMLHttpRequest 객체 생성
    const request = new XMLHttpRequest()

    // 요청 구성
    request.open('GET', `https://api.github.com/users/${username}/followers`)

    // 요청 보내기
    request.send()

    // 요청 이벤트 리스닝(청취)
    request.addEventListener('load', ({ target: xhr }) => {
      console.log(`응답 상태 코드 = ${xhr.status}`)
      console.log(`응답 데이터 = ${xhr.response}`)
      // 문자값 응답 -> JSON 문자열 -> JavaScript 객체 변환
      const responseData = JSON.parse(xhr.response)
      
      // 로그인(login) 데이터만 새롭게 배열 재구성
      const followers = responseData.map(({ login }) => login)

      const followerItemsTemplate = followers.map((name) => {
        return `<li>${name}</li>`
      }).join('')

      document.querySelector('.github-followers').innerHTML = followerItemsTemplate
    })
  }

  requestGitHubUserFollowers('yamoo9')

})