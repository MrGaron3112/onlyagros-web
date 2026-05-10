import { useEffect, useState } from 'react'

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener(
        'mousemove',
        updateMousePosition
      )
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-[1] transition-transform duration-200"
      style={{
        background:
          'radial-gradient(circle, rgba(251,146,60,0.18) 0%, rgba(251,146,60,0) 70%)',

        transform: `translate(${position.x - 250}px, ${
          position.y - 250
        }px)`,

        filter: 'blur(40px)'
      }}
    />
  )
}