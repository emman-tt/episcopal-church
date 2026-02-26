import Header from '../App/Homepage/Header'
import VerseAccordion from '../App/Versespage/Accordion'
export default function Versespage () {
  return (
    <section className='min-h-screen pt-0 py-10 md:py-0'>
      <Header textColor='black' />
      <h2 className='font-light font-serif text-2xl md:text-4xl w-full items-center flex justify-center px-6 text-center mt-6 md:mt-0'>
        Today's Verses For Your Soul
      </h2>
      <VerseAccordion />
    </section>
  )
}
