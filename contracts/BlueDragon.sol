// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "erc721a/contracts/ERC721A.sol";

contract BlueDragon is ERC721A {
    uint256 public constant MAX_SUPPLY = 5;
    string public baseURI =
        "https://gateway.pinata.cloud/ipfs/QmdvuULjJKKj8hBXrRCq26h3p3omqwt9ZJR44AC6CuX42K/";
    address public owner;

    constructor() ERC721A("BlueDragon", "B-Drag") {
        owner = msg.sender;
    }

    // About NFT
    function getName() public view returns (string memory) {
        return name();
    }

    function getSymbol() public view returns (string memory) {
        return symbol();
    }

    // NFT URI
    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    // prompt used to generate nft
    function promptDescription() external pure returns (string memory) {
        return
            "A Blue dragon with armor on his body and fire on his tail..";
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only contract owner can call this function"
        );
        _;
    }

    error QuantityInvalid(string message);

    // function to mint tokens
    function mint(uint256 quantity) external payable onlyOwner {
        uint256 totalTokens = totalSupply() + quantity;

        if (totalTokens > MAX_SUPPLY) {
            revert QuantityInvalid("Your given quantity is invalid");
        }
        _safeMint(msg.sender, quantity);
    }
}
