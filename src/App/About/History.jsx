
export default function History() {
  return (
    <section className='w-full min-h-max md:h-220 flex flex-col md:flex-row px-6 md:px-10 mb-20 md:mb-80 gap-10 md:gap-0'>
      <section className='flex flex-col w-full h-full'>
        <h2 className='font-extrabold text-4xl md:text-[4em] mb-4'> Our History</h2>
        <h3 className='text-3xl md:text-7xl tracking-tight'>
          We are For God. For people. For the city. For the world.
        </h3>
        <p className='text-left md:text-right font-medium px-4 md:px-20 tracking-wider leading-loose text-sm mt-6 '>
          Grace Episcopal Church began as a small mission group with a profound
          vision: to establish a community dedicated to bringing the inclusive,
          transformative love of Christ to our city through the beauty of
          liturgy and selfless service. Rooted in the rich, historic tradition
          of the Anglican communion, our community has grown into a vibrant
          family of faith, deeply informed by a commitment to social justice,
          spiritual depth, and the shared wisdom found in the Book of Common
          Prayer. Since our founding, we have sought to foster a sanctuary where
          all are welcome—a space to wrestle with faith, find peace in the
          sacraments, and experience the real power of God's grace in everyday
          life. Our journey has been one of consistent faithfulness and
          community impact, evolving from humble gatherings in local homes to
          the welcoming home we share today. Through every season, our focus
          has remained unwavering: to be a pillar of hope, a voice for the
          marginalized, and a beacon of Christ's love in the very heart of our
          growing city. We don't just exist for ourselves; we exist to see our
          neighbors flourish and our world restored through radical hospitality
          and active service.
        </p>
      </section>

      <section className='w-full h-64 md:h-full'>
        <img
          src={'https://res.cloudinary.com/drpnhajh9/image/upload/v1772138433/history_aps6tv.jpg'}
          className='w-full rounded-2xl h-full object-cover'
          alt=''
        />
      </section>
    </section>
  )
}
