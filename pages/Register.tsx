import React from 'react'
import Navbar from './Components/Navbar'

function Register() {
  return (
    <div className="bg-[#090022] min-h-screen ">
        <Navbar />
        <div className='py-20'>
            <p className='text-center text-3xl font-bold text-white'>Registration</p>
            <div className='bg-[#1C1D2E] mx-80'>
                <div className='flex rounded-lg my-10 flex-col space-y-7 py-16 mx-20'>
                    <input type="email" placeholder="Email"/>
                    <input type="email" placeholder="Email"/>
                    <button className="bg-[#FF6B00] px-3 py-2 rounded-lg text-white font-semibold text-xl">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register