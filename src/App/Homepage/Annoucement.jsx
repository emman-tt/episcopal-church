import { Dot } from 'lucide-react'

export default function Announcement ({ annouceRef }) {
  return (
    <section
      ref={annouceRef}
      className='absolute inset-0
    w-full flex h-screen p-12 mt-30 max-sm:flex-col px-20 max-sm:p-6 bg-white'
    >
      <section className='w-full flex flex-col  md:flex-row h-full items-center md:items-end gap-10 md:gap-0'>
        <div className='h-64 sm:h-80 md:h-110 relative w-full md:w-80 bg-[#8e3635] flex justify-center items-center'>
          <div className='absolute -top-10 md:-top-40 right-0 md:-right-60 w-full md:w-80 h-48 sm:h-64 md:h-90 z-1'>
            <img loading="lazy"
              src={'https://res.cloudinary.com/drpnhajh9/image/upload/v1772140071/church2_xoqp0z.jpg'}
              alt=''
              className='h-full w-full object-cover shadow-lg'
            />
          </div>
          <div className='w-[90%] md:w-120 relative z-2 shadow-xl translate-x-0 md:translate-x-40 h-auto md:h-[70%] p-4 md:p-6 bg-white mt-40 md:mt-0'>
            <div className='h-full  w-full border py-6 md:pt-10 items-center justify-center flex flex-col border-[#8e3635]'>
              <p className='text-[10px] md:text-sm font-mono flex items-center justify-center'>
                <Dot color='#8e3635' />
                GRACE CARTHAGE
                <Dot color='#8e3635' />
              </p>
              <p className='flex flex-col w-full h-full gap-3 md:gap-5 text-center px-4'>
                <span className='text-xl md:text-3xl font-semibold'>
                  {' '}
                  Announcements
                </span>
                <span className='text-xs md:text-base'>
                  Women's Retreat, call the Office or Beth Kang for more
                  information Women's Retreat, call the Office
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col  gap-4 md:gap-7 h-full w-full mt-10 md:mt-0 md:pr-10'>
        {announcements.map(item => (
          <div
            key={item}
            className='flex gap-4 md:gap-6 items-center border-b border-b-gray-300 pb-4 md:pb-5'
          >
            <div className='min-w-17.5 md:w-[20%] px-2 py-4 md:px-3 md:py-6 rounded-full border border-[#8e3635] flex flex-col items-center text-xs md:text-md font-bold cursor-pointer hover:bg-[#8e3635] hover:text-white transition-colors'>
              <span>{item.month} </span>
              <span>{item.day}</span>
            </div>

            <div className='text-xs md:text-sm'>{item.description}</div>
          </div>
        ))}
      </section>
    </section>
  )
}

const announcements = [
  {
    id: 1,
    month: 'Mar',
    day: '16',
    title: 'Spring Potluck Fellowship',
    description:
      'Join us after service for our monthly potluck. Bring your favorite dish to share and enjoy fellowship with church family.',
    location: 'Fellowship Hall',
    time: 'Immediately after service'
  },
  {
    id: 2,
    month: 'Mar',
    day: ' 23',
    title: 'Baptism Sunday',
    description:
      "If you're interested in being baptized or would like to learn more about what baptism means at Grace Church, please contact Pastor Michael.",
    location: 'Main Sanctuary',
    time: 'During 10:30am service'
  },
  {
    id: 3,
    month: 'Mar',
    day: ' 30',
    title: "Women's Breakfast Gathering",
    description:
      'All women are invited for a morning of prayer, encouragement, and connection. Light breakfast will be provided.',
    location: 'Church Parlor',
    time: '9:00am - 11:00am'
  },
  {
    id: 4,
    month: 'Apr',
    day: ' 06',
    title: 'Palm Sunday Procession',
    description:
      "Help us kick off Holy Week! We'll gather in the courtyard for palm branches and a procession into the sanctuary.",
    location: 'Courtyard',
    time: '10:15am'
  }
]
