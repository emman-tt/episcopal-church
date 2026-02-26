import { MenuIcon } from 'lucide-react'
import cross from '../../assets/img/cross.png'
import { gsap } from '../../libs/gsap'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
export default function Header ({ textColor = 'white', className = '' }) {
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
    <section
      className={`w-full flex justify-between  p-6 px-6 md:p-10 md:px-15  items-center text-${textColor} ${className}`}
    >
      <header className='flex items-center'>
        <div className='h-full w-12 md:w-20'>
          <img src={cross} alt='cross' />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-2xl md:text-3xl font-light font-serif'>Grace</h1>
          <p className='text-[10px] md:text-xs text-gray-400'>
            Episcopal Church
          </p>
        </div>
      </header>

      <nav className='flex h-full items-center justify-end  md:justify-between w-auto '>
        <div className='hidden md:flex gap-6 lg:gap-10'>
          {nav.map(item => (
            <NavLink
              to={item.href}
              className='nav-item 
            text-[14px] font-semibold  whitespace-nowrap'
              key={item.id}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className='rounded-full sm:hidden p-3 md:p-4 bg-[#8e3635] text-white cursor-pointer'>
          <MenuIcon size={20} />
        </div>
      </nav>
    </section>
  )
}

const nav = [
  {
    id: 8,
    name: 'Home',
    href: '/'
  },
  {
    id: 1,
    name: "Today's verses",
    href: '/verses'
  },
  {
    id: 2,
    name: 'Our Community',
    href: '/community'
  },
  {
    id: 4,
    name: 'Serve',
    href: '/serve'
  },
  {
    id: 5,
    name: 'About',
    href: '/about'
  },
  {
    id: 6,
    name: 'Contact',
    href: '/contact'
  },
  {
    id: 7,
    name: 'Arts & Media',
    href: '/arts'
  }
]
