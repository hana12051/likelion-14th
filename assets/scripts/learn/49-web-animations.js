//웹 애니메이션
;(() => {
  
  const ballElement = document.querySelector('.ball')
  const TRANSITION_CLASSNAME = 'is-transition'
  
  ballElement.addEventListener('mouseenter', (e) => {
    e.currentTarget.classList.add(TRANSITION_CLASSNAME)
  })
  
  ballElement.addEventListener('mouseleave', (e) => {
    e.currentTarget.classList.remove(TRANSITION_CLASSNAME)
  })
  
})()

// 웹 애니메이션 API
;(() => {
  const ballElement = document.querySelector('.ball')

  // 애니메이션 정의
  const animation = ballElement.animate(
    [
      { transform: 'scale(1)', offset: 0 },
      { transform: 'scale(1.5)', offset: 0.5 },
      { transform: 'scale(1)', offset: 1 },
    ],
    {
      duration: 1500,
      iterations: Infinity,
      easing: 'ease-in-out',
    }
  )

  // 초기에 일시정지
  animation.pause()

  ballElement.addEventListener('click', () => {
    if (animation.playState === 'paused') {
      animation.play()
      console.log('애니메이션 재생')
    } else {
      animation.pause()
      console.log('애니메이션 일시정지')
    }
  })
})()