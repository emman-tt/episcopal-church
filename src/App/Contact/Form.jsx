import { MessageSquare } from 'lucide-react'

export default function Form () {
  return (
    <section className='bg-[#f8f8f8] p-8 md:p-12 rounded-lg w-full max-w-2xl'>
      <div className='flex items-center gap-2 mb-6'>
        <MessageSquare className='text-[#8e3635]' size={20} />
        <h2 className='text-xl font-bold text-gray-900'>Leave a message</h2>
      </div>

      <form className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className='flex flex-col gap-1'>
          <input
            type='text'
            placeholder='Name'
            className='w-full p-3 rounded-md border-none bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8e3635]'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <input
            type='email'
            placeholder='Email'
            className='w-full p-3 rounded-md border-none bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8e3635]'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <input
            type='text'
            placeholder='Subject'
            className='w-full p-3 rounded-md border-none bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8e3635]'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <input
            type='text'
            placeholder='Phone'
            className='w-full p-3 rounded-md border-none bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8e3635]'
          />
        </div>
        <div className='md:col-span-2 flex flex-col gap-1'>
          <textarea
            placeholder='Comment'
            rows={5}
            className='w-full p-3 rounded-md border-none bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8e3635] resize-none'
          />
        </div>
        <div className='md:col-span-2 mt-2'>
          <button
            type='submit'
            className='bg-[#8e3635] cursor-pointer hover:bg-[#b01c1c] text-white font-bold py-3 px-6 text-sm rounded-md transition-colors duration-300'
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  )
}
