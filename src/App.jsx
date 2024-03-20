import { useRef, useState } from 'react'
import './App.scss'
import { handleConfetti } from './utils/confetti'
import { timeFormat } from './utils/timeFormat'

function App() {
  const mcgrawRef = useRef(null)

  const [count, setCount] = useState(0)

  const [isFirstTouch, setIsFirstTouch] = useState(true)

  const [time, setTime] = useState(0)
  const intervalRef = useRef(null)

  const [pause, setPause] = useState(false)

  const handleTouchStart = e => {
    if (isFirstTouch) {
      startTimer()
      setIsFirstTouch(false)
    }

    if (e.target.tagName === 'BUTTON') return

    mcgrawRef.current.style.transform = 'scale(1.2)'

    setCount(prevCount => {
      handleConfetti(prevCount + 1)
      return prevCount + 1
    })
  }

  const handleTouchEnd = () => {
    mcgrawRef.current.style.transform = 'scale(1)'
  }

  const handleSwitchTimer = () => {
    pause ? startTimer() : pauseTimer()
  }

  const startTimer = () => {
    setPause(false)
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 10)
    }, 10)
  }
  const pauseTimer = () => {
    setPause(true)
    clearInterval(intervalRef.current)
  }

  return (
    <main className='main' onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className='timer'>
        <p>{timeFormat(time)}</p>
        {!isFirstTouch && (
          <button type='button' onClick={handleSwitchTimer} className={pause ? 'isPause' : ''}>
            {pause ? 'RESUME' : 'PAUSE'}
          </button>
        )}
      </div>
      <div className='wrapper'>
        <div className='mcgraw' ref={mcgrawRef}>
          <p>{count}</p>
        </div>
      </div>
    </main>
  )
}

export default App
