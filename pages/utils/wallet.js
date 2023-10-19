import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { getAuthProvider } from "./getArcanaAuth";
import { ArcanaConnector } from "@arcana/auth-wagmi";

export const ArcanaRainbowConnector = ({ chains }) => {
  return {
    id: "arcana-auth",
    name: "Login with Email/Social",
    iconUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adobe.com%2Fcreativecloud%2Fdesign%2Fdiscover%2Fmascot-logo-design.html&psig=AOvVaw1IVdkA-UZJ6T3cI6B0Wkro&ust=1697817052602000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDHl8O7goIDFQAAAAAdAAAAABAI",
    iconBackground: "#101010",
    createConnector: () => {
      const connector = new ArcanaConnector({
        chains,
        options: {
          auth: getAuthProvider(),
        },
      });
      return {
        connector,
      };
    },
  };
};

const connectors = (chains) =>
  connectorsForWallets([
    {
      groupName: "Recommended",
      wallets: [ArcanaRainbowConnector({ chains }), metaMaskWallet({ chains })],
    },
  ]);

export { connectors };
