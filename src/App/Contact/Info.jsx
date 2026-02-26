import { MapPin, Mail, Phone, Clock } from 'lucide-react'

export default function Info () {
  return (
    <section className='w-full max-w-2xl px-4 md:px-8'>
      <div className='flex items-center gap-3 mb-3'>
        <div className='w-8 h-0.5 bg-[#8e3635]'></div>
        <span className='text-[#8e3635] font-bold tracking-widest text-[10px] md:text-xs'>
          GET IN TOUCH
        </span>
      </div>

      <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight'>
        Visit our Church & <br /> contact us today
      </h2>

      <p className='text-gray-500 text-sm mb-10 leading-relaxed max-w-xl'>
        We are a Jesus Church. A small tribe of His followers connected by our
        common faith and a deep desire to see our city and the world come to
        know His power and beauty.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
       
        <div className='flex flex-col gap-4'>
          <h3 className='text-lg font-bold text-gray-900'>Main Campus</h3>
          <div className='flex flex-col gap-3 text-gray-600 text-sm'>
            <div className='flex items-start gap-4'>
              <MapPin className='text-[#8e3635] shrink-0 mt-1' size={16} />
              <p>71890 Champlin Neck, New York</p>
            </div>
            <div className='flex items-center gap-4'>
              <Mail className='text-[#8e3635] shrink-0' size={16} />
              <p>support@grace-episcopal.com</p>
            </div>
            <div className='flex items-center gap-4'>
              <Phone className='text-[#8e3635] shrink-0' size={16} />
              <p>(+62) 81 322 1467</p>
            </div>
            <div className='flex items-center gap-4'>
              <Clock className='text-[#8e3635] shrink-0' size={16} />
              <p>09:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className='text-lg font-bold text-gray-900'>West Wing</h3>
          <div className='flex flex-col gap-3 text-gray-600 text-sm'>
            <div className='flex items-start gap-4'>
              <MapPin className='text-[#8e3635] shrink-0 mt-1' size={16} />
              <p>71890 Champlin Neck, Texas</p>
            </div>
            <div className='flex items-center gap-4'>
              <Mail className='text-[#8e3635] shrink-0' size={16} />
              <p>info@grace-episcopal.com</p>
            </div>
            <div className='flex items-center gap-4'>
              <Phone className='text-[#8e3635] shrink-0' size={16} />
              <p>(+62) 81 322 1467</p>
            </div>
            <div className='flex items-center gap-4'>
              <Clock className='text-[#8e3635] shrink-0' size={16} />
              <p>09:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
