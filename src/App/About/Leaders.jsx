import leaders from '../../assets/img/about/leaders.jpg'
export default function Leaders() {
  return (
    <section className='w-full min-h-max md:h-160 flex flex-col md:flex-row mt-10 md:mt-30 mb-10 md:mb-30 px-6 md:px-10 gap-10 md:gap-0'>
      <section className='w-full rounded-2xl h-64 md:h-full'>
        <img src={leaders} className='w-full rounded-2xl h-full object-cover' alt="" />
      </section>
      <section className='flex flex-col w-full h-full gap-5 px-4 md:px-10'>
        <h2 className='text-lg md:text-xl font-light '> Our Leadership</h2>
        <h3 className='text-4xl md:text-7xl font-bold tracking-tight'>
          Louie + Shelley Giglio
        </h3>
        <p className='text-left font-medium tracking-normal md:tracking-widest leading-loose text-sm mt-4 md:mt-6 '>
          Louie is the Visionary Architect and Director of the Passion Movement,
          comprised of Passion Conferences, Passion City Church, Passion
          Publishing and sixstepsrecords, and the founder of Passion Global
          Institute. Shelley is the Chief Strategist, Director of Label
          Operations and Artist Management for sixstepsrecords, co-founder of
          the Passion Movement, and leads The GROVE, a gathering for the Women
          of Atlanta.
        </p>
        <button className='rounded-4xl cursor-pointer text-white font-semibold w-max self-center bg-[#8f3337] p-3 md:p-4 text-sm md:text-base mt-8 md:mt-12'>
          SEE OUR LEADERSHIP
        </button>
      </section>
    </section>
  )
}
