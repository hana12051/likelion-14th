;(() => {
      const ENDPOINT = 'https://dummyjson.com/products' // 실제 존재하는 API

      fetch(ENDPOINT)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`${response.status} 해당 리소스를 찾을 수 없습니다. 😳`)
          }
          return response.json()
        })
        .then((data) => {
          console.log('✅ 응답 데이터:', data)

          // 예시 데이터 가공
          const hats = data.products.filter(p => p.category === 'hats')
          console.log('🧢 모자 상품:', hats)

          console.log('📦 전체 상품 수:', data.products.length)

          const femaleCount = data.products.filter(p => p.gender === 'female').length
          console.log('👩 여성 상품 수:', femaleCount)
        })
        .catch((error) => {
          const alertMessage = document.querySelector('[role="alert"]')
          if (alertMessage) {
            alertMessage.hidden = false
            alertMessage.textContent = error.message
          } else {
            console.error('❗ [role="alert"] 요소가 없음')
          }
        })
        .finally(() => {
          console.log('🌀 통신 완료 - 성공이든 실패든 무조건 실행됨!')
        })
    })()