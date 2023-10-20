import React, { useState } from 'react';
import HomeNav from './Components/HomeNav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function SendRewards() {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [link, setLink] = useState("");

    const handleConfirm = () => {
        // Simulate fetching data from the link
        setTimeout(() => {
            setIsConfirmed(true);
        }, 1000); // 1 second delay for simulation
    }
    
    function handleSubmit() {
        toast.success("Claimed Successfully!");
    }

    
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleConfirm();
        }
    }

    return (
        <div className="bg-[#090022] min-h-screen ">
            <HomeNav />
            <div className='py-10'>
                <p className='text-center text-3xl font-bold text-white'>Claim Token Rewards</p>
                <div className='bg-[#1C1D2E] rounded-xl mx-96'>
                    <div className='flex rounded-lg my-10 flex-col space-y-7 py-10 mx-40'>
                        {!isConfirmed ? (
                            <div className='flex flex-col'>
                                <label className='text-white bg-[#1C1D2E] font-semibold '>Enter the link or Code</label>
                                <div className='relative mb-5'>
                                    <input
                                        className='h-10 w-full text-white rounded-lg bg-transparent border border-gray-300 border-opacity-90 px-2 pl-4'
                                        type="text"
                                        value={link}
                                        onChange={(e) => setLink(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                    />
                                </div>
                                <button onClick={handleConfirm} className="bg-[#FF6B00] px-3 py-2 rounded-lg text-white font-semibold text-xl">Confirm</button>
                            </div>
                        ) : (
                            <>
                                <div className='flex flex-col'>
                                    <label className='text-white bg-[#1C1D2E] font-semibold '>Enter the link or Code</label>
                                    <input
                                        className='h-10 w-full text-white rounded-lg bg-transparent border border-gray-300 border-opacity-90 px-2 pl-4'
                                        type="text"
                                        value={link}
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <label className='text-white font-semibold'>Claim Token Rewards</label>
                                    <div className='flex space-x-3 justify-between'>
                                        <input className='h-10 text-white w-full bg-[#1C1D2E] rounded-lg bg-transparent border border-gray-300 border-opacity-90 px-2' type="text"  />
                                        <select className='px-2 h-10 border border-gray-500 text-white text-lg bg-[#1C1D2E] rounded-md ' >
                                            <option>USDC</option>
                                            <option>Ethereum</option>
                                            <option>Aptos</option>
                                            <option>Flow</option>
                                        </select>
                                    </div>
                                </div>
                                <button onClick={handleSubmit} className="bg-[#FF6B00] px-3 py-2 rounded-lg text-white font-semibold text-xl">Claim Now</button>
                                <ToastContainer />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendRewards;
