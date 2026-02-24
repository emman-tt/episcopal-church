import { QuoteIcon } from 'lucide-react'

export default function Testimonial() {
  return (
    <section className='bg-black p-6 md:p-30 h-max flex items-center gap-10 md:gap-20 flex-col'>
      <h2 className='text-white font-bold text-2xl md:text-4xl'>Our Testimonials</h2>
      <ul className='grid grid-cols-1 md:flex w-full h-auto md:h-80 gap-8 md:gap-20'>
        {testimonials.map(item => (
          <li key={item.id} className='w-full p-6 md:p-10 rounded-2xl bg-white justify-between h-full flex flex-col gap-6 md:gap-0'>
            <QuoteIcon color='#913337' size={24} md:size={30} />
            <p className='text-sm md:text-base italic md:pb-5'>"{item.text}"</p>
            <div className='w-full border-t-2 items-center gap-4 h-auto md:h-20 border-t-gray-400 flex pt-4 md:pt-0'>
              <div className='border rounded-full items-center py-5 md:py-7 px-5 md:px-7 flex bg-gray-100'></div>
              <div className='h-full flex justify-center text-left flex-col'>
                <p className='text-base md:text-lg font-semibold'>{item.name}</p>
                <p className='text-xs md:text-sm text-gray-500'>{item.status}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

const testimonials = [
  {
    id: 1,
    text: "This church became my family when I had none. The love and support I've received here healed wounds I didn't think could be healed. Every Sunday feels like coming home.",
    name: 'Margaret Okonkwo',
    status: 'Retired Teacher & Choir Member'
  },
  {
    id: 2,
    text: 'I found purpose here. The mentorship and guidance helped me grow not just spiritually, but in my career and relationships. God is truly at work in this place.',
    name: 'Michael Adebayo',
    status: 'Youth Leader & Business Owner'
  },
  {
    id: 3,
    text: "My children love coming to Sunday school! The atmosphere is so welcoming and the teachings are solid. We've grown so much as a family since joining.",
    name: 'Sarah Okafor',
    status: 'Mother of Three & Volunteer'
  }
]
