const { ethers } = require("hardhat");
const { contractAddress } = require("./contractAddress.js");
const BlueDragon = require("../artifacts/contracts/BlueDragon.sol/BlueDragon.json");
const FXRootContractAbi = require("../FxRootABI.json");
require("dotenv").config();

async function main() {
  const BlueDragonContract = await ethers.getContractAt(
    BlueDragon.abi,
    contractAddress
  );

  const fxRoot = await ethers.getContractAt(
    FXRootContractAbi,
    "0xF9bc4a80464E48369303196645e876c8C7D972de"
  );

  const supply = process.env.TOTAL_SUPPLY;
  console.log("Process started.... You have to wait a little bit.\n");
  for (let id = 0; id < supply; id++) {
    console.log("NFT - " + id + " is approving");
    let approveTxn = await BlueDragonContract.approve(
      process.env.FXROOT_ADDRESS, + id
    );

    await approveTxn.wait();
    console.log("NFT - " + id + " approved");
    console.log("NFT - " + id + " is depositing");
    let depositTxn = await fxRoot.deposit(
      contractAddress,
      process.env.WALLET_ADDRESS, + id,
      "0x6566"
    );
    await depositTxn.wait();
    console.log("NFT - " + id + " deposited");
  }
  console.log("Congratulations!! Process is done.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
