export default function Bio () {
  return (
    <section className='w-full min-h-max md:h-140 flex flex-col md:flex-row px-6 md:px-10 mb-20 md:mb-80 gap-10 md:gap-0'>
      <section className='flex flex-col w-full h-full px-4 md:px-10'>
        <h2 className='font-extrabold text-4xl md:text-[4em] mb-4'>About US</h2>
        <h3 className='text-3xl md:text-7xl font-extralight leading-tight italic'>
          Glory of God. Radical Grace. Extravagant Worship.
        </h3>
        <p className='text-base md:text-lg font-medium tracking-wider leading-loose mt-4 '>
          We are a Jesus Church. A small tribe of His followers connected by our
          common faith and a deep desire to see our city [and the world] come to
          know His power and beauty. We are not perfect. But Jesus Is.
          Thankfully, we are a Jesus Church.
        </p>
      </section>

      <section className='w-full rounded-2xl h-64 md:h-full'>
        <img
          src={
            'https://res.cloudinary.com/drpnhajh9/image/upload/v1772138422/about_ouryy8.jpg'
          }
          className='w-full h-full object-cover rounded-2xl'
          alt='about'
        />
      </section>
    </section>
  )
}
