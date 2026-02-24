import cross from '../assets/img/cross.png'

export function Logo () {
  return (
    <header className='flex items-center'>
      <div className='h-full w-20'>
        <img src={cross} alt='cross' />
      </div>
      <div className='flex flex-col'>
        <h1 className='text-3xl font-light font-serif'>Grace</h1>
        <p className='text-xs text-gray-400'>Episcopal Church</p>
      </div>
    </header>
  )
}
