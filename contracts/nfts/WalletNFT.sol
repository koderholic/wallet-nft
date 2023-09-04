pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";


contract WalletNFT is ERC721("Wallet NFT", "WNFT"), Ownable {

    uint public tokenID; 
    string private baseURI;

    function setURI(string memory newURI) public onlyOwner {
        baseURI = newURI;
    }

    function mint(address account, bytes memory data) public onlyOwner {
        tokenID += 1;
        _safeMint(account, tokenID, data);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

}