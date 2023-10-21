import React ,{useEffect, useState,useCallback} from 'react'
import Navbar from './Components/Navbar.jsx'
import { useRouter } from 'next/router'
import { Personhood } from '@anima-protocol/personhood-sdk-react'
import '@anima-protocol/personhood-sdk-react/style.css'
import { useAccount, useSignMessage } from 'wagmi'

import {RegisterUser} from "../utils/Blockchain"

function Register() {

  const [Name, setName] = useState(''); // Initialize the state with an empty string
  const [email, setEmail] = useState(''); // Initialize the state with an empty string

  const router = useRouter()

 async   function Submit(){
const res = await RegisterUser({name:Name,email:email})

console.log(res);
      router.push("/Home")
    }
    const { signMessageAsync } = useSignMessage()
    const [sessionId, setSessionId] = useState(null);

    useEffect(() => {
      const initSession = async () => {
        if (sessionId) return;
        const myHeaders = new Headers();
        myHeaders.append('Api-Key', 'test_tA79qXPXPAl9hl9ciJMTPdFrKTAgWetUcsR55hyBVTFjARhVAWVRMgMB9adOmoAE');
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow',
        };
        try {
          const response = await fetch('https://api.pop.anima.io/v1/personhood/init', requestOptions);
          console.log("res",response)
          const result = await response.json();
          console.log("res",result.session_id)
          setSessionId(result?.session_id); // Assuming the response contains a field named 'sessionId'
        } catch (error) {
          console.log('Initialization error', error);
        }
      };
      initSession();
    }, []);
    console.log("ses",sessionId)
    useEffect(() => {
      const fetchSessionDetails = async () => {
        if (!sessionId) return;
        const myHeaders = new Headers();
        myHeaders.append('Api-Key', 'test_tA79qXPXPAl9hl9ciJMTPdFrKTAgWetUcsR55hyBVTFjARhVAWVRMgMB9adOmoAE');
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow',
        };
        try{
          const response = await fetch(`https://api.pop.anima.io/v1/sessions/${sessionId}/details`, requestOptions);
          console.log("res1",response)
          const result = await response.json();
          console.log("res1",result)
        } catch (error) {
          console.log('Fetch session details error', error);
        }
      };
  
      fetchSessionDetails();
    }, [sessionId]);
  
    const { address } = useAccount()
  console.log("add",address)
    const sign = useCallback(
      (payload: string) => signMessageAsync({ message: payload }),
      [signMessageAsync]
    )
  
    const shared = useCallback((e: { info: string }) => {
      console.log('shared', e.info)
    }, [])
  return (
    <div className="bg-[#090022] min-h-screen ">
        <Navbar />
        <div className='py-10'>
            <p className='text-center text-3xl font-bold text-white'>Registration</p>
            <div className='bg-[#1C1D2E] rounded-xl mx-96'>
                <div className='flex rounded-lg my-10  flex-col space-y-7 py-10 mx-40'>
                    <div className='flex flex-col '>
                   <span className='px-6'> <label className='text-white absolute  top-[230px]  bg-[#1C1D2E] px-2 font-semibold' >Name</label></span>
                    <input className='h-10 text-white rounded-lg bg-transparent border border-gray-300 border-opacity-90 px-2'  type="text" />
                    </div>
                    <div className='flex flex-col'>
                    <span className='px-6'> <label className='text-white absolute  top-[302px] bg-[#1C1D2E] font-semibold px-2' >Email</label></span>
                    <input className='h-10 text-white rounded-lg bg-transparent border border-gray-300 border-opacity-90  px-2' type="email"/>
                    
                    </div>
                    <Personhood
                             onFinish={shared}
        sessionId={sessionId}
        signCallback={sign}
        walletAddress={address}
      />
                    <button onClick={Submit} className="bg-[#FF6B00] px-3 py-2 rounded-lg text-white font-semibold text-xl">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register