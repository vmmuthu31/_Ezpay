import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import type { AppProps } from "next/app";
import { polygonMumbai } from "viem/chains";

const { chains, publicClient,webSocketPublicClient } = configureChains(
  [ polygonMumbai],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider(),
  ]
);

// const { connectors } = getDefaultWallets({
//   appName: "My RainbowKit App",
//   projectId: "vm",
//   chains,
// });

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: connectors(chains),
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}>
      <Component {...pageProps} />
    </RainbowKitProvider>
  </WagmiConfig>
  )
  ;
}

export default MyApp;
