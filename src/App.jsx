import { useRef, useState } from 'react'
import './App.scss'
import { basicConfetti, fireworkConfetti, starConfetti } from './utils/confetti'

function App() {
  const containerRef = useRef(null)
  const [count, setCount] = useState(0)

  const handleTouchStart = () => {
    if (containerRef.current) containerRef.current.style.transform = 'scale(1.2)'
  }

  const handleTouchEnd = () => {
    if (containerRef.current) containerRef.current.style.transform = 'scale(1)'
  }

  const handleConfetti = count => {
    if (count % 1000 === 0) {
      fireworkConfetti()
    } else if (count % 500 === 0) {
      starConfetti()
    } else if (count % 100 === 0) {
      basicConfetti()
    }
  }

  const handleClick = () => {
    setCount(prevCount => {
      handleConfetti(prevCount + 1)
      return prevCount + 1
    })
  }

  return (
    <main
      ref={containerRef}
      className='main'
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className='box'>
        <button>{count}</button>
      </div>
    </main>
  )
}

export default App
