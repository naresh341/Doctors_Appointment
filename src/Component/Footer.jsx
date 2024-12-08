import React from 'react'
import { assets } from '../assets/front/assets'

const Footer = () => {
  return (
    <>
    <div className='md:mx-10 caret-transparent'>
        <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left */}
            <div>
                <img className='mb-5 w-40v' src={assets.logo} alt="logo" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            {/* center */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
                </ul>
            </div>
            {/* right */}
            <div>
                <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Phone: +91 8452899647</li>
                    <li>bhati.naresh43@gamil.com</li>
                </ul>
            </div>
        </div>
            {/* --------- Copy Right------------- */}
        <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright © 2024 Prescipto- All Right Reserved.</p>
        </div>
    </div>
    </>
  )
}

export default Footer