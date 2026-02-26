export default function Loader ({ classname }) {
  return (
    <section className={`${classname}`}>
      <div className='absolute inset-0 flex items-center justify-center bg-black/80 z-40 '>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8f3337]'></div>
      </div>
    </section>
  )
}
