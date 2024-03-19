import { useRef, useState } from 'react'
import './App.scss'

function App() {
  const containerRef = useRef(null)
  const [count, setCount] = useState(0)

  const handleTouchStart = () => {
    if (!containerRef.current) return

    containerRef.current.style.transform = 'scale(1.2)'
  }

  const handleTouchEnd = () => {
    if (!containerRef.current) return

    containerRef.current.style.transform = 'scale(1)'
  }

  return (
    <>
      <main
        ref={containerRef}
        className='main'
        onClick={() => {
          setCount(count => count + 1)
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className='box'>
          <button>{count}</button>
        </div>
      </main>
    </>
  )
}

export default App
