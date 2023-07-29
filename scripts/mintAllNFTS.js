const { ethers } = require("hardhat");
const { contractAddress } = require("./contractAddress.js");
const BlueDragon = require("../artifacts/contracts/BlueDragon.sol/BlueDragon.json");
require("dotenv").config();

async function main() {
  const NFT = await ethers.getContractAt(BlueDragon.abi, contractAddress);
  const tx = await NFT.mint(5);
  await tx.wait();
  console.log(`Congratulations!! 5 B-Drag tokens successffuly minted. `);
  console.log(
    "Wallet balance : ",
    (await NFT.balanceOf(process.env.WALLET_ADDRESS)).toString()
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
