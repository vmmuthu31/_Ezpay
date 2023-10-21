import Web3 from "web3";
import abi from "./abi.json";
import { ethers } from "ethers";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
const { ethereum } = isBrowser();
if (ethereum) {
  isBrowser().web3 = new Web3(ethereum);
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}

const Address = "0x113A45a91e62af960a1620a73cB574fC07120DeE";

export const RegisterUser = async ({ name, email }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  console.log(provider);
  const signer = provider.getSigner();
  console.log(signer);
  const Role = new ethers.Contract(Address, abi, signer);
  console.log(Role);
  const tokenId = await Role.register(name, email);
  console.log(tokenId);
  return tokenId;
};

export const SendBounty = async ({ amount, token, emails, nos }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  console.log(provider);
  const signer = provider.getSigner();
  console.log(signer);
  const Role = new ethers.Contract(Address, abi, signer);
  console.log(Role);
  const tokenId = await Role.sendBounty(amount, token, emails, nos, {
    value: amount,
  });
  console.log(tokenId);
  return tokenId;
};

export const ClaimBounty = async ({ code, email }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();

  const Role = new ethers.Contract(Address, abi, signer);
  const tokenId = await Role.claimBounty(code, email);
  console.log(tokenId);
  return tokenId;
};
export const getUniqueCode = async ({ email }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(Address, abi, signer);
  const tokenId = await Role.getUniqueCode(email);
  return tokenId;
};

// getPlayerTotalDeposit;

export const getBountyGetters = async ({ code }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  //console.log(provider);
  const signer = provider.getSigner();
  //console.log(signer);
  const Role = new ethers.Contract(Address, abi, signer);
  //console.log(Role);
  const tokenId = await Role.getBountyGetters(code);
  //console.log(tokenId);
  return tokenId;
};
export const getBountyAmount = async ({ code }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  //console.log(provider);
  const signer = provider.getSigner();
  //console.log(signer);
  const Role = new ethers.Contract(Address, abi, signer);
  //console.log(Role);
  const tokenId = await Role.getBountyAmount(code);
  //console.log(tokenId);
  return tokenId;
};
export const getBountyToken = async ({ code }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  //console.log(provider);
  const signer = provider.getSigner();
  //console.log(signer);
  const Role = new ethers.Contract(Address, abi, signer);
  //console.log(Role);
  const tokenId = await Role.getBountyToken(code);
  //console.log(tokenId);
  return tokenId;
};
export const getPlayerDepositCount = async ({ address }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(Address, gamblingabi, signer);
  const tokenId = await Role.getPlayerDepositCount(address);
  return tokenId;
};
