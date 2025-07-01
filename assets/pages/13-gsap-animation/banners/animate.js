/* global gsap */
document.addEventListener('DOMContentLoaded', () => {
  const timeline = gsap.timeline({ repeat: -1, yoyo: true })

  //  지구 흔들기 (더 크게, 진자 느낌)
  timeline.to('#earth', {
    rotation: 10, // 🔥 더 크게
    transformOrigin: '50% 50%', //회전 또는 확대의 중심을 잡을 때 사용
    duration: 1.2,
    ease: 'power1.inOut',
  })

  timeline.to('#earth', {
    rotation: -10,
    transformOrigin: '50% 50%',
    duration: 1.2,
    ease: 'power1.inOut',
  })

  //  농구공 위아래 더 튕기듯
  gsap.to('#basketball', {
    y: 12, // ✅ 더 튀게
    duration: 1.2,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    delay: 0.2,
  })

  //  컨트롤러 좌우 흔들기
  gsap.to('#controller', {
    x: 10, // ✅ 더 크게 좌우
    duration: 1.5,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    delay: 0.4,
  })

  //  연필 위아래
  gsap.to('#pencil', {
    y: -10,
    duration: 1.2,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    delay: 0.6,
  })

  //  책 살짝 회전
  gsap.to('#book_1_', {
    rotation: 8, // ✅ 눈에 띄게
    transformOrigin: '50% 50%',
    duration: 1.5,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    delay: 0.3,
  })

  //  공 위아래
  gsap.to('#ball', {
    y: 10,
    duration: 1.3,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    delay: 0.5,
  })

  //  물감 팔레트 좌우 흔들기
  gsap.to('#paint', {
    x: -8,
    duration: 1.6,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    delay: 0.7,
  })
})