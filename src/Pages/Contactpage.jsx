import Header from '../App/Homepage/Header'
import Form from '../App/Contact/Form'
import Info from '../App/Contact/Info'

export default function Contactpage () {
  return (
    <section className='min-h-screen bg-white'>
      <Header textColor='black' />
      <main className='max-w-7xl mx-auto px-6 md:px-10 py-16  pt-0 md:pt-0 md:py-24'>
        <div className='flex flex-col lg:flex-row gap-16 items-start'>
          <div className='w-full lg:w-1/2 order-2 lg:order-1'>
            <Form />
          </div>
          <div className='w-full lg:w-1/2 order-1 lg:order-2'>
            <Info />
          </div>
        </div>
      </main>
    </section>
  )
}
