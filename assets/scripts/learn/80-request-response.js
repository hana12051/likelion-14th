//요청과 응답.

;(()=> {
// ==============================
// 📚 HTTP 요청 (Request)
// ==============================

// 엔드포인트 (요청을 보내는 URL)
// 예시: https://api.github.com/users/yamoo9/repos?sort=pushed

// 메서드 (요청 방식)
// - 조회: GET
// - 생성: POST
// - 수정: PUT, PATCH
// - 삭제: DELETE

// 헤더 (서버에 추가 정보 제공)
// 예시: { "Content-Type": "application/json" }

// 바디 (서버로 전송할 데이터)
// - POST, PUT, PATCH 요청 시에만 사용됨
// - 예시: { "name": "yamoo9", "age": 30 }


// ==============================
// 📥 HTTP 응답 (Response)
// ==============================

// 상태 (요청 성공 / 실패 여부)
// - 200 OK: 성공
// - 404 Not Found: 요청한 리소스 없음
// - 500 Internal Server Error: 서버 에러

// 응답 헤더 (브라우저에 추가 정보 제공)
// 예시: { "Content-Type": "application/json" }

// 응답 바디 (서버가 보내는 실제 데이터)
// 예시: { "id": "z9dl-cksoic", "name": "야무" }


// ==============================
// 📌 HTTP 메서드 요약
// ==============================
// GET     → 데이터 조회
// POST    → 데이터 생성
// PUT     → 데이터 전체 수정
// PATCH   → 데이터 일부 수정
// DELETE  → 데이터 삭제



})()

;(() => {

//C.R.U.E

//create -> 생성
//read ->조회
//update ->수정
//Delete ->삭제



})