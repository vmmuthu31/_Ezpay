import type { NextPage } from "next";
import Navbar from "./Components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="bg-[#090022] ">
     <Navbar />
     <div className=" bg-contain bg-[url('https://blogger.googleusercontent.com/img/a/AVvXsEjO-NKDpZSQhBjl2UB0LC1LLg7e7aMBeY-gHnzyVURnHiSF6HvH_5hvY8VF4DOlkUQ6YVw2tj5Za0d6l0CJ8kciftbKwPNhUTHbYtlGhmJ3oHLu27jcWoSDw0kJoxmvNXM3S5pj8nWPeay1kEOBmCEgDOzZvOxDJpEd6pOe3lkCTJ1qcgwlQNJzpXljBuM')]">
     <div className="flex items-center space-y-8 text-center pt-40 pb-32 justify-center  flex-col">
      <p className=" cs font-bold text-6xl bg-clip-text text-transparent" style={{
    backgroundImage: 'linear-gradient(90deg, #FF6B00 9.32%, #8A00DE 46.3%, #00A070 80.25%)'
  }}>Unlock Infinite Possibilities</p>
      <p className="text-white font-semibold text-5xl">Reward, Share, and Claim Tokens Seamlessly!!</p>
      <p className="mx-80 text-white text-xl">EZPay, your gateway to a new world of token rewards and sharing. We&nbsp;ve made it easier than ever to show appreciation, send valuable tokens, and enjoy the benefits of a seamless rewards ecosystem.</p>
      <button className="bg-[#FF6B00] px-3 py-2 rounded-lg text-white font-semibold text-xl">Get Started</button>
     </div>
     </div>

     <div className="py-2">
      <p className="text-4xl font-bold text-white text-center">Tokens : Send, Claim. <span className="text-orange-600">No Hassle!</span></p>
      <div className="flex  py-10  gap-5 mx-10 ">
        <div className="flex rounded-xl bg-[#1e1333] border-gray-200 border border-opacity-40 border-gray-200 px-5  py-10 space-y-6">
        <div>
        <p className="text-4xl px-10  text-white font-bold">Effortless Token Gifting</p>
        <p className="text-lg  px-10 pt-8 text-justify text-white font-semibold">Send tokens to up to 5 recipients in<br/> a matter of seconds. Choose the token<br/> type and amount, and let our platform handle<br/> the rest. Show your appreciation with a click.</p>
        </div>
        <div>
          <img className="w-full h-60" src="https://s3-alpha-sig.figma.com/img/134f/d99f/6dd56306e302abb10310674489bf0d37?Expires=1698624000&Signature=TeEwLeBUI71clPZ5Pwez0mB7u1oRDUi~asqGEo1~Y0K2JcJyIlkcQBFV2n87kT1RZ~AYRuHO~fbbdz1LMOgvtQfz1ZuWnJurfku~~GaZT3vl99cRotNt9aOcjOhOtMPKc~z~9M~fqKVufl7kYvOKBOU9l7CPHhy-CmEcsdUeQQxYqyyKtIEMhGgyDWCXkzVBmb9IWfCPSghfb-iXQWX61YI8yws1oQraA3zDxKU-W1VjsVcsKhxaQS1lZfFLEiIm6zFuDcrPEQPn0ySHR6eYAaDNiRu85NyJ9iaQko7adUyOl-HqdzW1r66abimrRiikVdllYczV0ldwQ-GfSROnsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </div>
        </div>
        <div className="flex-1 rounded-xl bg-[#1e1333]  border-gray-200 border border-opacity-40 py-10 space-y-6 flex-col">
       
        <p className="text-4xl px-12 text-white font-bold">Quick Token Redemption</p>
        <p className="text-lg text-white px-10 font-semibold">Claiming tokens is as simple as entering a code or a link. No complicated procedures or long waiting times. Get your tokens swiftly and effortlessly.</p>
        </div>
      
      </div>
      <div className="flex mb-10 space-x-4 mx-10">
        <div className="flex-2 rounded-xl bg-[#1e1333] border-gray-200 border border-opacity-40 py-10 space-y-6 flex-col">
        
        <p className="text-4xl px-10 text-white font-bold">Tokens for Every Occasion</p>
        <p className="text-lg text-white px-10 font-semibold">Explore a world of tokens, from cryptocurrencies to custom loyalty points. Whatever your need, we offer a wide range of token options to suit your unique gifting preferences.</p>
        </div>
        <div className="flex flex-col space-y-3">
        <div className="flex  rounded-xl bg-[#1e1333] border-gray-200  border border-opacity-40 py-5 space-y-6 flex-col">
        <p className="text-4xl px-12 text-white font-bold">Fort Knox for Your Tokens</p>
        <p className="text-lg text-white px-12 font-semibold">Your tokens are safe and sound with us. Our secure storage ensures that your valuable assets are protected from any threats. Peace of mind, guaranteed.</p>
        </div>
        <div className="flex rounded-xl bg-[rgb(30,19,51)] border-gray-200 border border-opacity-40 py-4 "> 
         <p className="text-2xl px-12 text-white font-bold">Watch what EZPay can do</p>
         <p className="text-lg text-gray-800 bg-white px-3 py-2 rounded-lg font-semibold">Play Demo</p>
         </div>
        </div>
        </div>
     </div>
    </div>
  );
};

export default Home;
