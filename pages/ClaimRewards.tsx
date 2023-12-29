import React, { useState } from 'react';
import HomeNav from './Components/HomeNav';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getBountyAmount } from '../utils/Blockchain';
import { CrossChainPay } from "../utils/EazyPay";

function ClaimRewards() {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [link, setLink] = useState("");
    const [email, setEmail] = useState("");
    const [claimAmount, setClaimAmount] = useState('');
    const [selectedToken, setSelectedToken] = useState('USDCP');

    const handleConfirm = async () => {
        if (!email || !link) {
            toast.error("Please enter both email and code");
            return;
        }
    
        try {
            const response = await fetch('http://localhost:8000/api/claimreward', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ uniqueCode: link, emailAddress: email })
            });
    
            console.log("Status Code:", response.status); // Log status code for debugging
            alert("Reward claimed successfully")
            const resv  = await CrossChainPay({amount:10000000000})
            console.log("resv",resv)
            if (!response.ok) {
                const errorResponse = await response.text(); // Or response.json() if your server sends JSON
                console.error("Error Response:", errorResponse);
                toast.error("Error in claiming reward");
                return;
            }
    
            const res = await response.json();
            setClaimAmount(res.amount); 
            setIsConfirmed(true);
       
            toast.success("Reward claimed successfully");
        } catch (error) {
            console.error('Fetch operation error:', error);
            toast.error("Failed to confirm!");
        }
    };
    
    

    const handleInputChange = (event) => {
        setClaimAmount(event.target.value); 
    };

    async function handleSubmit() {
        const res  = await CrossChainPay({ amount: claimAmount, email: email });
        console.log(res);
        toast.success("Claimed Successfully!");
    };

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
                                                       <>
                                                       <div className='flex flex-col'>
                                                           <label className='text-white bg-[#1C1D2E] font-semibold '>Enter Email Address</label>
                                                           <input
                                                               className='h-10 w-full text-white rounded-lg bg-transparent border border-gray-300 border-opacity-90 px-2 pl-4'
                                                               type="email"
                                                               value={email}
                                                               onChange={(e) => setEmail(e.target.value)}
                                                           />
                                                       </div>
                                                       <div className='flex flex-col'>
                                                           <label className='text-white bg-[#1C1D2E] font-semibold '>Enter the Link or Code</label>
                                                           <input
                                                               className='h-10 w-full text-white rounded-lg bg-transparent border border-gray-300 border-opacity-90 px-2 pl-4'
                                                               type="text"
                                                               value={link}
                                                               onChange={(e) => setLink(e.target.value)}
                                                               onKeyPress={handleKeyPress}
                                                           />
                                                       </div>
                                                       <button onClick={handleConfirm} className="bg-[#FF6B00] px-3 py-2 rounded-lg text-white font-semibold text-xl">Confirm</button>
                                                   </>
                       
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
                                        <input className='h-10 text-white w-full bg-[#1C1D2E] rounded-lg bg-transparent border border-gray-300 border-opacity-90 px-2' value={claimAmount} disabled  onChange={(e) => setClaimAmount(e.target.value)} type="text"  />
                                        <select className='px-2 h-10 border border-gray-500 text-white text-lg bg-[#1C1D2E] rounded-md '  value={selectedToken}
                                    onChange={(e) => setSelectedToken(e.target.value)} >
                                        <option value="USDCP">USDC/Polygon</option>
                                    <option value="Aptos">Aptos</option>
                                    <option value="USDCA">USDC/Avax</option>
                                    <option value="Ethereum">Ethereum</option>
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

export default ClaimRewards;
