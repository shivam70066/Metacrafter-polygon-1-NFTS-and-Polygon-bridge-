## Author: Shivam Gupta
## Metacrafter Username: shivam311
## UID: 22mca20112
## Email: 22mca20112@cuchd.in


### Project
Metacrafter Polygon advanced Module 1
### Project Rubric
To successfully complete the Challenge, your project should:

1. Generate a 5-item collection using DALLE 2 or Midjourney
2. Store items on IPFS using pinata.cloud
3. Deploy an ERC721 or ERC1155 to the Goerli Ethereum Testnet
      You should have a promptDescription function on the contract that returns the prompt you used to generate the images
4. Map Your NFT Collection using Polygon network token mapper. Note: this isn’t necessary but helpful for visualization.
5. Write a hardhat script to batch mint all NFTs. Hint: ERC721A is optimal here.
6. Write a hardhat script to batch transfer all NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge
      * Approve the NFTs to be transferred
      * Deposit the NFTs to the Bridge
      * Test balanceOf on Mumbai

### Installation and Execution
  1. First fork and clone my repo.
  2. Do **npm i**
  3. Add your environment variables in .env file.
  4. Run **npx hardhat compile**
  5. **npx hardhat run scripts/deploy.js ---network goerli** will deploy your ERC721A contract to goerli testnet.
  6. The deployed contract address will get written in contractAddress.js
  7. **npx hardhat run scripts/mintAllNFTS.js --network goerli** to mint all the nft
  8. **npx hardhat run scripts/approveAndDeposit.js --network goerli** to approve and deposit transaction on polygon via fxportal bridge
  9. Wait for 22 to 30 min for this to approve and deposit on polygon.
  10. **npx hardhat run scripts/getPromptDescription.js --network goerli** to get the prompt description and other information about the NFT.
  11. **npx hardhat run scripts/balanceOf.js --network mumbai** to get the balance of deployed tokens.
  12. Done

### Tools Used  
  * Lexica
  * ERC721A
  * solidity
  * hardhat
  * pinata

### Output

PolyGon Contract Address On mumbai testnetwork: 0xd2A8463d13f2F8ADB3dcD54f3F5e25B27f87436f
### [Polyscan link](https://mumbai.polygonscan.com/token/0xd2A8463d13f2F8ADB3dcD54f3F5e25B27f87436f)
EtherScan Contract Address: 0xd7E2eAf14c0b785eDb93AB3306D486264fcdb753
### [Etherscan link](https://goerli.etherscan.io/address/0xd7E2eAf14c0b785eDb93AB3306D486264fcdb753)




