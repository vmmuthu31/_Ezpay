import React, { useState } from 'react'
import { useRouter } from 'next/router'
import HomeNav from './Components/HomeNav'
import {AiOutlinePlus } from "react-icons/ai"
import {RxCross2} from "react-icons/rx"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SendRewards() {
    const router = useRouter();
    const [emails, setEmails] = useState([]);
    const [currentEmail, setCurrentEmail] = useState('');

    function handleSubmit() {
        toast.success("Claimed  Successfully!");

        router.push("/Home");
    }

    function handleAddEmail() {
        if (currentEmail) {
            setEmails([...emails, currentEmail]);
            setCurrentEmail('');
        }
    }

    function handleDeleteEmail(index) {
        const newEmails = [...emails];
        newEmails.splice(index, 1);
        setEmails(newEmails);
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleAddEmail();
        }
    }


  return (
    <div className="bg-[#090022] min-h-screen ">
        <HomeNav />
        <div className='py-10'>
            <p className='text-center text-3xl font-bold text-white'>Send Token Rewards</p>
            <div className='bg-[#1C1D2E] rounded-xl mx-96'>
                <div className='flex rounded-lg my-10  flex-col space-y-7 py-10 mx-40'>
                <div >
                        <label className='text-white     font-semibold' >Send Token Rewards</label>
                            <div className='flex space-x-3 justify-between'> 
                    <input className='h-10 text-white w-full bg-[#1C1D2E] rounded-lg bg-transparent border border-gray-300 border-opacity-90 px-2' type="text" />
                    <select className='px-2 h-10 border border-gray-500 text-white text-lg bg-[#1C1D2E] rounded-md '>
                            <option>
                                USDC
                            </option>
                            <option>
                                Ethereum
                            </option>
                            <option>
                                Aptos
                            </option>
                            <option>
                                Flow
                            </option>
                        </select>
                    </div>
                    </div>

                    <div className='flex flex-col'>
                <label className='text-white bg-[#1C1D2E] font-semibold px-2'>Enter the Emails</label>
                <div className='relative mb-5'>
                    <input
                        className='h-10 w-full  text-white rounded-lg bg-transparent border border-gray-300 border-opacity-90 px-2 pl-4'
                        type="email"
                        value={currentEmail}
                        onChange={(e) => setCurrentEmail(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleAddEmail} className="absolute top-1/2 transform -translate-y-1/2 right-2">
                        <AiOutlinePlus className='text-white  border px-1 py-1 text-2xl rounded' />
                    </button>
                </div>
                {emails.map((email, index) => (
                    <div key={index} className="h-10 flex justify-between w-full text-gray-500 rounded-lg bg-transparent border border-gray-300 border-opacity-90 px-2 pl-4 my-1">
                     <span className='pt-2'>   {email}</span>
                        <button onClick={() => handleDeleteEmail(index)}><RxCross2 className='text-white  border px-1 py-1 text-2xl rounded-xl'/></button>
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit} className="bg-[#FF6B00] px-3 py-2 rounded-lg text-white font-semibold text-xl">Submit</button>
          </div>
          <ToastContainer />
            </div>
        </div>
    </div>
  )
}

export default SendRewards