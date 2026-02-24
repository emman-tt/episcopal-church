import cross3 from '../../assets/img/cross3.svg'

export default function Epistle({ epistleRef }) {
  return (
    <section
      ref={epistleRef}
      className='absolute inset-0 h-screen w-full p-6 md:p-30 px-6 md:px-60 flex flex-col gap-10 md:gap-30 pt-10 md:pt-20 bg-white'
    >
      <div className='grid grid-cols-5 w-40 gap-10 gap-x-15 grid-rows-4'>
        {dots.map((item, i) => (
          <div
            key={i}
            className='inline-block bg-[#8e3635] rounded-full w-1 h-1'
          ></div>
        ))}
      </div>
      <div className='flex flex-col gap-8 p-16  relative items-center justify-center'>
        <div className='absolute left-0 top-0 w-1 h-15 bg-[#8e3635]'></div>
        <div className='absolute left-0 top-0 w-15 h-1 bg-[#8e3635]'></div>
        <div className='absolute right-0 top-0 w-15 h-1 bg-[#8e3635]'></div>
        <div className='absolute right-0 top-0 w-1 h-15 bg-[#8e3635]'></div>

        <div className='absolute left-0 bottom-0 w-1 h-15 bg-[#8e3635]'></div>
        <div className='absolute left-0 bottom-0 w-15 h-1 bg-[#8e3635]'></div>
        <div className='absolute right-0 bottom-0 w-15 h-1 bg-[#8e3635]'></div>
        <div className='absolute right-0 bottom-0 w-1 h-15 bg-[#8e3635]'></div>

        <div className='absolute -z-1 flex justify-center items-center inset-0'>
          <img
            color='green'
            width={170}
            height={200}
            className='object-cover opacity-10'
            src={cross3}
            alt='external-cross-easter-day-justicon-lineal-justicon'
          />
        </div>

        <h2 className='text-2xl md:text-5xl text-center font-bold leading-tight'>
          Grace Church is the oldest Episcopal parish in the four states area.
        </h2>
        <p className='text-center text-sm md:text-lg w-full md:w-[70%]'>
          Rooted in worship of the Risen Christ, we draw our understanding of
          His commandment to love one another from Holy Scripture, reason and
          tradition-and we encourage our membership actively to seek a deeper
          personal relationship with Christ, a relationship founded in love of
          God.
        </p>
      </div>
    </section>
  )
}

const dots = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
