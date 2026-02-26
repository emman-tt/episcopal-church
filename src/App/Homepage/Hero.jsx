import { useEffect, useRef } from 'react'
import { gsap, SplitText } from '../../libs/gsap'

export default function Hero() {
  const headerText = useRef(null)
  const secondText = useRef(null)
  const thirdText = useRef(null)
  const firstText = useRef(null)

  useEffect(() => {
    const headerSplit = new SplitText(headerText.current, {
      type: 'words,lines,chars'
    })
    const secondSplit = new SplitText(secondText.current, {
      type: 'words,chars,lines'
    })
    const firstSplit = new SplitText(firstText.current, {
      type: 'words,chars,lines'
    })
    const thirdSplit = new SplitText(thirdText.current, {
      type: 'words,chars,lines'
    })

    const tl = gsap.timeline()

    tl.from(headerSplit.chars, {
      x: 50,
      stagger: {
        amount: 1.5,
        from: 'start'
      },
      ease: 'back.inOut',
      opacity: 0
    })
    tl.from(
      secondSplit.chars,
      {
        x: -50,
        stagger: {
          amount: 1.5,
          from: 'random'
        },
        ease: 'back.inOut',
        opacity: 0
      },
      {
        delay: 0
      }
    )
    tl.from(
      firstSplit.words,
      {
        y: -50,
        stagger: {
          amount: 1,
          from: 'start'
        },
        ease: 'back.inOut',
        opacity: 0
      },
      {
        delay: 0
      }
    )
  }, [])
  return (
    <section className='w-full h-full px-6 md:pl-20 pt-10 text-white'>
      <section className=' flex flex-col w-full md:w-[60%]'>
        <h3 ref={firstText} className='font-mono text-sm md:text-lg'>
          820, Hpward St, Carthage, MO 64836
        </h3>
        <h2 ref={headerText} className='text-4xl md:text-6xl font-semibold mt-8 leading-tight'>
          Welcoming Environment for
        </h2>
        <p ref={secondText} className='text-4xl md:text-6xl font-light mt-5 leading-tight'>
          People of All Backgrounds
        </p>

        <p className=' mt-6 text-sm md:text-base opacity-80'>
          Join in as you feel comfortable. Attending a service doesn't commit
          you to anything
        </p>

        <div className='flex flex-col sm:flex-row gap-4 md:gap-6 mt-8 md:mt-6 text-xs md:text-sm font-light'>
          <button className='p-4 px-5 cursor-pointer text-center rounded-2xl border-white hover:border-0 border hover:bg-[#8f3337] w-full sm:w-auto'>
            SUNDAYS AT GRACE
          </button>
          <button className='p-4 px-5 cursor-pointer text-center rounded-2xl border-white hover:border-0 border hover:bg-[#8f3337] w-full sm:w-auto'>
            VIEW SERVICE ONLINE
          </button>
        </div>
      </section>
    </section>
  )
}
