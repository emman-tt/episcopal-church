
export default function Belief() {
  return (
    <section className='min-h-max md:h-140 flex flex-col md:flex-row px-6 md:px-10 mb-20 md:mb-80 gap-10 md:gap-0'>
      <section className='w-full h-64 md:h-full'>
        <img loading="lazy" src={'https://res.cloudinary.com/drpnhajh9/image/upload/v1772138422/belief_mtsz73.jpg'} className='w-full rounded-2xl h-full object-cover' alt='' />
      </section>

      <section className='flex flex-col gap-6 md:gap-10 h-full w-full justify-center items-center py-10 md:py-0'>
        <h2 className='text-sm md:text-md font-light font-mono'>
          Our Episcopal Foundation
        </h2>

        <p className='text-4xl md:text-7xl font-bold'>What We Believe</p>
        <p className='px-4 md:px-10 text-center text-sm md:text-base'>
          We are guided by the "three-legged stool" of Scripture, Tradition,
          and Reason—three interdependent sources of authority that allow us to
          journey together in faith while honoring the intellect and the wisdom
          of the ages. We find our primary unity not in a list of strict
          dogmas, but in the historic Creeds (the Apostles' and the Nicene) and
          the liturgical life we share through the Book of Common Prayer. We
          center our life on the Sacraments, particularly the Holy Eucharist,
          where we experience the real presence of Christ and are nurtured for
          our mission in the world. Our faith is one that seeks understanding,
          embracing the mystery of God while staying committed to the work of
          justice, compassion, and reconciliation in our community and beyond.
        </p>

        <button className='rounded-4xl cursor-pointer text-white font-semibold bg-[#8f3337] p-3 md:p-4 text-sm md:text-base'>
          LEARN MORE
        </button>
      </section>
    </section>
  )
}
