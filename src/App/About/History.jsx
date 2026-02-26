import history from '../../assets/img/about/history.jpg'
export default function History() {
  return (
    <section className='w-full min-h-max md:h-220 flex flex-col md:flex-row px-6 md:px-10 mb-20 md:mb-80 gap-10 md:gap-0'>
      <section className='flex flex-col w-full h-full'>
        <h2 className='font-extrabold text-4xl md:text-[4em] mb-4'> Our History</h2>
        <h3 className='text-3xl md:text-7xl tracking-tight'>
          We are For God. For people. For the city. For the world.
        </h3>
        <p className='text-left md:text-right font-medium px-4 md:px-20 tracking-wider leading-loose text-sm mt-6 '>
          Passion City Church began with a stirring in the hearts of Louie and
          Shelley Giglio for the local church. Born out of the Passion Movement
          a decades-old movement among the collegiate generation, they sought to
          plant a local community of faith impacted and informed by the DNA of
          Passion. With a small team of people, that vision took flight in 2008,
          as small gatherings began in homes throughout Atlanta. The desire was
          to foster a family of believers connected by a common faith, on
          mission in the city and the world to amplify the name of Jesus. And
          that's exactly what happened. Our first gathering was held on February
          15, 2009, in Atlanta at The Tabernacle. From there, God faithfully
          provided, as our little tribe met at various locations all over the
          city of Atlanta until we landed in our first permanent gathering site
          at 515 Garson Drive.
        </p>
      </section>

      <section className='w-full h-64 md:h-full'>
        <img
          src={history}
          className='w-full rounded-2xl h-full object-cover'
          alt=''
        />
      </section>
    </section>
  )
}
