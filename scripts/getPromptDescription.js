const { ethers } = require("hardhat");
const { contractAddress } = require("./contractAddress.js");
const BlueDragon = require("../artifacts/contracts/BlueDragon.sol/BlueDragon.json");
require("dotenv").config();

async function main() {
  const NFT = await ethers.getContractAt(BlueDragon.abi, contractAddress);

  const NFTName = await NFT.getName();
  console.log("\nNFT name : ", NFTName);

  const NFTsymbol = await NFT.getSymbol();
  console.log("NFT symbol : ", NFTsymbol);

  const prompt = await NFT.promptDescription();
  console.log("Prompt used to generate images : ", prompt + "\n");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
