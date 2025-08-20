import './counter.css'

export default function Counter({ count = 0, setCount }) {
  console.log('Counter 렌더링')

  return (
    <button
      type="button"
      className="counter"
      onClick={() => setCount((c) => c + 1)}
    >
      {count}
    </button>
  )
}
