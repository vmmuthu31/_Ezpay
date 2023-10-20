import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from "wagmi/providers/public";
import type { AppProps } from "next/app";
import { polygonMumbai } from "viem/chains";
import { connectors } from "./utils/wallet";
import React, {useState,useEffect} from 'react';
import { AuthProvider } from "@arcana/auth";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
  polygonMumbai
  ],
  [publicProvider()]
);

/*
const { connectors } = getDefaultWallets({
  appName: 'RainbowKit demo with Auth SDK',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});
*/

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: connectors(chains),
  publicClient,
  webSocketPublicClient,
});
function MyApp({ Component, pageProps }: AppProps) {
  const [userInfo, setUserInfo] = useState(null);
  
  const authProvider = new AuthProvider('xar_test_87f34a9c7879cd4b726ba36a99e164837d70143a');

  useEffect(() => {
    async function fetchUserInfo() {
      try {
      await authProvider.init()
        const user = await authProvider.getUser();
     //   setUserInfo(user);
        console.log(user.id)
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    }

    fetchUserInfo();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts.


  return ( 
    <React.StrictMode>
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}>
      <Component {...pageProps} />
    </RainbowKitProvider>
  </WagmiConfig>
  </React.StrictMode>
  )
  ;
}

export default MyApp;
