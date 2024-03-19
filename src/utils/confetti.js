import confetti from 'https://esm.run/canvas-confetti@1'

// Basic
export const basicConfetti = () => {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: {
      y: 0.325
    }
  })
}

// Star
const shootConfetti = (particleCount, scalar, shapes) => {
  confetti({
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
    particleCount,
    scalar,
    shapes
  })
}

export const starConfetti = () => {
  setTimeout(() => {
    shootConfetti(40, 1.2, ['star'])
    shootConfetti(10, 0.75, ['circle'])
  }, 0)
  setTimeout(() => {
    shootConfetti(40, 1.2, ['star'])
    shootConfetti(10, 0.75, ['circle'])
  }, 100)
  setTimeout(() => {
    shootConfetti(40, 1.2, ['star'])
    shootConfetti(10, 0.75, ['circle'])
  }, 200)
}

// Firework
const randomInRange = (min, max) => {
  return Math.random() * (max - min) + min
}

export const fireworkConfetti = () => {
  const duration = 3 * 1000
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now()
    if (timeLeft <= 0) {
      clearInterval(interval)
      return
    }

    const particleCount = 100 * (timeLeft / duration)
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
  }, 250)
}
