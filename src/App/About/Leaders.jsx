
export default function Leaders() {
  return (
    <section className='w-full min-h-max md:h-160 flex flex-col md:flex-row mt-10 md:mt-30 mb-10 md:mb-30 px-6 md:px-10 gap-10 md:gap-0'>
      <section className='w-full rounded-2xl h-64 md:h-full'>
        <img loading="lazy" src={'https://res.cloudinary.com/drpnhajh9/image/upload/v1772138428/leaders_h8gei8.jpg'} className='w-full rounded-2xl h-full object-cover' alt="" />
      </section>
      <section className='flex flex-col w-full h-full gap-5 px-4 md:px-10'>
        <h2 className='text-lg md:text-xl font-light '> Our Leadership</h2>
        <h3 className='text-4xl md:text-7xl font-bold tracking-tight'>
          Clergy & Vestry
        </h3>
        <p className='text-left font-medium tracking-normal md:tracking-widest leading-loose text-sm mt-4 md:mt-6 '>
          Our church is led by the Rector together with the Vestry, a dedicated
          group of lay members elected by the congregation to serve as stewards
          of our mission and resources. Following the rich Episcopal tradition
          of shared governance, our leadership works in a collaborative
          partnership to facilitate the spiritual growth of our members, oversee
          our diverse ministries, and ensure that our parish remains a vibrant
          and inclusive place of worship. From our clergy, who provide spiritual
          guidance and sacramental leadership, to our wardens and vestry
          members, who manage the temporal affairs of the church, every leader
          is committed to transparent, prayerful, and inclusive governance. We
          believe that leadership is a call to service, and we strive to lead
          with humility, listening for the movement of the Holy Spirit in our
          midst as we seek to follow Christ in the way of love and work for the
          betterment of our community.
        </p>
        <button className='rounded-4xl cursor-pointer text-white font-semibold w-max self-center bg-[#8f3337] p-3 md:p-4 text-sm md:text-base mt-8 md:mt-12'>
          SEE OUR LEADERSHIP
        </button>
      </section>
    </section>
  )
}
