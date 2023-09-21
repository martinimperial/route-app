import React, { useState, useEffect } from 'react'

export default function About() {
  const[windowWidth, setwindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setwindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      <div>{windowWidth}</div>
      console.log('return from resource change')
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth])
  return (
    <div>{windowWidth}</div>
    
  )
}
