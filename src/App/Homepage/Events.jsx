import event1 from '../../assets/img/event1.jpg'
import event2 from '../../assets/img/event2.jpg'
import event3 from '../../assets/img/event3.jpg'

export default function Events() {
  return (
    <section className='my-20 md:my-40 flex flex-col gap-8 md:gap-10 p-6 md:p-20'>
      <h1 className='text-3xl md:text-6xl font-bold text-center w-full'>Upcoming Events</h1>
      <ul className='grid grid-cols-1 md:flex w-full h-auto md:h-110 gap-8 md:gap-20 md:px-20'>
        {upcomingEvents.map(item => (
          <li
            className='border w-full border-gray-200 rounded-xl '
            key={item.id}
          >
            <div className='h-[60%] w-full'>
              <img
                src={item.image}
                className='h-full w-full rounded-t-xl object-cover'
                alt='event'
              />
            </div>
            <div className='px-6 md:px-10 grow mt-4 md:mt-6 pb-6 md:pb-0'>
              <div className='w-full text-[10px] md:text-xs flex justify-between items-center gap-4 md:gap-10'>
                <p className='rounded-4xl px-2 p-1 text-[#8e3635] font-semibold border border-[#8e3635]'>
                  {item.location}
                </p>
                <p>{item.date}</p>
              </div>

              <p className='text-base md:text-lg mt-4 md:mt-5 font-semibold font-sans leading-snug'>
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

const upcomingEvents = [
  {
    id: 1,
    title: 'Easter Sunday Celebration',
    date: 'April 20, 2025',
    time: '10:00 AM',
    description:
      'Celebrate the resurrection of Jesus with special music and an uplifting message.',
    location: 'Main Sanctuary',
    image: event2
  },
  {
    id: 2,
    title: 'Youth Game Night',
    date: 'April 12, 2025',
    time: '6:30 PM - 9:30 PM',
    description:
      'Teens and young adults, join us for food, games, and fun fellowship!',
    location: 'Youth Center',
    image: event1
  },
  {
    id: 3,
    title: 'Community Outreach',
    date: 'April 5, 2025',
    time: '9:00 AM - 1:00 PM',
    description:
      'Serving our neighborhood with food distribution and prayer. Volunteers welcome!',
    location: 'Church Parking Lot',
    image: event3
  }
]
