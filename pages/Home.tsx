import React from 'react'
import HomeNav from './Components/HomeNav'

function Home() {
  return (
    <div className="bg-[#090022] min-h-screen ">
        <HomeNav />
        <div className='py-16'>
            <p className='text-center text-3xl font-bold text-white'>Choose Your Role</p>
            <div className='bg-[#1C1D2E] rounded-xl mx-96'>
                <div className='flex rounded-lg my-10  flex-col space-y-10 py-20 mx-40'>
                    <div className='flex flex-col '>
                   <span className='px-6'> <label className='text-white absolute  top-[295px]  bg-[#1C1D2E] px-2 font-semibold' >Name</label></span>
                    <input className='h-10 text-white rounded-lg bg-transparent border border-gray-300 border-opacity-90 px-2' type="text" />
                    </div>
                    <div className='flex flex-col'>
                    <span className='px-6'> <label className='text-white absolute  top-[375px] bg-[#1C1D2E] font-semibold px-2' >Email</label></span>
                    <input className='h-10 text-white rounded-lg bg-transparent border border-gray-300 border-opacity-90  px-2' type="email"/>
                    
                    </div>
                    <button className="bg-[#FF6B00] px-3 py-2 rounded-lg text-white font-semibold text-xl">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home