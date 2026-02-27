import { NavLink } from 'react-router-dom'
import { gsap, SplitText } from '../../libs/gsap'
import { useRef, useEffect } from 'react'

export default function Donate ({ donateRef }) {
  const imageOne = useRef(null)
  const imageTwo = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: donateRef.current,
        start: 'top+=-50% top',
        end: '+=100%',
        // markers: true,
        toggleActions: 'play reverse play reverse'
      }
    })
    tl.fromTo(
      imageOne.current,
      { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
      { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1 }
    )
    tl.fromTo(
      imageTwo.current,
      { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
      { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1 },
      {
        delay: 0
      }
    )
  }, [])

  return (
    <section
      ref={donateRef}
      className='absolute inset-0 w-full h-screen max-sm:h-[110vh] mb-20 overflow-hidden text-white mt-10 md:mt-40 bg-[#111111] flex flex-col md:flex-row p-6 md:px-20 gap-8 md:gap-0'
    >
      <img
        loading='lazy'
        src={
          'https://res.cloudinary.com/drpnhajh9/image/upload/v1772140052/cross6_rtw1ii.svg'
        }
        className='h-auto  absolute -bottom-10  -rotate-40 w-50 left-40 z-1'
        alt=''
      />
      <div className='w-full md:w-[40%] h-[30%] md:h-[70%]'>
        <img
          loading='lazy'
          ref={imageOne}
          src={
            'https://res.cloudinary.com/drpnhajh9/image/upload/v1772140073/cross5_khiwng.jpg'
          }
          className='w-full max-sm:hidden h-full object-cover'
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
        <NavLink
          to={'/contact'}
          className='rounded-4xl cursor-pointer text-white font-semibold bg-[#8f3337] p-3 md:p-4 text-sm md:text-base'
        >
          DONATE NOW
        </NavLink>
      </div>
      <div className='w-full md:w-[40%] h-[30%] md:h-[70%] relative flex self-center md:self-end'>
        <img
          loading='lazy'
          src={
            'https://res.cloudinary.com/drpnhajh9/image/upload/v1772140052/cross6_rtw1ii.svg'
          }
          className='h-auto absolute -top-10 md:-top-40 w-32 md:w-50 left-5 md:left-20 z-1 opacity-50 md:opacity-100'
          alt=''
        />
        <img
          loading='lazy'
          ref={imageTwo}
          src={
            'https://res.cloudinary.com/drpnhajh9/image/upload/v1772138422/belief_mtsz73.jpg'
          }
          className='w-full max-sm:hidden relative z-2 h-full object-cover'
          alt=''
        />
      </div>
    </section>
  )
}
