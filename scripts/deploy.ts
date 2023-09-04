import { ethers } from "hardhat";
import {WalletNFT__factory} from "../typechain-types"
import {AAWallet__factory} from "../typechain-types"

import { TokenboundClient } from '@tokenbound/sdk'
import crypto from "crypto"

async function main() {
  let signers = await ethers.getSigners()

    // console.log("============= Deploying Wallet NFT ============ \n")
  let WalletNFT = await ethers.getContractFactory("WalletNFT")
  // let walletNFT = await WalletNFT.deploy()
  // await walletNFT.waitForDeployment()
  // console.log(`============= Wallet NFT Deployed at > ${await walletNFT.getAddress()} ============ \n`)
  // await walletNFT.mint("0x905b4B2BE48160E5dC946CeB2dCa9Ce8DF5dDBe8", new Uint8Array(0))

  let walletNFT = new ethers.Contract("0x142FB0dbc1c55aB74444cd54EE3E5787A90fe5b0",
  WalletNFT.interface, signers[0])
  console.log(`============= NFT Minted > ${await walletNFT.tokenID() } `)
  console.log(`============= NFT Minted > ${await walletNFT.ownerOf(1) } `)
  console.log(`============= NFT Minted > ${await walletNFT.balanceOf("0x905b4B2BE48160E5dC946CeB2dCa9Ce8DF5dDBe8") } `)
  
  // let tokenboundClient = new TokenboundClient({signer: signers[0], chainId: 80001})
  // let account = await tokenboundClient.createAccount({
  // tokenContract: "0x142FB0dbc1c55aB74444cd54EE3E5787A90fe5b0",
  // tokenId: "1", 
  // implementationAddress: "0xCD92E9797003e48cb88B25aada529838b2Ee6Cab" 
  //registryAddress: `0x2d25602551487c3f3354dd80d76d54383a243358`
// }) 


let Registry = await ethers.getContractFactory("ERC6551Registry")
let registry = new ethers.Contract("0x2d25602551487c3f3354dd80d76d54383a243358",
Registry.interface, signers[0]
)
let salt = crypto.randomBytes(2).readIn(0)
console.log("salt >> ", salt)
let tx = await registry.createAccount(
  "0xCD92E9797003e48cb88B25aada529838b2Ee6Cab",
  80001,
  "0x142FB0dbc1c55aB74444cd54EE3E5787A90fe5b0",
  1,
  salt,
  new Uint8Array(0)
  )
// console.log(`============= ERC6551 Wallet > ${account} ========= `)

  // console.log("============= Deploying ERC6551 Wallet  ============ \n")
  // let AAWallet = await ethers.getContractFactory("AAWallet")
  // let wallet = await AAWallet.deploy()
  // await wallet.waitForDeployment()

  // console.log(`============= ERC6551 Wallet Deployed at > ${await wallet.getAddress()}  ============ \n`)

  // let ref = await WalletNFT__factory.connect("0xd9D03ab1712A26e0e2c1911828C9890764E6cBE3", signers[0]).mint("0x905b4B2BE48160E5dC946CeB2dCa9Ce8DF5dDBe8", new Uint8Array(0))
  
  // await WalletNFT("0x905b4B2BE48160E5dC946CeB2dCa9Ce8DF5dDBe8", new Uint8Array(0))
  // console.log(`============= NFT Minted > ${await WalletNFT__factory.fromSolidity(ethers.ZeroAddress, signers[0]).attach("0xd9D03ab1712A26e0e2c1911828C9890764E6cBE3")} ============ \n`)

  // console.log("WalletNFT >> ", (await WalletNFT.name()))

  // let AAWallet = AAWallet__factory.connect("0xCD92E9797003e48cb88B25aada529838b2Ee6Cab", signers[0])


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
