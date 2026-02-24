import { ArrowRight } from 'lucide-react'
import { Logo } from '../../components/Logo'
import x from '../../assets/img/icons/x.svg'
import facebook from '../../assets/img/icons/facebook.svg'
import github from '../../assets/img/icons/github.svg'
export default function Footer() {
  return (
    <section className='flex flex-col p-6 md:p-30 pb-10 min-h-max md:min-h-120 mt-20 md:mt-30 bg-black text-white'>
      <header className='flex flex-col md:flex-row w-full items-start md:items-center justify-between gap-10'>
        <div className='flex flex-col md:flex-row gap-6 w-full md:w-[80%]'>
          <Logo />
          <p className='text-sm md:text-base opacity-80 leading-relaxed'>
            Grace Community Church is more than just a building—we're a family.
            For over two decades, we've been a place where faith meets real
            life, where questions are welcomed, and where everyone belongs
            regardless of where they are on their spiritual journey. We believe
            that church should feel like home. That's why you'll find authentic
            people here—not perfect people, just real ones walking out their
            faith together. Whether you're exploring faith for the first time,
            returning after a long time away, or have followed Jesus your whole
            life, there's a place for you here.
          </p>
        </div>
        <button className='rounded-4xl cursor-pointer text-white font-semibold bg-[#8f3337] p-3 md:p-4 w-full md:w-auto text-sm'>
          DONATE NOW
        </button>
      </header>

      <main className='mt-12 md:mt-20'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:flex w-full justify-between gap-10 md:gap-20'>
          <li className='flex flex-col gap-4 text-xs md:text-sm'>
            <h3 className='text-lg md:text-xl font-semibold'>Quick Links</h3>
            <p className='cursor-pointer hover:text-[#8f3337]'>Home</p>
            <p className='cursor-pointer hover:text-[#8f3337]'>Congregation</p>
            <p className='cursor-pointer hover:text-[#8f3337]'>Gallery</p>
            <p className='cursor-pointer hover:text-[#8f3337]'>Contact</p>
          </li>
          <li className='flex gap-4 flex-col text-xs md:text-sm'>
            <h3 className='text-lg md:text-xl font-semibold'>Contact Us</h3>
            <div className='leading-6'>
              <p className='text-gray-500 mb-1'>Location</p>
              <p> 6391 Elgin St. Celina Delaware 10299 </p>
            </div>
            <div className='leading-6'>
              <p className='text-gray-500 mb-1'> Mobile </p>
              <p> (307) 555-0133 </p>
            </div>
            <div className='leading-6'>
              <p className='text-gray-500 mb-1'>Email </p>
              <p>info@grace.com </p>
            </div>
          </li>
          <li className='flex flex-col w-full md:w-[40%] col-span-1 sm:col-span-2 md:col-span-1 border-t border-gray-800 md:border-t-0 pt-10 md:pt-0'>
            <h3 className='text-2xl md:text-3xl font-semibold'>Newsletter Signup</h3>
            <div className='py-4 md:py-5 mt-2 md:mt-3 justify-between w-full flex gap-5 border-b border-gray-700'>
              <input
                type='text'
                className='h-full w-full outline-0 text-sm md:text-base'
                placeholder='Enter your email address'
              />
              <ArrowRight color='#8f3337' className='cursor-pointer' />
            </div>
            <p className='mt-4 md:mt-5 text-sm opacity-80 leading-relaxed'>
              At our core, we're about three things: loving God, loving people,
              and making a difference. We worship with joy, study Scripture with
              curiosity, and serve our community with generosity.
            </p>
          </li>
        </ul>
      </main>

      <article className='w-full flex flex-col md:flex-row text-[10px] md:text-xs border-t-gray-800 pt-8 border-t justify-between items-center mt-10 gap-6 md:gap-0'>
        <p className='text-center md:text-left'>Copyright @ 2025 Gracecarthage. All rights reserved.</p>
        <p className='text-center md:text-left'>Built by Emmanuel Acquah at ReyoTechLabs</p>
        <div className='flex gap-8 md:gap-10 cursor-pointer text-white'>
          <img src={x} className='h-4 w-4 md:h-5 md:w-5' alt='x' />
          <img src={github} className='h-4 w-4 md:h-5 md:w-5' alt='github' />
          <img src={facebook} className='h-4 w-4 md:h-5 md:w-5' alt='facebook' />
        </div>
      </article>
    </section>
  )
}
