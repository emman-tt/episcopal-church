export default function Bio() {
  return (
    <section className='w-full min-h-max md:h-140 flex flex-col md:flex-row px-6 md:px-10 mb-20 md:mb-80 gap-10 md:gap-0'>
      <section className='flex flex-col w-full h-full px-4 md:px-10'>
        <h2 className='font-extrabold text-4xl md:text-[4em] mb-4'>About US</h2>
        <h3 className='text-3xl md:text-7xl font-extralight leading-tight italic'>
          Glory of God. Radical Grace. Extravagant Worship.
        </h3>
        <p className='text-base md:text-lg font-medium tracking-wider leading-loose mt-4 '>
          We are a liturgical community deeply rooted in the historic tradition
          of the Episcopal Church, yet ever-evolving to meet the needs of our
          modern world. We are a diverse tribe of followers connected by our
          common faith in Jesus Christ, guided by the beauty and spiritual
          depth of the Book of Common Prayer. Our community is built on a
          foundation of radical hospitality, where questions are welcomed,
          doubts are honored, and everyone—regardless of their background or
          journey—is invited to the table. We strive to be a people of radical
          grace, seeking to follow Jesus in the way of love, and working
          together toward the restoration of all people to unity with God and
          one another. We are not perfect. But Jesus is. Thankfully, we find our
          strength and our home in His extravagant and transformative love.
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
