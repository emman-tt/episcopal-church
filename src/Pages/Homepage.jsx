import Header from '../App/Homepage/Header'
import Hero from '../App/Homepage/Hero'
import bg1 from '../assets/img/bg1.jpg'
import bg4 from '../assets/img/bg4.jpg'
import Epistle from '../App/Homepage/Epistle'
import Announcement from '../App/Homepage/Annoucement'
import Donate from '../App/Homepage/Donate'
import Schedule from '../App/Homepage/Schedule'
import Testimonial from '../App/Homepage/Testimonial'
import Events from '../App/Homepage/Events'
import Footer from '../App/Homepage/Footer'

import { useEffect, useMemo, useRef, useState } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default function Homepage () {
  const containerRef = useRef(null)
  const donateRef = useRef(null)
  const announceRef = useRef(null)
  const epistleRef = useRef(null)

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)


  useEffect(() => {
    const cards = [epistleRef.current, announceRef.current, donateRef.current]
    const container = containerRef.current

    gsap.set(announceRef.current, { yPercent: 100, zIndex: 2 })
    gsap.set(donateRef.current, { yPercent: 200, zIndex: 3 })

    cards.forEach((card, index) => {
      if (index === 0) return

      gsap.fromTo(
        card,
        { yPercent: isMobile ? 150 * index : 100 * index },
        {
          yPercent: 0,
          scrollTrigger: {
            trigger: container,
            start: `top+=${(index - 1) * 30 + 20}%  top`,
            end: `+=50%`,
            scrub: 4,
      
          }
        }
      )
    })

    ScrollTrigger.create({
      trigger: container,
      start: isMobile ? 'top+=7% top' : 'top+=10% top',
      end: isMobile ? '+=170%' : '+=190%',
      pin: true,
      // markers: true
    })

    return () => ScrollTrigger.getAll().forEach(st => st.kill())
  }, [])

  return (
    <section>
      <section className='w-full relative border h-170'>
        <div className='absolute inset-0 -z-1 bg-black/50'></div>
        <img
          src={bg1}
          className='absolute inset-0 h-full    w-full object-cover -z-2'
          alt=''
        />

        <Header  textColor='white'/>
        <Hero />
        <div className='absolute max-sm:hidden  w-90 h-100 z-5 -bottom-40 right-30 border-14 border-[#8e3635]'>
          <img src={bg4} className='h-full  w-full object-cover' alt='church' />
        </div>
      </section>

      <main
        className=' relative h-[170vh] max-sm:h-[150vh] '
        ref={containerRef}
      >
        <Epistle epistleRef={epistleRef} />
        <Announcement annouceRef={announceRef} />
        <Donate donateRef={donateRef} />
      </main>
      <Schedule />
      <Testimonial />
      <Events />
      <Footer />
    </section>
  )
}
