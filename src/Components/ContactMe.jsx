import React from 'react'
import { Link } from 'react-router-dom'


const ContactMe = () => {
  return (
    <div className='flex flex-col items-center gap-16 mb-16'>
      <div className='text-2xl text-amber-500 font-extrabold'>CONTACT ME</div>
      <div className='flex gap-16  max-md:flex-col'>

        <div className='flex flex-col gap-2 items-center max-md:gap-4'>
          <div className='uppercase text-center text-amber-400 font-semibold text-lg'>Email</div>
          <div>keimux21@gmail.com</div>
        </div>

        <div className='flex flex-col gap-2  items-center max-md:gap-4'>
          <div className='uppercase text-center text-amber-400 font-semibold text-lg'>LinkedIn</div>
          <Link target="_blank" className="flex gap-2.5 whitespace-nowrap  hover:text-amber-700" to="https://www.linkedin.com/in/keithemulu/">
            www.linkedin.com/in/keithemulu
          </Link>
        </div>

        <div className='flex flex-col gap-2 items-center max-md:gap-4'>
          <div className='uppercase text-center text-amber-400 font-semibold text-lg'>PhoneNumber</div>
          <div className='flex flex-col gap-1 max-md:gap-4'>
            <div className='flex'>
              <div>+256</div>
              <div>776796152</div>
            </div>
            <div className='flex'>
              <div>+256</div>
              <div>751760929</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactMe
