import { MenuIcon } from 'lucide-react'
import cross from '../../assets/img/cross.png'
import { gsap } from '../../libs/gsap'
import { useEffect, useRef } from 'react'
export default function Header() {
  useEffect(() => {
    gsap.fromTo(
      '.nav-item',
      {
        y: 70,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      }
    )
  }, [])

  return (
    <section className='w-full flex justify-between text-white p-6 px-6 md:p-10 md:px-15 items-center'>
      <header className='flex items-center'>
        <div className='h-full w-12 md:w-20'>
          <img src={cross} alt='cross' />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-2xl md:text-3xl font-light font-serif'>Grace</h1>
          <p className='text-[10px] md:text-xs text-gray-400'>Episcopal Church</p>
        </div>
      </header>

      <nav className='flex h-full items-center justify-end md:justify-between w-auto md:w-[60%]'>
        <div className='hidden md:flex gap-6 lg:gap-10'>
          {nav.map(item => (
            <div
              className='nav-item 
            text-[14px] font-semibold whitespace-nowrap'
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
        <div className='rounded-full p-3 md:p-4 bg-[#8e3635] text-white cursor-pointer'>
          <MenuIcon size={20} />
        </div>
      </nav>
    </section>
  )
}

const nav = [
  'Worship',
  'Our Community',
  'Grow',
  'Serve',
  'About',
  'Contact',
  'Arts & Architecture'
]
