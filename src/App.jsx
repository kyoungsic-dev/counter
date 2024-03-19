import { useRef, useState } from 'react'
import './App.scss'
import { handleConfetti } from './utils/confetti'

function App() {
  const containerRef = useRef(null)
  const [count, setCount] = useState(0)

  const handleTouchStart = () => {
    if (!containerRef.current) return
    containerRef.current.style.transform = 'scale(1.2)'

    setCount(prevCount => {
      handleConfetti(prevCount + 1)
      return prevCount + 1
    })
  }

  const handleTouchEnd = () => {
    if (!containerRef.current) return
    containerRef.current.style.transform = 'scale(1)'
  }

  return (
    <main ref={containerRef} className='main' onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className='box'>
        <button>{count}</button>
      </div>
    </main>
  )
}

export default App
