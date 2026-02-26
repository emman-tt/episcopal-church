import belief from '../../assets/img/about/belief.jpg'
export default function Belief() {
  return (
    <section className='min-h-max md:h-140 flex flex-col md:flex-row px-6 md:px-10 mb-20 md:mb-80 gap-10 md:gap-0'>
      <section className='w-full h-64 md:h-full'>
        <img src={belief} className='w-full rounded-2xl h-full object-cover' alt='' />
      </section>

      <section className='flex flex-col gap-6 md:gap-10 h-full w-full justify-center items-center py-10 md:py-0'>
        <h2 className='text-sm md:text-md font-light font-mono'>
          Our Theological Truths
        </h2>

        <p className='text-4xl md:text-7xl font-bold'>What We Believe</p>
        <p className='px-4 md:px-10 text-center text-sm md:text-base'>
          We live in shifting times but are rooted in eternal truths, the
          teachings of Holy Scripture. Here at Passion City Church we are guided
          by certain foundational beliefs and shaping values.
        </p>

        <button className='rounded-4xl cursor-pointer text-white font-semibold bg-[#8f3337] p-3 md:p-4 text-sm md:text-base'>
          LEARN MORE
        </button>
      </section>
    </section>
  )
}
