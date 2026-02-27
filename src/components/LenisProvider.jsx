// components/LenisProvider.jsx
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default function LenisProvider ({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
   
    const lenis = new Lenis({
      duration: 2.3, 
      lerp: 0.08, 
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical', 
      gestureOrientation: 'vertical',
      smoothWheel: true, 
      smoothTouch: true, //for mobile smooth scrolling
      touchMultiplier: 1, 
      wheelMultiplier: 0.8, 
      infinite: false, 
      syncTouch: true,
      syncTouchLerp: 0.075, 
      touchInertiaMultiplier: 35 
    })

    lenisRef.current = lenis

  
    function raf (time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

 
    return () => {
      lenis.destroy()
    }
  }, [])

  return children
}
