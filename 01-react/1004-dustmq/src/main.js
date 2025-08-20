const { createElement: h } = React
const { createRoot } = ReactDOM

import ProfileCard from './components/ProfileCard.js'

const profiles = [
  {
    id: 1,
    name: '홍길동',
    job: '프론트엔드 개발자',
    desc: 'React와 UI 개발을 좋아합니다.',
    img: './assets/images/user1.png',
  },
  {
    id: 2,
    name: '김영희',
    job: '백엔드 개발자',
    desc: 'Node.js와 서버 개발이 취미입니다.',
    img: './assets/images/user2.png',
  },
  {
    id: 3,
    name: '이철수',
    job: '디자이너',
    desc: 'UX와 디자인 시스템에 관심이 많아요.',
    img: './assets/images/user3.png',
  },
  {
    id: 4,
    name: '김둘리',
    job: '총책임자',
    desc: '사용자 접근성에 대해 관심이 많습니다. 함께 개발하고 알아갈 사람들이 필요합니다.',
    img: './assets/images/user3.png',
  },
]

function App() {
  return h(
    'section',
    { className: 'app' },
    h(
      'header',
      {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: 16,
        },
      },
      h(
        'h1',
        { style: { margin: 0, fontSize: '1.25rem' } },
        '프로필 카드 리스트'
      ),
      h('small', { style: { color: '#94a3b8' } }, `${profiles.length}명`)
    ),
    h(
      'div',
      {
        className: 'grid',
        style: {
          display: 'grid',
          gap: 16,
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        },
      },
      profiles.map((p) =>
        h(ProfileCard, {
          key: p.id,
          img: p.img,
          name: p.name,
          job: p.job,
          desc: p.desc,
          onMore: () => alert(`${p.name}의 프로필`),
        })
      )
    )
  )
}

const container = document.getElementById('container')
if (!container) throw new Error('#container가 없습니다.')

window.__APP_ROOT__ ??= createRoot(container)
window.__APP_ROOT__.render(h(App))
