// --------------------------------------------------------------------------
// 📌 AJAX란?
// --------------------------------------------------------------------------

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
    console.log(typeof e.target.response) // string (data, real JSON String)
    const responseData = JSON.parse(e.target.response)
    console.log(responseData)
  })

  // 서버로 요청 보내기
  request.send()

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

      // 서버에서 도착한 응답 처리

      console.log(`응답 상태 코드 = ${xhr.status}`)
      console.log(`응답 데이터 = ${xhr.response}`)
      
      // 문자값 응답 -> JSON 문자열 -> JavaScript 객체 변환
      const responseData = JSON.parse(xhr.response)
      
      // 데이터 정리
      // 로그인(login) 데이터만 새롭게 배열 재구성
      const followers = responseData.map(({ login }) => login)

      // 템플릿 구성
      const followerItemsTemplate = followers.map((name) => {
        return `<li>${name}</li>`
      }).join('')

      // DOM 업데이트 (렌더 파이프라인 : 스타일 재계산 -> 레이아웃(reflow) -> 페인트(repaint) -> 컴포지트)
      // DOM에 렌더링(Rendering) = 화면 변경
      document.querySelector('.github-followers').innerHTML = followerItemsTemplate
    })
  }

  requestGitHubUserFollowers('yamoo9')

})


;(() => {
  // 비동기 자바스크립트를 사용해 서버와 비동기 통신(페칭: fetcing 요청/응답)
  const promise = fetch('https://api.github.com/users/yamoo9/repos')
  
  promise.then((response) => response.json())
         .then(console.log) // [2]
        //  .then((responseData) => console.log(responseData))

  // 비동기 통신 이후, DOM 업데이트
  const reposList = document.querySelector('.repos-list')
  console.log(reposList) // [1]

})

/* global DOMPurify */

;(() => {
   // 📌 전역 상수
    const GITHUB_API_URL = 'https://api.github.com/users/hana12051/repos'
    const reposList = document.querySelector('.repos-list')

    // 📌 데이터 정리 함수
    function massageRepoData(data) {
      return data.map(({ git_url, description, owner: { avatar_url, login } }) => ({
        url: git_url,
        description,
        avatar: avatar_url,
        account: login,
      }))
    }

    // 📌 마크업 생성 함수
    function createRepoListTemplate(repos) {
      return repos.map(({ url, description, avatar, account }) => {
        const linkContent = url.replace('git://', '').replace('.git', '')
        const linkHref = `https://${linkContent}`
        return `
          <li>
            <h3>${account}</h3>
            <img src="${avatar}" alt="${account}의 아바타" height="80" width="80" />
            <p><a href="${linkHref}" target="_blank">${linkContent}</a></p>
            <p>${description ?? '설명이 없습니다.'}</p>
          </li>
        `
      }).join('')
    }

    // 📌 비동기 통신 및 DOM 렌더링
    ;(async () => {
      try {
        const response = await fetch(GITHUB_API_URL)
        if (!response.ok) throw new Error('데이터 로드 실패')

        const rawData = await response.json()
        const massagedData = massageRepoData(rawData)
        const template = createRepoListTemplate(massagedData)

        reposList.innerHTML = DOMPurify.sanitize(template)
      } catch (error) {
        reposList.innerHTML = `<li>에러 발생: ${error.message}</li>`
      }
    })()


})

