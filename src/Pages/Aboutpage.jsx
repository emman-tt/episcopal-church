import Bio from '../App/About/Bio'
import Header from '../App/Homepage/Header'
import Belief from '../App/About/Belief'
import History from '../App/About/History'
import Leaders from '../App/About/Leaders'
import Footer from '../App/Homepage/Footer'
export default function Aboutpage() {
  return (
    <main className=''>
      <Header textColor='black' />
      <Bio />
      <Belief />
      <History />
      <Leaders />
      <Footer />
    </main>
  )
}
