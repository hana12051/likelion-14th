import { useState } from 'react'
import './style.css'

// 초기 배열 값
const INITIAL = ['A', 'B', 'C']

export default function ManageArrayState() {
  // 배열 상태 (초깃값: A, B, C)
  const [items, setItems] = useState(INITIAL)

  // 인풋 상태: 맨 앞 추가용
  const [inputFront, setInputFront] = useState('')
  // 인풋 상태: 원하는 인덱스 추가용 값
  const [insertValue, setInsertValue] = useState('')
  // 인풋 상태: 원하는 인덱스 추가용 위치
  const [insertIndex, setInsertIndex] = useState('')

  // 1) 배열의 첫 번째 요소 제거
  const removeFirst = () => setItems((prev) => prev.slice(1))

  // 2) 특정 문자를 제거 (예: 'B' 제거 버튼에서 사용)
  const removeChar = (ch) => setItems((prev) => prev.filter((v) => v !== ch))

  // 3) 맨 앞에 새로운 요소 추가
  const addFront = (value) => setItems((prev) => [value, ...prev])

  // 4) 맨 뒤에 새로운 요소 추가
  const addBack = (value) => setItems((prev) => [...prev, value])

  // 5) 배열 비우기
  const clearAll = () => setItems([])

  // 6) 초기 상태로 되돌리기
  const reset = () => setItems(INITIAL)

  // 7) 모든 'A'를 'H'로 교체
  const replaceAllAtoH = () =>
    setItems((prev) => prev.map((v) => (v === 'A' ? 'H' : v)))

  // (추가) 입력값을 배열 맨 앞에 추가
  const addFrontFromInput = () => {
    const val = inputFront.trim()
    if (!val) return // 공백은 무시
    addFront(val)
    setInputFront('') // 입력창 비우기
  }

  // (추가) 원하는 인덱스 위치에 새로운 값 삽입
  const insertAtIndex = () => {
    const idx = Number.parseInt(insertIndex, 10) // 입력값을 숫자로 변환
    const val = insertValue.trim()
    if (Number.isNaN(idx) || !val) return // 잘못된 입력이면 무시

    // 범위를 벗어나면 보정 (0 미만 → 0, 배열 길이 초과 → 끝에 삽입)
    const safeIndex = Math.max(0, Math.min(idx, items.length))

    // 불변성을 지키며 새 배열 생성
    setItems((prev) => [
      ...prev.slice(0, safeIndex),
      val,
      ...prev.slice(safeIndex),
    ])

    // 입력창 비우기
    setInsertValue('')
    setInsertIndex('')
  }

  return (
    <section className="max-w-[400px] mx-auto my-16">
      <h2 className="text-xl font-semibold">배열 상태 관리 실습</h2>

      {/* 현재 배열 상태 출력 */}
      <output className="block my-5 px-3 py-2 border-2 rounded">
        <strong>배열 상태</strong> :{' '}
        {items.length ? items.join(', ') : <em>(비어 있음)</em>}
      </output>

      {/* 기본 기능 버튼 그룹 */}
      <div
        role="group"
        className="flex flex-col flex-wrap items-start gap-1.5 my-8"
      >
        <button
          type="button"
          onClick={removeFirst}
          disabled={items.length === 0}
        >
          첫 번째 요소 제거
        </button>

        <button
          type="button"
          onClick={() => removeChar('B')}
          disabled={!items.includes('B')}
        >
          'B' 제거
        </button>

        <button type="button" onClick={() => addFront('X')}>
          맨 앞에 'X' 추가
        </button>

        <button type="button" onClick={() => addBack('Y')}>
          맨 뒤에 'Y' 추가
        </button>

        <button type="button" onClick={clearAll} disabled={items.length === 0}>
          모두 제거
        </button>

        <button
          type="button"
          onClick={reset}
          disabled={items.join(',') === INITIAL.join(',')}
        >
          초기화
        </button>

        <button
          type="button"
          onClick={replaceAllAtoH}
          disabled={!items.includes('A')}
        >
          모든 'A'를 'H'로 변경
        </button>
      </div>

      {/* 입력창 + 버튼 → 맨 앞에 추가 */}
      <div role="group" data-layout-row className="flex flex-row gap-1.5 my-8">
        <input
          type="text"
          placeholder="추가할 값"
          value={inputFront}
          onChange={(e) => setInputFront(e.target.value)}
          className="w-[100px]"
        />
        <button
          type="button"
          onClick={addFrontFromInput}
          disabled={!inputFront.trim()}
        >
          맨 앞에 추가
        </button>
      </div>

      {/* 입력창 + 인덱스 지정 → 원하는 위치에 추가 */}
      <div role="group" data-layout-row className="flex flex-row gap-1.5 my-8">
        <input
          type="text"
          placeholder="추가할 값"
          value={insertValue}
          onChange={(e) => setInsertValue(e.target.value)}
          className="w-[100px]"
        />
        <input
          type="number"
          placeholder="인덱스"
          min={0}
          max={10}
          value={insertIndex}
          onChange={(e) => setInsertIndex(e.target.value)}
          className="w-[100px]"
        />
        <button
          type="button"
          onClick={insertAtIndex}
          disabled={
            !insertValue.trim() ||
            Number.isNaN(Number.parseInt(insertIndex, 10))
          }
        >
          원하는 위치에 추가
        </button>
      </div>
    </section>
  )
}
