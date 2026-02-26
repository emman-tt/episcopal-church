import { useEffect, useRef } from 'react'
import church6 from '../../assets/img/church6.jpg'
import { Dots } from '../../components/dots'
import { gsap, ScrollTrigger } from '../../libs/gsap'
export default function Schedule() {
  const box1 = useRef(null)

  const containerRef = useRef(null)
  useEffect(() => {
    const container = containerRef.current
    if (!container || !containerRef) {
      return
    }
    const scheduleItems = container.querySelectorAll('.schedule-item')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: box1.current,
        start: 'top+=20% top',
        end: '+=60%',
        pin: false,
        scrub: 3,
        // markers: true,
        toggleActions: 'play reverse play reverse'
      }
    })

    scheduleItems.forEach((item, index) => {
      tl.fromTo(
        item,
        {
          opacity: 0,
          x: -100,
          scale: 0.8
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.2)'
        },
        `+=0.5`
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])
  return (
    <section
      ref={containerRef}
      className='h-auto md:h-240 relative  -z-1 flex-col px-6 md:px-30 flex mb-20 md:mb-30'
    >
      <h2
        ref={box1}
        className='text-3xl md:text-4xl font-serif font-semibold w-full items-center flex justify-center mb-6 md:mb-9 pt-10 md:pt-0'
      >
        Gracecarthage Schedule
      </h2>

      <section className='h-full flex flex-col md:flex-row gap-10 md:gap-0'>
        <section className='w-full flex flex-col px-4 md:px-10 gap-6 md:gap-10 order-2 md:order-1'>
          {schedule.map(item => (
            <ul
              key={item.id}
              className='schedule-item border-l-4 md:border-l-7 rounded-xl hover:bg-[#f9ecea] cursor-pointer py-5 md:py-7 list-disc flex flex-col gap-4 md:gap-6 border-[#8f3337] pl-6 md:pl-10'
            >
              <li className='font-semibold text-base md:text-lg font-mono'>{item.header}</li>
              <li className='text-sm md:text-sm font-semibold'>{item.time1}</li>
              <li className='text-sm md:text-sm font-semibold'>{item.time2}</li>
              <li className='text-sm md:text-sm font-semibold'>{item.time3}</li>
            </ul>
          ))}
        </section>
        <section className='items-center md:items-end w-full flex justify-center order-1 md:order-2 mb-10 md:mb-0'>
          <div className='h-64 sm:h-80 md:h-140 w-[90%] md:w-[80%] relative bg-[#8f3337] rounded'>
            <img
              src={church6}
              className='h-full absolute -left-4 sm:-left-8 md:-left-40 -top-4 sm:-top-8 md:-top-30 w-full object-cover shadow-2xl'
              alt=''
            />
          </div>
        </section>
      </section>
      <div className='mt-10  h-40 w-full justify-center max-sm:justify-end items-center flex'>
        <Dots className={`h-full max-sm:gap-x-0 max-sm:text-gray-500 max-sm:gap-y-0`}  />
      </div>
    </section>
  )
}

const schedule = [
  {
    id: 1,
    header: 'Holy Eucharist Schedule',
    time1: '  Wednesdays: 6:00pm',
    time2: ' Friday: 10:00am',

    time3: '  Sundays: 8:00am (No Music) + 10:30am + 12:00pm (Spanish Service)'
  },
  {
    id: 2,
    header: ' Office Hours',
    time1: ' Monday: Closed',
    time2: ' Tuesday - Thursday 9:00am - 2pm and 1pm - 5pm',
    time3: ' Friday: 9am - 12pm'
  },
  {
    id: 3,
    header: ' Gift Shop Hours',
    time1: ' Tuesday: 9:00am - 1:00pm',
    time2: ' Thursdays: 1:00pm - 5:00pm',
    time3: ' Sunday: Morning'
  }
]
