import React from 'react'
import HomeNav from './Components/HomeNav'

function Home() {
  return (
    <div className="bg-[#090022] min-h-screen ">
        <HomeNav />
        <div className='py-16'>
            <p className='text-center text-4xl font-bold text-white'>Choose Your Role</p>
            <div className='flex mx-20  justify-center my-14 space-x-10'>
            <div className='bg-[#1C1D2E] hover:bg-orange-400 text-white cursor-pointer hover:text-gray-800 rounded-xl  w-[400px]'>
                <div className='flex rounded-lg my-10  flex-col space-y-5 py-5 mx-4'>
                   <p className='text-4xl font-bold text-center  '>Send Rewards</p>
                   <p className='text-xl   px-5 text-justify'>Send tokens effortlessly to your chosen recipients as a token of your appreciation, in just a few clicks.</p>
                </div>
            </div>
            <div className='bg-[#1C1D2E] rounded-xl hover:bg-orange-400 cursor-pointer text-white hover:text-gray-800  w-[400px]'>
                <div className='flex rounded-lg my-10  flex-col space-y-5 py-5 mx-4'>
                   <p className='text-4xl font-bold text-center '>Claim Rewards</p>
                   <p className='text-xl  text-justify px-5 '>Claim tokens seamlessly by entering a code or link, turning your rewards into real value with simplicity and speed.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home