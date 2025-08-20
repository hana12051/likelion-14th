# React Component Practice (Vanilla React)

바닐라 리액트(UMD + ES Module)로 **컴포넌트 분리, props/children**을 연습하는 예제입니다. JSX 없이 `React.createElement`로 UI를 합성합니다.

## ✨ Features

- `React.createElement` 기반 UI 합성
- 함수형 컴포넌트 분리 (`Avatar`, `ProfileInfo`, `ProfileCard`)
- `props`, `children` 전달 연습
- UMD 스크립트 + ES 모듈 조합
- 간단한 데이터 매핑으로 리스트 렌더

## 📂 Folder Structure

1004-dustmq/
├─ assets/
│ ├─ images/ # 프로필 이미지 및 기타 리소스
│ └─ styles/
│ └─ main.css # 기본 스타일
├─ src/
│ ├─ components/
│ │ ├─ Avatar.js # 프로필 이미지 컴포넌트
│ │ ├─ ProfileCard.js # 프로필 카드 컴포넌트
│ │ └─ ProfileInfo.js # 이름/직무/설명 표시 컴포넌트
│ └─ main.js # 앱 진입점
├─ index.html # HTML 엔트리
├─ package.json
└─ README.md

## 🚀 Getting Started

### 실행 방법

### 1. 프로젝트 루트로 이동

cd path/to/1004-dustmq

### 2. 서버 실행

bun run serve
서버 루트가 반드시 1004-dustmq 폴더여야 /assets/... 경로가 맞아요.

브라우저에서 http://localhost:3000 접속하면 됩니다.

--no-browser를 빼면 자동으로 브라우저 열림.

### Components

Avatar.js
프로필 이미지를 표시. 이미지가 없거나 404면 FALLBACK SVG로 대체.

Props: src?: string, alt?: string

ProfileInfo.js
이름/직무/설명 텍스트 렌더.

Props: name: string, job: string, desc: string

ProfileCard.js
Avatar + ProfileInfo를 합성해 카드 UI 구성.

하단 children 영역 또는 기본 “더보기” 버튼 제공.

Props:

img?: string, name: string, job: string, desc: string

children?: ReactNode, onMore?: () => void

main.js
데이터 배열(profiles)을 map으로 돌려 ProfileCard 리스트 렌더.

ReactDOM.createRoot는 컨테이너당 한 번만 생성 → window.**APP_ROOT**로 가드.

### 🧪 Usage Example

// src/main.js
const { createElement: h } = React
const { createRoot } = ReactDOM

import ProfileCard from './components/ProfileCard.js'

const profiles = [
{ id: 1, name: '홍길동', job: '프론트엔드 개발자', desc: 'React와 UI 개발을 좋아합니다.', img: './assets/images/user1.png' },
{ id: 2, name: '김영희', job: '백엔드 개발자', desc: 'Node.js와 서버 개발이 취미입니다.', img: './assets/images/user2.png' },
{ id: 3, name: '이철수', job: '디자이너', desc: 'UX와 디자인 시스템에 관심이 많아요.', img: './assets/images/user3.png' }
]

function App() {
return h(
'section',
{ className: 'app' },
h('h1', null, '프로필 카드 리스트'),
h('div', { className: 'grid' },
profiles.map(p =>
h(ProfileCard, {
key: p.id,
img: p.img,
name: p.name,
job: p.job,
desc: p.desc,
onMore: () => alert(`${p.name}의 프로필`)
})
)
)
)
}

const container = document.getElementById('container')
if (!container) throw new Error('#container가 없습니다.')

window.**APP_ROOT** ??= createRoot(container) // ✅ 중복 createRoot 방지
window.**APP_ROOT**.render(h(App))
🧯 Troubleshooting

### 1. createRoot 경고

Warning: You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot()...
같은 컨테이너에 createRoot를 두 번 호출한 경우.

해결: main.js에서만 생성하고, 아래처럼 싱글톤 가드 사용:

window.**APP_ROOT** ??= ReactDOM.createRoot(container)
다른 파일(components/\*)에서는 절대 createRoot/render 호출하지 않기.

### 2. 이미지 404

GET http://localhost:3000/assets/images/user1.png 404 (Not Found)
서버 루트가 1004-dustmq가 맞는지 확인.

assets/images/user\*.png 실제 파일이 있는지 확인.

없으면 Avatar의 FALLBACK가 표시되도록 onError 처리(이미 기본 제공).

### 3. ES 모듈 경로 오류

Failed to resolve module specifier ".components/x.js"
브라우저 모듈 경로는 반드시 /, ./, ../로 시작해야 함.

예: import X from "./components/X.js"

### 4. 내보내기/가져오기 불일치

does not provide an export named 'default' / 'X'
import X from ↔ 파일에 export default X

import { X } from ↔ 파일에 export function X(){} 또는 export { X }

### 5. DevTools 안내 메시지

“Download the React DevTools …”는 개발 빌드 안내로 정상.
배포용(production)에서는 안 뜸.

🧭 Practice Tasks (추가 연습)
ProfileCard 하단 children으로 커스텀 버튼/링크 삽입

props로 카드 배경색/테두리색 테마 변경

onMore 대신 카드 클릭 시 상세 모달 열기

데이터에 skills: string[]를 추가하고 태그 형태로 렌더

Avatar에 size prop 추가(32/48/64 등)
