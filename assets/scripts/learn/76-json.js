;(()=> {
const request = new XMLHttpRequest()

request.open('GET', 'https://api.github.com/users/yamoo9/repos')

request.send()

request.addEventListener('load', ({ target: xhr }) => {
  const repos = JSON.parse(xhr.response)
  console.log(repos)

  // 데이터 정리 (Data Massaging)
  // - 저장소 이름(`name`)
  // - 저장소 공개 여부(`private`)
  // - 저장소 URL (`html_url`)

  const massagedRepos = repos.map((repo) => {
    return {
      name: repo.name,
      private: repo.private,
      url: repo.html_url,
    }
  })
  
  // const massagedRepos = repos.map((repo) => ({
  //   name: repo.name,
  //   private: repo.private,
  //   url: repo.html_url,
  // }))

  // const massagedRepos = repos.map(({ name, private, html_url: url }) => ({
  //   name,
  //   private,
  //   url,
  // }))

  console.log(massagedRepos)
  
})
})