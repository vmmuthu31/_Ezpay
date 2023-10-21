import Web3 from "web3";
import abiPay from "./abipay.json";
import { ethers } from "ethers";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
const { ethereum } = isBrowser();
if (ethereum) {
  isBrowser().web3 = new Web3(ethereum);
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}

const Address = "0x4d67733130EDC90cD571cB5cA8DB968f2571196B";

export const CrossChainPay = async ({ amount }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  console.log(provider);
  const signer = provider.getSigner();
  console.log(signer);
  const Role = new ethers.Contract(Address, abiPay, signer);
  console.log(Role);
  const tokenId = await Role.sendCrossChainDeposit( "6",
  "0x5e6f29Ab2c19323B6715ca7E3892330a84749004",
  "0x0138bD666fA3Cc835B4513f57e97a800958e061f",
  "10",
  "0xbe49ac1EadAc65dccf204D4Df81d650B50122aB2",{
    value:ethers.utils.parseEther("1",18)
  });
  console.log(tokenId);
  return tokenId;
};

