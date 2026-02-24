import cross5 from '../../assets/img/cross5.jpg'
import cross6 from '../../assets/img/cross6.svg'
import bible from '../../assets/img/bible.jpg'
import { gsap, SplitText } from '../../libs/gsap'
import { useRef, useEffect } from 'react'

export default function Donate({ donateRef }) {
  const imageOne = useRef(null)
  const imageTwo = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline({


      scrollTrigger: {
        trigger: donateRef.current,
        start: 'top+=-50% top',
        end: "+=100%",
        // markers: true,
        toggleActions: "play reverse play reverse"
      }
    })
    tl.fromTo(
      imageOne.current,
      { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
      { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1, }
    )
    tl.fromTo(
      imageTwo.current,
      { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
      { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1, }
      , {
        delay: 0
      })
  }, [])

  return (
    <section
      ref={donateRef}
      className='absolute inset-0 w-full h-screen mb-20 overflow-hidden text-white mt-10 md:mt-40 bg-[#111111] flex flex-col md:flex-row p-6 md:px-20 gap-8 md:gap-0'
    >
      <img
        src={cross6}
        className='h-auto absolute -bottom-10  -rotate-40 w-50 left-40 z-1'
        alt=''
      />
      <div className='w-full md:w-[40%] h-[30%] md:h-[70%]'>
        <img
          ref={imageOne}
          src={cross5}
          className='w-full h-full object-cover'
          alt=''
        />
      </div>
      <div className='h-auto md:h-full gap-4 md:gap-8 flex justify-center items-center flex-col text-center px-4'>
        <h3 className='font-bold text-xs md:text-base'> GRACE CARTHAGE</h3>
        <h2 className='text-2xl md:text-4xl font-semibold leading-tight'>
          God is The Only Thing We are After
        </h2>
        <p className='text-center text-xs md:text-base opacity-80'>
          We are not a church built around a personality, entertaining
          experience, or new idea. Our only goal: to draw everyone to God. Every
          person was created to belong.
        </p>
        <button className='rounded-4xl cursor-pointer text-white font-semibold bg-[#8f3337] p-3 md:p-4 text-sm md:text-base'>
          DONATE NOW
        </button>
      </div>
      <div className='w-full md:w-[40%] h-[30%] md:h-[70%] relative flex self-center md:self-end'>
        <img
          src={cross6}
          className='h-auto absolute -top-10 md:-top-40 w-32 md:w-50 left-5 md:left-20 z-1 opacity-50 md:opacity-100'
          alt=''
        />
        <img
          ref={imageTwo}
          src={bible}
          className='w-full relative z-2 h-full object-cover'
          alt=''
        />
      </div>
    </section>
  )
}
