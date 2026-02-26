import { MenuIcon, X } from 'lucide-react'
import { gsap, SplitText } from '../../libs/gsap'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavi } from '../context/navigation'
export default function Header ({ textColor = 'white', className = '' }) {
  const { toggleNav, showNav } = useNavi()

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

  useEffect(() => {
    const navArray = gsap.utils.toArray('.nav')

    const masterTL = gsap.timeline()

    navArray.forEach((text, index) => {
      const splitForm = new SplitText(text, {
        type: 'words,chars,lines'
      })

      const navTL = gsap.timeline()

      navTL.from(splitForm.lines, {
        x: 30,
        opacity: 0,
        duration: 0.3,
        ease: 'none',
        stagger: {
          from: 'start'
        }
      })

      masterTL.add(navTL, index > 0 ? '-=0.2' : '+=0')
    })

    return () => {
      masterTL.kill()
    }
  }, [showNav])

  return (
    <section
      className={`w-full flex justify-between  p-6 px-6 md:p-10 md:px-15  items-center text-${textColor} ${className}`}
    >
      <header className='flex items-center'>
        <div className='h-full w-12 md:w-20'>
          <img loading="lazy"
            src={
              'https://res.cloudinary.com/drpnhajh9/image/upload/v1772140081/cross_kog8kg.png'
            }
            alt='cross'
          />
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
        <div
          className={`rounded-full sm:hidden  ${
            showNav ? 'fixed right-8' : 'relative'
          } z-20 p-3 md:p-4 bg-[#8e3635] text-white cursor-pointe`}
        >
          {showNav ? (
            <X
              size={20}
              className='h-full w-full'
              onClick={() => {
                toggleNav(false)
              }}
            />
          ) : (
            <MenuIcon
              className='h-full w-full'
              onClick={() => {
                toggleNav(true)
              }}
              size={20}
            />
          )}
        </div>
      </nav>

      {/* mobile nav */}

      {showNav && (
        <section className='bg-white w-full sm:hidden h-screen  pt-30 px-5 items-center z-10 overflow-hidden flex flex-col gap-5 fixed inset-0'>
          {nav.map(item => (
            <NavLink
              key={item.id}
              to={item.href}
              onClick={() => {
                toggleNav(false)
              }}
              className='  nav  text-black font-semibold font-mono text-2xl'
            >
              {item.name}
            </NavLink>
          ))}
        </section>
      )}
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
